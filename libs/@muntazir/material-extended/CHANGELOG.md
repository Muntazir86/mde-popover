# Changelog

All notable changes to `@muntazir86/material-extended` 9.x (Angular 20) are documented in this file. Later majors keep their own changelog on their branches.

## [9.0.1] - 2026-10-18

Bug fixes backported from 10.0.0 and 11.0.0. No API or behaviour changes beyond these fixes.

### Changed

- The package is licensed under ISC, and a LICENSE file now ships in the npm package and sits at the repository root. It keeps the MIT notice of the original Angular Popover by Joe Jordan Brown. The READMEs say ISC and no longer show a FOSSA badge for the upstream repository.

### Fixed

- A popover without `mdePopoverOverlapTrigger` no longer flips to the other side of the trigger every time a new overlay is built for it, for example when several triggers share the popover or a trigger is re-created inside `@if`/`@for`. The rendered (fallback) position used to overwrite the requested position.
- When the panel falls back to the other side of the trigger, `mdePopoverOffsetY`/`mdePopoverOffsetX` are mirrored, so a gap stays a gap instead of pushing the panel over the trigger.
- Each open starts from the side the trigger asks for, so the overlay measures the panel with the right arrow styles. It could flip with room to spare or overflow the viewport by the arrow size.
- A popover opened by hover no longer moves focus onto its trigger when it closes. Only a keyboard open restores focus.
- A `none` trigger no longer pulls focus off the field that opened it when it closes, and auto-capture only applies with the focus trap enabled.
- `closeDisabled` is reset when the popover closes.
- Backdrop, backdrop click, trigger stacking, blur, and focus restore follow the popover's `mdePopoverTriggerOn`, also when it is set on the popover rather than the trigger.
- Numeric `0` values set on the trigger (delays, offsets, arrow sizes) are honoured.
- The attribute string `"false"` for `mdePopoverOverlapTrigger` is coerced to a boolean.
- The hover leave timer is cancelled when the pointer re-enters, both hover timers are cleared on destroy, and destroying twice is safe.
- Popover subscriptions are cleaned up.
- The `classList` getter returns the panel class list.
- The stray `console.log` in the `noop` scroll strategy is removed.
- Position and trigger-event types are re-exported as types only.
