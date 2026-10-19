# Changelog

All notable changes to `@muntazir86/material-extended` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Nx Release prepends generated notes for later versions above this hand-written history. The 5.x–9.x entries were reconstructed from git history and the package manifests on the `5.x`–`9.x` branches. This repository has no git tags for those lines, so the notes only include what those commits and manifests record.

## [Unreleased]

### Changed

- The package is licensed under ISC, and a LICENSE file now ships in the npm package and sits at the repository root. It keeps the MIT notice of the original Angular Popover by Joe Jordan Brown. The READMEs say ISC and no longer show a FOSSA badge for the upstream repository.
- README: Documentation, Changelog and CONTRIBUTING links point at the `master` branch, the install command targets 11.x and Angular 22, examples use `mat-button`/`mat-icon` and show a standalone import, and the API tables list `mdePopoverScrollStrategy` and `mdePopoverDisableAnimation`.

### Security

- The workspace's dependency audit is clean (`npm audit`: 32 advisories, 5 critical, 14 high, 13 moderate, all fixed). None of them were in the published package, whose only runtime dependency is `tslib`, with `@angular/*` as peers.
  - Angular framework, CLI and build tooling go from 22.1 to 22.2.3, and ng-packagr from 22.1.1 to 22.2.4. This fixes the `@angular/router` SSR denial of service, `piscina` prototype pollution, and the `@modelcontextprotocol/sdk` advisory in `@angular/cli`. The unused webpack-based `@angular-devkit/build-angular` tree (`webpack-dev-server`, `sockjs`/`uuid`, `karma`, `http-proxy-middleware`) is no longer installed.
  - `angular-cli-ghpages` is removed. It was a runtime dependency of the workspace and pulled in `gh-pages`, `ajv`, `picomatch`, `chokidar` and `braces`; `braces` has no patched release. The demo deploy workflow now pushes the build to `gh-pages` with git.
  - `undici` (used by `nx` 23.3.0, the latest 23.x) is overridden to `^7.30.1`.
- The READMEs show the FOSSA license and security badges for `Muntazir86/mde-popover`.

## [11.0.0] - 2026-10-18

Angular 22 support. The workspace moves to Nx 23.3, Angular and Angular Material/CDK 22.1, and TypeScript 6.0. Node.js 22.22.3 or later (or 24.15+) is required, matching Angular 22. Peer dependencies on `@angular/cdk`, `@angular/common`, and `@angular/core` are `^22.0.0`. Maintenance for Angular 21 continues on the `10.x` branch.

### Breaking

- Requires Angular 22 (`@angular/cdk`, `@angular/common`, `@angular/core` `^22.0.0`).
- The deprecated `transformPopover` animation trigger is removed. `@angular/animations` is no longer needed. The popover animates with Angular's built-in `animate.enter`/`animate.leave` and CSS, and `mdePopoverDisableAnimation` still turns it off.

### Changed

- CDK 22 overlays still render in the browser top layer by default. The popover keeps the 10.0.0 behaviour: it opts out of the top layer only when `mdePopoverCloseOnClickTrigger` is `false` with a click trigger and backdrop close, so the trigger stays clickable above the backdrop.
- The package description no longer refers to the Angular CLI 20 scaffold.
- The demo app builds with `@angular/build` instead of the deprecated webpack-based `@angular-devkit/build-angular`. Karma and Jasmine are removed in favour of Vitest.
- Demo components that hold mutable state opt into `ChangeDetectionStrategy.Eager` because Angular 22 makes `OnPush` the default.

### Fixed

- A popover without `mdePopoverOverlapTrigger` no longer flips to the other side of the trigger every time a new overlay is built for it, for example when several triggers share the popover or a trigger is re-created inside `@if`/`@for`. The rendered (fallback) position was written back over the requested `mdePopoverPositionX`/`mdePopoverPositionY`, so the next overlay started from the flipped position. With `mdePopoverOffsetY` the panel then also landed on top of the trigger.
- When the panel falls back to the other side of the trigger (no room on the requested side), `mdePopoverOffsetY`/`mdePopoverOffsetX` are mirrored for that fallback, so a gap stays a gap instead of pushing the flipped panel over the trigger.
- Each time a popover opens, its arrow styles and position classes start from the side the trigger asks for. They used to keep the side where the popover last rendered (for another trigger sharing it, or after a flip). Without overlap the arrow changes the panel height, and the overlay measures the panel before it reports a position. So a panel could flip with room to spare, or overflow the viewport by the arrow size.
- A popover opened by hover no longer moves focus onto its trigger when it closes. Only a keyboard open restores focus. With several triggers sharing one popover, moving the pointer to the next trigger used to focus the previous one.

## [10.0.0] - 2026-10-15

Angular 21 support landed in [PR #13](https://github.com/Muntazir86/mde-popover/pull/13). The workspace uses Nx 22.5.4. Node.js 22.14 or later is required. Peer dependencies on `@angular/cdk`, `@angular/common`, and `@angular/core` are `^21.0.0`.

### Breaking

- An invalid `mdePopoverPositionX` or `mdePopoverPositionY` set on the trigger now throws the existing invalid-position error. Those values used to be silently ignored.

### Fixed

- Focus restore no longer pulls focus off the field that opened the popover ([PR #13](https://github.com/Muntazir86/mde-popover/pull/13)).
- The demo keeps each field's help popover open while that field is focused ([PR #13](https://github.com/Muntazir86/mde-popover/pull/13)).
- The demo uses local SVG chat avatars instead of placehold.it ([PR #13](https://github.com/Muntazir86/mde-popover/pull/13)).
- `closeDisabled` is reset when the popover closes.
- Backdrop, backdrop click, stacking, blur, and focus restore follow `popover.triggerEvent`.
- Numeric `0` values set on the trigger are honored.
- The plain-attribute string `"false"` for `overlapTrigger` is coerced to a boolean.
- The hover leave timer is cancelled when the pointer re-enters, both hover timers are cleared on destroy, and destroying twice is safe.
- Popover subscriptions are cleaned up.
- The `classList` getter returns the panel class list.
- The stray `console.log` in the noop scroll strategy is removed.
- Position and trigger-event types are re-exported as types only.
- `mdePopoverCloseOnClickTrigger="false"` works again in click mode. Angular CDK 21 renders overlays in the browser top layer, which kept the backdrop above the trigger; the top layer is now turned off for that case only.

### Changed

- The popover directives are standalone and are still exported by `MdePopoverModule`.
- `PopoverService` is `providedIn: 'root'`.
- The panel is focusable.

### Added

- ESLint for the library and the demo.
- Vitest unit tests for the library.
- Playwright end-to-end tests for the demo.
- CI jobs for lint, unit tests, both builds, and end-to-end tests.

## [9.0.0] - 2025-10-17

Reconstructed from the `9.x` branch (version commit `9.0.0`). Peer dependencies on that branch are `@angular/cdk` `^20.2.9` and `@angular/common` / `@angular/core` `^20.3.6`.

### Changed

- The animation module reference was removed and animations moved to CSS.
- The demo project was migrated to `inject()`, input and output signals, standalone components, and control flow.
- Theme fix recorded on the branch.

## [8.0.0] - 2025-01-24

Reconstructed from the `8.x` branch (version commit `8.0.0`, plus the Angular 19 compatibility update on the same day). Peer dependencies on that branch are `@angular/animations`, `@angular/cdk`, `@angular/common`, and `@angular/core` at `^19`.

### Changed

- Compatibility update for Angular 19.
- Nx packages updated through 20.3.3 during the Nx migration.
- Styles and components updated to Angular Material elevation classes.
- `zone.js` set to 0.15.0.
- The publish script path updated for the scoped package name.

## [7.0.0] - 2024-07-07

Reconstructed from the `7.x` branch (version commit `7.0.0`). Peer dependencies on that branch are `@angular/animations`, `@angular/cdk`, `@angular/common`, and `@angular/core` at `^18.0.4`.

### Changed

- Angular CLI, CDK, and core updated.
- Theme fixes, including a pink/gray color fix.
- Project configuration added and the project name changed.

## [6.1.0] - 2024-01-28

Reconstructed from the `6.x` branch (version commit `6.1.0`). Peer dependencies on that branch are `@angular/animations` / `@angular/common` / `@angular/core` `^17.0.6` and `@angular/cdk` `^17.0.3`.

### Added

- `closeOnClickTrigger` input.

## [6.0.0] - 2023-12-10

Reconstructed from the `6.x` branch (version commit `6.0.0`).

### Changed

- Angular 17 update.
- Popover position and arrow behavior improved, and a disable-popover property added, as recorded in the commits that lead to this version.

## [5.2.0] - 2024-01-28

Reconstructed from the `5.x` branch (version commit `5.2.0`). Peer dependencies on that branch are `@angular/animations` / `@angular/common` / `@angular/core` `^16.0.0` and `@angular/cdk` `^16.0.2`.

### Added

- `closeOnClickTrigger` input.
- Disable-popover property.

### Changed

- Popover position and arrow behavior improved.
- An Angular 17 update (PR #3) was merged on this line and then reverted. The branch tip stays on Angular 16 peers at 5.2.0.
