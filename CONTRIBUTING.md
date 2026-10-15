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

There is no `v10.0.0` tag yet. Tag that version on the commit that matches package version 10.0.0 before the first real release. Until that tag exists, a release treats every conventional commit since the first commit as unpublished work.

Manual flow, from a clean checkout of the branch you want to release:

```
npx nx release --dry-run
npx nx release --skip-publish
npx nx release publish
```

`--dry-run` prints the next version, changelog, tag, and GitHub release and writes nothing. `nx release --skip-publish` bumps both package manifests, prepends the changelog, commits, tags, pushes, and creates the GitHub release. It does not publish to npm. `nx release publish` builds the library and publishes `dist/@muntazir/material-extended` with public access. Log in with npm first, or set `NODE_AUTH_TOKEN`.

An optional [Release workflow](.github/workflows/release.yml) does the same two commands when someone runs it with Actions → Run workflow and types `publish`. It needs an `NPM_TOKEN` repository secret. Pull requests and pushes do not start it.
