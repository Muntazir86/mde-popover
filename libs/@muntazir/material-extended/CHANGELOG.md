# Changelog

All notable changes to `@muntazir86/material-extended` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Nx Release prepends generated notes for later versions above this hand-written history. The 5.x–9.x entries were reconstructed from git history and the package manifests on the `5.x`–`9.x` branches. This repository has no git tags for those lines, so the notes only include what those commits and manifests record.

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
