# Popover Animation Migration Guide

## Overview
The popover component has been migrated from Angular's traditional animation API to use the new `animate.enter` and `animate.leave` directives introduced in Angular 20+. This provides better performance and simpler CSS-based animations.

## Changes Made

### 1. CSS Animations (popover.scss)
Added CSS keyframe animations that replicate the original behavior:

```scss
// Enter animation: Scale from 0 to 1 with fade-in
.mde-popover-enter-animation {
  animation: mde-popover-scale-fade-in 200ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

// Leave animation: Fade out with delay
.mde-popover-leave-animation {
  animation: mde-popover-fade-out 50ms 100ms linear forwards;
}

@keyframes mde-popover-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes mde-popover-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

### 2. Template Updates (popover.html)
Replaced Angular animation triggers with the new directives:

**Before:**
```html
[@.disabled]="disableAnimation"
[@transformPopover]="'enter'"
```

**After:**
```html
[animate.enter]="disableAnimation ? '' : 'mde-popover-enter-animation'"
[animate.leave]="disableAnimation ? '' : 'mde-popover-leave-animation'"
```

### 3. Component Updates (popover.ts)
- Removed `AnimationEvent` import from `@angular/animations`
- Removed `transformPopover` animation import
- Removed `animations` array from component decorator
- Added `AnimationCallbackEvent` import for handling animation events
- Added optional animation callback methods for enter/leave events

### 4. Backward Compatibility
The original `popover-animations.ts` file is kept for backward compatibility but marked as deprecated.

## Benefits

1. **Better Performance**: CSS animations are hardware-accelerated
2. **Simpler Code**: No need for complex Angular animation triggers
3. **Easier Maintenance**: Animations are defined in CSS where they belong
4. **Modern Angular**: Uses the latest Angular 20+ features

## Animation Behavior

The animations maintain the exact same visual behavior as before:

- **Enter**: Elements scale from 0 to 1 while fading in (200ms with cubic-bezier easing)
- **Leave**: Elements fade out after a 100ms delay (50ms duration with linear easing)

## Disabling Animations

Animations can still be disabled using the `disableAnimation` property, which will prevent the animation classes from being applied.

## Migration for Consumers

If you're using the popover component, no changes are required. The component maintains the same API and behavior. The animation changes are internal implementation details.
