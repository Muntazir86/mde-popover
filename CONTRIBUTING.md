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

## Releasing

Only `@muntazir/material-extended` is in the Nx release. Versioning is fixed: one version for that library. The version is read from `libs/@muntazir/material-extended/package.json`. The same version is written to the root `package.json`.

Git tags use `v{version}` (`releaseTag.pattern`). On `master`, Nx looks for the latest tag across every branch.

Generated notes are prepended to `libs/@muntazir/material-extended/CHANGELOG.md`, above the hand-written history. Nx also opens a GitHub release for that tag. Nothing in pull-request or `master` CI publishes to npm, and the Release workflow only stages.

Releases run from `master` only. The Release workflow fails on any other branch, and the `10.x` and `11.x` maintenance branches have no Release workflow. Whatever major `master` is on is the major that gets released. Once `11.x` is merged into `master`, `10.x` patches can no longer be released from `master`.

Use the [Release workflow](.github/workflows/release.yml): Actions → Release → Run workflow on `master`, type `publish`, and choose a mode:

| Mode | Version published |
| --- | --- |
| `package-version` | Exactly the version in `libs/@muntazir/material-extended/package.json`. Use it for the first release of a major (10.0.0 now, 11.0.0 after `11.x` is merged). It tags `v{version}`, creates the GitHub release from that version's `CHANGELOG.md` section, and stages the package. Also use it to retry a run whose staging step failed: the existing tag is accepted when it points at the released commit. |
| `patch` / `minor` | The next patch or minor in the current major. Nx Release bumps both manifests, prepends the changelog, commits, tags, pushes, and creates the GitHub release. |
| `conventional` | The bump chosen from conventional commits since the last `v*` tag. |

`tools/release/resolve-release.mjs` guards every mode. The run fails if the version would leave the major in `package.json` (for example a `feat!` commit), if it runs on a branch other than `master`, or if the version is already on npm or its tag points at another commit. A new major needs a manual `package.json` bump on `master` (for example by merging `11.x`) and a `package-version` release.

The newest major is staged with the npm dist-tag `latest`. Older majors get `v{major}-lts` (for example `v10-lts`), like the existing `v5-lts` and `v6-lts`. npm fixes the dist-tag when the package is staged; to change it, reject the staged version and run the workflow again. The GitHub release is only marked latest for the newest major. Pull requests and pushes do not start the workflow.

### Staged publishing

The workflow never publishes directly. Its last step runs `npm stage publish` (npm CLI 11.15 or later) on `dist/@muntazir/material-extended`. The version stays private until a maintainer approves it with 2FA:

1. Open the package on npmjs.com → **Staged Packages**, check the version, files, and dist-tag, then click **Approve**. Or run `npm stage list @muntazir86/material-extended`, `npm stage view <stage-id>`, and `npm stage approve <stage-id>`.
2. To discard a staged version, use **Reject** or `npm stage reject <stage-id>`.

Authentication, preferred first:

- **Trusted publishing (OIDC), no secret.** On npmjs.com → package **Settings** → **Trusted publisher**, add GitHub Actions with repository `Muntazir86/mde-popover`, workflow file `release.yml`, and allow only `npm stage publish`. Staging from GitHub Actions then also gets a provenance attestation. You can then set **Publishing access** to "Require two-factor authentication and disallow tokens".
- **Stage-only token.** Otherwise create a granular access token with packages-and-scopes permission **Read and write (stage only)** (`read-write-stage-only`) for `@muntazir86/material-extended` and save it as the `NPM_TOKEN` repository secret. npm rejects `npm publish` with such a token (`E_STAGE_REQUIRED`).

To preview locally, from a clean checkout of `master`:

```
node tools/release/resolve-release.mjs --mode package-version
npx nx release patch --skip-publish --dry-run
npx nx build @muntazir/material-extended --configuration production
(cd dist/@muntazir/material-extended && npm stage publish --tag latest --access public --dry-run)
```

`--dry-run` writes nothing. Do not run `nx release` without a specifier before the major has a `v{version}` tag. Without a tag, Nx counts every commit since the first one and can choose the next major.
