#!/usr/bin/env node
// Resolves and guards the version the Release workflow publishes.
//
//   node tools/release/resolve-release.mjs --mode <package-version|patch|minor|conventional>
//   node tools/release/resolve-release.mjs --notes <version>   (prints that CHANGELOG section)
//
// package-version releases exactly the version in the library package.json (first release of a
// major). The other modes let Nx Release bump, but the result must stay in the current major, so a
// breaking-change commit can never push a maintenance branch to the next major.
import { execFileSync } from 'node:child_process';
import { appendFileSync, readFileSync } from 'node:fs';

const LIB = 'libs/@muntazir/material-extended';
const MODES = ['package-version', 'patch', 'minor', 'conventional'];

const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? undefined : args[i + 1];
};
const fail = (msg) => {
  console.error(`::error::${msg}`);
  process.exit(1);
};
const run = (cmd, cmdArgs) =>
  execFileSync(cmd, cmdArgs, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const tryRun = (cmd, cmdArgs) => {
  try {
    return run(cmd, cmdArgs);
  } catch {
    return '';
  }
};
const majorOf = (v) => Number(String(v).split('.')[0]);

const pkg = JSON.parse(readFileSync(`${LIB}/package.json`, 'utf8'));

const notesFor = arg('--notes');
if (notesFor) {
  const changelog = readFileSync(`${LIB}/CHANGELOG.md`, 'utf8');
  const start = changelog.search(new RegExp(`^## \\[?${notesFor.replace(/\./g, '\\.')}\\]?`, 'm'));
  if (start === -1) fail(`CHANGELOG.md has no section for ${notesFor}.`);
  const rest = changelog.slice(start);
  const next = rest.slice(1).search(/^## /m);
  const section = next === -1 ? rest : rest.slice(0, next + 1);
  process.stdout.write(section.split('\n').slice(1).join('\n').trim() + '\n');
  process.exit(0);
}

const mode = arg('--mode') ?? 'package-version';
if (!MODES.includes(mode)) fail(`Unknown mode "${mode}". Use one of: ${MODES.join(', ')}.`);

const current = pkg.version;
const currentMajor = majorOf(current);

// A maintenance branch N.x may only release major N.
const branch =
  process.env.GITHUB_REF_NAME || tryRun('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
const branchMajor = /^(\d+)\.x$/.exec(branch)?.[1];
if (branchMajor && Number(branchMajor) !== currentMajor) {
  fail(`Branch ${branch} is for major ${branchMajor}, but package.json is ${current}.`);
}

let version = current;
let specifier = current;
if (mode !== 'package-version') {
  const nxArgs = ['nx', 'release', 'version', '--dry-run', '--verbose'];
  if (mode !== 'conventional') nxArgs.splice(3, 0, mode);
  const out = tryRun('npx', nxArgs).replace(/\x1b\[[0-9;]*m/g, '');
  const match = /New version (\S+) written/.exec(out);
  if (!match) fail(`Nx Release found nothing to release in "${mode}" mode.`);
  version = match[1];
  specifier = mode === 'conventional' ? '' : mode;
}

if (majorOf(version) !== currentMajor) {
  fail(
    `Refusing to release ${version}: it leaves major ${currentMajor} (package.json is ${current}). ` +
      `A new major needs its own N.x branch and a package.json bump, then a package-version release.`
  );
}

const tag = `v${version}`;
// An existing tag is only accepted when it points at the commit being released and the
// version is not on npm yet. That lets a run whose staging step failed be retried with
// mode package-version instead of leaving a tag with nothing behind it.
let tagExists = false;
const remoteTag = tryRun('git', ['ls-remote', '--tags', 'origin', `refs/tags/${tag}^{}`, `refs/tags/${tag}`]);
if (remoteTag) {
  const head = tryRun('git', ['rev-parse', 'HEAD']);
  const lines = remoteTag.split('\n');
  const peeled = (lines.find((l) => l.endsWith('^{}')) ?? lines[0]).split(/\s+/)[0];
  if (mode !== 'package-version' || peeled !== head) {
    fail(`Tag ${tag} already exists on origin at ${peeled.slice(0, 7)}, not at HEAD.`);
  }
  tagExists = true;
}
if (tryRun('npm', ['view', `${pkg.name}@${version}`, 'version'])) {
  fail(`${pkg.name}@${version} is already on npm.`);
}

// The newest major gets "latest"; older majors get a vN-lts dist-tag, like v5-lts and v6-lts.
const latest = tryRun('npm', ['view', pkg.name, 'dist-tags.latest']);
const distTag = !latest || currentMajor >= majorOf(latest) ? 'latest' : `v${currentMajor}-lts`;

const result = {
  package: pkg.name,
  mode,
  branch,
  current,
  version,
  tag,
  specifier,
  dist_tag: distTag,
  tag_exists: String(tagExists),
  github_latest: String(distTag === 'latest'),
};
for (const [k, v] of Object.entries(result)) console.log(`${k}=${v}`);
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    Object.entries(result).map(([k, v]) => `${k}=${v}\n`).join('')
  );
}
