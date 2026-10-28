# Contributing

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Nx Release reads these messages to choose the next version and to write the library changelog.

```
<type>(<optional scope>): <short summary>

<optional body>

<optional footer>
```

| Type | Version bump |
| --- | --- |
| `feat` | minor |
| `fix` | patch |
| `feat!`, `fix!`, or a `BREAKING CHANGE:` footer | major |
| `perf`, `refactor`, `docs`, `build`, `chore`, `test`, `style`, `ci`, `revert` | none |

Check the latest commit with:

```
npm run commitlint
```

There is no git hook. `commitlint` only checks `HEAD~1..HEAD`, so older non-conventional commits on this branch are left alone.

## CI and deploy

- `.github/workflows/node.js.yml` (Node.js CI) runs lint, library and demo unit tests, all builds, and e2e on pushes to any branch and on pull requests into any branch. Pull requests from branches in this repository reuse the push run for the same commit (their `pull_request` jobs are skipped); pull requests from forks run the jobs.
- `.github/workflows/deploy.yml` publishes the demo to `gh-pages` only after Node.js CI passes for a push to `master`. It builds the demo and pushes `dist/apps/popper-test/browser` (plus `404.html` and `.nojekyll`) to the `gh-pages` branch with git.
- FOSSA scans the repository through its GitHub integration (project `git+github.com/Muntazir86/mde-popover`). It analyzes each pushed commit and posts License Compliance, Security Analysis and Dependency Quality checks on pull requests. There is no FOSSA workflow or API key in this repository; policies and ignores are managed in the FOSSA web app.
- The Node.js version comes from `.nvmrc` (`22.14.0` on `master` and `10.x`, `22.23.3` on `11.x`). Change Node only there. The workflow files are identical on every branch, so merging between `master`, `10.x`, and `11.x` never changes them; only `.nvmrc`, the package versions, and the lock file differ.

## Releasing

Only `@muntazir/material-extended` is in the Nx release. Versioning is fixed: one version for that library. The version is read from `libs/@muntazir/material-extended/package.json`. The same version is written to the root `package.json`.

Git tags use `v{version}` (`releaseTag.pattern`). On `master`, Nx looks for the latest tag across every branch. On other branches it only looks at tags reachable from that branch.

Generated notes are prepended to `libs/@muntazir/material-extended/CHANGELOG.md`, above the hand-written history. Nothing in pull-request or `master` CI publishes to npm. The Release workflow never publishes directly.

Protected branches only accept changes through a pull request, so shipping a bump is two runs:

1. `patch`, `minor`, or `conventional` runs `nx release --skip-publish` (do not combine that with `--yes`; Nx treats them as mutually exclusive). It bumps both manifests, prepends the changelog, and commits on a new branch `release/<branch>-v<version>`. The workflow opens a pull request into the branch you selected and stops. It does not push that branch, tag, create a GitHub release, or stage on npm.
2. Merge the pull request, then run the workflow again on the same branch with `package-version`. That tags `v{version}`, creates the GitHub release from the changelog section, builds, and stages the package. Approve the staged version with 2FA.

Run a release from the branch that owns the major: `master` for the major in its `package.json`, or a maintenance branch such as `10.x` or `11.x` for its own major. The Release workflow file is the same on every branch. A branch named `N.x` can only release major `N`.

Use the [Release workflow](.github/workflows/release.yml): Actions → Release → Run workflow, pick the branch (`master`, `10.x`, `11.x`, ...), type `publish`, and choose a mode:

| Mode | What the workflow does |
| --- | --- |
| `package-version` | Tags, creates the GitHub release, and stages the version already in `libs/@muntazir/material-extended/package.json`. Use it after a bump pull request is merged, for the first release of a major (for example 11.0.0 from `11.x`), and to retry a run whose staging step failed. An existing tag is accepted when it points at the released commit. |
| `patch` / `minor` | Opens a pull request that bumps to the next patch or minor in the branch's current major. After you merge it, run `package-version`. |
| `conventional` | Same as `patch` / `minor`, with the bump chosen from conventional commits since the last `v*` tag. |

`tools/release/resolve-release.mjs` guards every mode. The run fails if the version would leave the major in `package.json` (for example a `feat!` commit), if a branch named `N.x` is not on major `N`, if the version is already on npm or its tag points at another commit, or if npm cannot be reached. A new major needs a manual `package.json` bump (on a new `N.x` branch or on `master`) and a `package-version` release.

The dist-tag is chosen by comparing the release's major with the highest major already on npm (prereleases ignored). The highest major, or a new higher one, is staged with `latest`. Older majors get `v{major}-lts` (for example `v10-lts` once 11.0.0 is out), like the existing `v5-lts` and `v6-lts`. npm fixes the dist-tag when the package is staged; to change it, reject the staged version and run the workflow again. The `package-version` run marks the GitHub release as latest only for the newest major. Pull requests and pushes do not start the workflow.

### Staged publishing

The workflow never publishes directly. Its last step runs `npm stage publish` (npm CLI 11.15 or later) on `dist/@muntazir/material-extended`. The version stays private until a maintainer approves it with 2FA:

1. Open the package on npmjs.com → **Staged Packages**, check the version, files, and dist-tag, then click **Approve**. Or run `npm stage list @muntazir86/material-extended`, `npm stage view <stage-id>`, and `npm stage approve <stage-id>`.
2. To discard a staged version, use **Reject** or `npm stage reject <stage-id>`.

Authentication, preferred first:

- **Trusted publishing (OIDC), no secret.** On npmjs.com → package **Settings** → **Trusted publisher**, add GitHub Actions with repository `Muntazir86/mde-popover`, workflow file `release.yml`, and allow only `npm stage publish`. Staging from GitHub Actions then also gets a provenance attestation. You can then set **Publishing access** to "Require two-factor authentication and disallow tokens".
- **Stage-only token.** Otherwise create a granular access token with packages-and-scopes permission **Read and write (stage only)** (`read-write-stage-only`) for `@muntazir86/material-extended` and save it as the `NPM_TOKEN` repository secret. npm rejects `npm publish` with such a token (`E_STAGE_REQUIRED`).

To preview locally, from a clean checkout of the branch you will release from:

```
node tools/release/resolve-release.mjs --mode package-version
npx nx release patch --skip-publish --dry-run
npx nx build @muntazir/material-extended --configuration production
(cd dist/@muntazir/material-extended && npm stage publish --tag latest --access public --dry-run)
```

`--dry-run` writes nothing. The workflow's bump modes run the same `nx release patch` or `nx release minor` with `--skip-publish` (and without `--yes`) on a new branch and open a pull request; they do not tag or stage. Do not run `nx release` without a specifier before the major has a `v{version}` tag. Without a tag, Nx counts every commit since the first one and can choose the next major.
