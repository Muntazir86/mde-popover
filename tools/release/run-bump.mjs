#!/usr/bin/env node
// Commits an Nx Release version bump and changelog without tagging, pushing,
// or publishing.
//
//   node tools/release/run-bump.mjs patch
//   node tools/release/run-bump.mjs minor
//   node tools/release/run-bump.mjs          (conventional commits)
//
// The Release workflow checks this commit out on a new branch and opens a pull
// request. Tagging, the GitHub release, and npm staging happen later, when
// someone runs the workflow with mode package-version.
//
// Top-level `nx release` has no CLI switch for "do not tag" or "do not open a
// GitHub release". It tags unless `release.git.tag` is false, and it pushes
// and opens a GitHub release whenever `createRelease` is set. Those are turned
// off in nx.json only for this process, then the file is restored so the
// commit does not contain that edit.
//
// Invoke `nx release [specifier] --skip-publish` only. Nx 23 rejects `--yes`
// together with `--skip-publish` (they answer the same publish prompt).
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const NX_JSON = 'nx.json';
const LIB_MANIFEST = 'libs/@muntazir/material-extended/package.json';
const ALLOWED = new Set(['', 'patch', 'minor']);

const fail = (msg) => {
  console.error(`::error::${msg}`);
  process.exit(1);
};

if (process.argv.length > 3) fail('run-bump.mjs takes at most one specifier.');
const specifier = process.argv.length > 2 ? process.argv[2] : '';
if (!ALLOWED.has(specifier)) {
  fail(`Refusing specifier "${specifier}". Use patch, minor, or no specifier for conventional.`);
}

// Never built from user input beyond the allow-list above, and never includes --yes.
const nxArgs = ['nx', 'release', '--skip-publish'];
if (specifier) nxArgs.splice(2, 0, specifier);
if (nxArgs.includes('--yes')) fail('Refusing to pass --yes together with --skip-publish.');

const original = readFileSync(NX_JSON, 'utf8');
const nx = JSON.parse(original);
const projectChangelogs = nx.release?.changelog?.projectChangelogs;
if (!projectChangelogs || typeof projectChangelogs !== 'object') {
  fail('nx.json has no project changelog, so GitHub release creation cannot be disabled.');
}
nx.release.git = { ...(nx.release.git ?? {}), tag: false };
projectChangelogs.createRelease = false;

const before = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
writeFileSync(NX_JSON, JSON.stringify(nx, null, 2) + '\n');

let status = 0;
try {
  console.log(`Running: npx ${nxArgs.join(' ')}`);
  execFileSync('npx', nxArgs, {
    stdio: 'inherit',
    env: { ...process.env, NX_DAEMON: 'false' },
  });
} catch (err) {
  status = typeof err.status === 'number' && err.status !== 0 ? err.status : 1;
} finally {
  writeFileSync(NX_JSON, original);
}

if (status !== 0) process.exit(status);

const after = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
if (after === before) fail('nx release did not create a commit.');

const changed = execFileSync('git', ['diff', '--name-only', before, after], { encoding: 'utf8' });
if (changed.split('\n').includes(NX_JSON)) {
  fail('The release commit includes nx.json. The temporary release.git edit must not be pushed.');
}
if (readFileSync(NX_JSON, 'utf8') !== original) {
  fail('nx.json was not restored after nx release.');
}

const pointed = execFileSync('git', ['tag', '--points-at', 'HEAD'], { encoding: 'utf8' })
  .split('\n')
  .map((tag) => tag.trim())
  .filter(Boolean);
if (pointed.length) {
  for (const tag of pointed) execFileSync('git', ['tag', '-d', tag], { stdio: 'inherit' });
  fail(`nx release tagged HEAD (${pointed.join(', ')}). Deleted the local tag; nothing was pushed.`);
}

const expected = process.env.VERSION;
if (expected) {
  for (const manifest of [LIB_MANIFEST, 'package.json']) {
    const actual = JSON.parse(readFileSync(manifest, 'utf8')).version;
    if (actual !== expected) fail(`${manifest} is ${actual}, expected ${expected}.`);
  }
}
