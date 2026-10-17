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

Git tags use `v{version}` (`releaseTag.pattern`). On `master`, Nx looks for the latest tag across every branch. On a maintenance branch such as `10.x`, it only looks at tags on that branch, so a newer major on `master` does not become the base version for the maintenance line.

Generated notes are prepended to `libs/@muntazir/material-extended/CHANGELOG.md`, above the hand-written history. Nx also opens a GitHub release for that tag. Nothing in pull-request or `master` CI publishes to npm.

Each major has its own branch (`10.x` for Angular 21, `11.x` for Angular 22). Release a major from its branch, not from `master`.

Use the [Release workflow](.github/workflows/release.yml): Actions → Release → Run workflow, pick the branch, type `publish`, and choose a mode:

| Mode | Version published |
| --- | --- |
| `package-version` | Exactly the version in `libs/@muntazir/material-extended/package.json`. Use it for the first release of a major (10.0.0 on `10.x`, 11.0.0 on `11.x`). It tags `v{version}`, creates the GitHub release from that version's `CHANGELOG.md` section, and publishes. |
| `patch` / `minor` | The next patch or minor in the current major. Nx Release bumps both manifests, prepends the changelog, commits, tags, pushes, and creates the GitHub release. |
| `conventional` | The bump chosen from conventional commits since the last `v*` tag on the branch. |

`tools/release/resolve-release.mjs` guards every mode. The run fails if the version would leave the major in `package.json` (for example a `feat!` commit on `10.x`), if the `N.x` branch does not match that major, or if the tag or npm version already exists. A new major needs a new `N.x` branch, a manual `package.json` bump, and a `package-version` release.

The newest major is published with the npm dist-tag `latest`. Older majors get `v{major}-lts` (for example `v10-lts`), like the existing `v5-lts` and `v6-lts`. The GitHub release is only marked latest for the newest major. The workflow needs an `NPM_TOKEN` repository secret. Pull requests and pushes do not start it.

To preview locally, from a clean checkout of the branch:

```
node tools/release/resolve-release.mjs --mode package-version
npx nx release patch --skip-publish --dry-run
npx nx release publish --dry-run --tag latest
```

`--dry-run` writes nothing. Do not run `nx release` without a specifier before the major has a `v{version}` tag. Without a tag, Nx counts every commit since the first one and can choose the next major.
