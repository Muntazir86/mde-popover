# Angular Popover

![npm (scoped)](https://img.shields.io/npm/v/%40muntazir86/material-extended?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40muntazir86%2Fmaterial-extended)

#### Links

[Popover Demo](https://muntazir86.github.io/mde-popover/) | [StackBlitz Template](https://stackblitz.com/edit/stackblitz-starters-6n5dqd) |
[Documentation](https://github.com/Muntazir86/mde-popover/blob/master/libs/@muntazir/material-extended/src/lib/popover/popover.md) | [Changelog](https://github.com/Muntazir86/mde-popover/blob/master/libs/@muntazir/material-extended/CHANGELOG.md) | [npm](https://www.npmjs.com/package/@muntazir86/material-extended)

This README is for the 11.x line (Angular 22), the current release. Commit messages and the manual release flow are in [CONTRIBUTING.md](https://github.com/Muntazir86/mde-popover/blob/master/CONTRIBUTING.md).

### Project status

Angular Popover is production ready.

This was originally created as an example for a `@angular/material` issue feature request.
Issue can be found at [angular/material2#2691](https://github.com/angular/material2/issues/2691)

If you'd like to contribute please create an issue or pull request.

### Version Compatibility

| Angular Version | Package Compatibility |
| --------------- | --------------------- |
| 22.x            | 11.x                  |
| 21.x            | 10.x                  |
| 20.x            | 9.x                   |
| 19.x            | 8.x                   |
| 18.x            | 7.x                   |
| 17.x            | 6.x                   |
| 16.x            | 5.x                   |

### Examples

**Material theme picker**

[![Material theme picker](https://media.giphy.com/media/jsxheZJXN1346GD5St/giphy.gif)](https://stackblitz.com/edit/angular-popover-demo)

**Standard popover**

![image](https://cloud.githubusercontent.com/assets/10200431/22394189/02e9b21e-e511-11e6-9f91-c6b470a6b212.png)

![image](https://cloud.githubusercontent.com/assets/10200431/22394186/e21a235c-e510-11e6-9cde-948b1a4382bc.png)

**Google+ style popover**

![image](https://cloud.githubusercontent.com/assets/10200431/22397870/4f27ddba-e573-11e6-943f-2d737b59d39e.png)

### Installation

Install the 11.x package and the Angular CDK for Angular 22:

```bash
npm install @muntazir86/material-extended@^11 @angular/cdk@^22
```

The popover animates with `animate.enter`/`animate.leave` and needs neither `@angular/animations` nor an animations provider.

### Initial setup

The CDK overlays depend on a small set of structural styles to work correctly. If you're using Angular Material, these styles have been included together with the theme, otherwise if you're using the CDK on its own, you'll have to include the styles yourself. You can do so by importing the prebuilt styles in your global stylesheet:

```css
@import '@angular/cdk/overlay-prebuilt.css';
```

### Import module

Import `MdePopoverModule` (or the standalone `MdePopover`, `MdePopoverTrigger` and `MdePopoverTarget` directives) in a standalone component:

```typescript
import { Component } from '@angular/core';
import { MdePopoverModule } from '@muntazir86/material-extended';

@Component({
  selector: 'app-root',
  imports: [MdePopoverModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

or in an `NgModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdePopoverModule } from '@muntazir86/material-extended';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MdePopoverModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Usage

The `mde-popover` element is a floating panel containing html content.

By itself, the `mde-popover` element does not render anything. The popover is attached to and opened
via application of the `mdePopoverTriggerFor` directive. The example below uses Angular Material buttons and icons (`MatButtonModule`, `MatIconModule`); any content works:

```html
<mde-popover #appPopover="mdePopover">
  <button mat-button>Settings</button>
  <button mat-button>Help</button>
</mde-popover>

<button mat-icon-button [mdePopoverTriggerFor]="appPopover" mdePopoverTriggerOn="click">
  <mat-icon>more_vert</mat-icon>
</button>
```

# API reference

### MdePopover

##### Selector: `mde-popover`

##### Exported as: `mdePopover`

##### Properties

| **Name**                                                             | **Description**                                                                                                                                                                                                                      |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @Input('mdePopoverPositionX') positionX                              | Position of the popover in the X axis. Type: string, Values: 'start' \|\| 'end' \|\| 'before' \|\| 'after' \|\| 'center', Default: 'after'.                                                                                          |
| @Input('mdePopoverPositionY') positionY                              | Position of the popover in the Y axis. Type: string, Values: 'start' \|\| 'end' \|\| 'above' \|\| 'below' \|\| 'center', Default: 'below'                                                                                            |
| @Input('mdePopoverTriggerOn') triggerEvent                           | Event for triggering popover 'click', 'hover' and 'none'. Default: hover                                                                                                                                                             |
| @Input('mdePopoverScrollStrategy') scrollStrategy                    | How the popover reacts to scrolling. Type: string, Values: 'noop' \|\| 'close' \|\| 'block' \|\| 'reposition', Default: 'reposition'                                                                                                 |
| @Input('mdePopoverEnterDelay') enterDelay                            | Delay for popover before enters, Type: number, Default: 200                                                                                                                                                                          |
| @Input('mdePopoverLeaveDelay') leaveDelay                            | Delay for popover before leaves, Type: number, Default: 200                                                                                                                                                                          |
| @Input('mdePopoverOverlapTrigger') overlapTrigger                    | Whether the popover should overlap its trigger. Type: boolean, Default: true                                                                                                                                                         |
| @Input('mdePopoverOffsetX') targetOffsetX                            | Offset position of the popover from target in the X axis. Type: number, Default: 0                                                                                                                                                   |
| @Input('mdePopoverOffsetY') targetOffsetY                            | Offset position of the popover from target in the Y axis. Type: number, Default: 0                                                                                                                                                   |
| @Input('mdePopoverArrowOffsetX') arrowOffsetX                        | Offset position of the popover arrow from the X axis. Type: number, Default: 0                                                                                                                                                       |
| @Input('mdePopoverArrowOffsetY') arrowOffsetY                        | Offset position of the popover arrow from the Y axis. Type: number, Default: 0                                                                                                                                                       |
| @Input('mdePopoverArrowWidth') arrowWidth                            | Arrow width in pixels. Type: number, Default: 8                                                                                                                                                                                      |
| @Input('mdePopoverArrowColor') arrowColor                            | Arrow color, accepts CSS color values. Default: rgba(0, 0, 0, 0.12)                                                                                                                                                                  |
| @Input('mdePopoverCloseOnClick') closeOnClick                        | Whether the popover should close on click. Type: boolean, Default: true                                                                                                                                                              |
| @Input('mdePopoverDisableAnimation') disableAnimation                | Disables the enter and leave animations. Type: boolean, Default: false                                                                                                                                                               |
| @Input('mdeFocusTrapEnabled') focusTrapEnabled                       | Whether the popover should focus trap. Type: boolean, Default: true                                                                                                                                                                  |
| @Input('mdeFocusTrapAutoCaptureEnabled') focusTrapAutoCaptureEnabled | Whether the popover should focus trap auto capture focus. Type: boolean, Default: true                                                                                                                                               |
| @Input('class') classList                                            | This method takes classes set on the host mde-popover element and applies them on the popover template that displays in the overlay container. Otherwise, it's difficult to style the containing popover from outside the component. |
| @Output() close                                                      | Event emitted when the popover is closed.                                                                                                                                                                                            |

##### Methods

`setPositionClasses`

It's necessary to set position-based classes to ensure the popover panel animation folds out from the correct direction.

| Parameters |
| ---------- |
| `posX?`    |
| `posY?`    |

### MdePopoverTrigger

This directive is intended to be used in conjunction with an mde-popover tag. It is responsible for toggling the display of the provided popover instance.

##### Selector: `[mdePopoverTriggerFor]`

##### Exported as: `mdePopoverTrigger`

| Name                                                          | Description                                                                                                     |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| @Input('mdePopoverTriggerFor') popover                        | References the popover instance that the trigger is associated with.                                            |
| @Input('mdePopoverTargetAt') targetElement                    | References the popover target instance that the popover positioning is associated with.                         |
| @Input('mdePopoverPositionX') positionX                       | Position of the popover in the X axis.                                                                          |
| @Input('mdePopoverPositionY') positionY                       | Position of the popover in the Y axis.                                                                          |
| @Input('mdePopoverTriggerOn') triggerEvent                    | Event for triggering popover 'click', 'hover' and 'none'. Default: 'hover'                                      |
| @Input('mdePopoverEnterDelay') enterDelay                     | Delay for popover before enters, Type: number, Default: 200                                                     |
| @Input('mdePopoverLeaveDelay') leaveDelay                     | Delay for popover before leaves, Type: number, Default: 200                                                     |
| @Input('mdePopoverOverlapTrigger') overlapTrigger             | Whether the popover should overlap its trigger. Type: boolean, Default: true                                    |
| @Input('mdeDisablePopoverTrigger') disablePopoverTrigger      | Disables popover trigger. Type: boolean, Default: false                                                         |
| @Input('mdePopoverOffsetX') targetOffsetX                     | Offset position of the popover from target in the X axis. Type: number, Default: 0                              |
| @Input('mdePopoverOffsetY') targetOffsetY                     | Offset position of the popover from target in the Y axis. Type: number, Default: 0                              |
| @Input('mdePopoverArrowOffsetX') arrowOffsetX                 | Offset position of the popover arrow from the X axis. Type: number, Default: 0                                  |
| @Input('mdePopoverArrowOffsetY') arrowOffsetY                 | Offset position of the popover arrow from the Y axis. Type: number, Default: 0                                  |
| @Input('mdePopoverArrowWidth') arrowWidth                     | Arrow width in pixels. Type: number, Default: 8                                                                 |
| @Input('mdePopoverArrowColor') arrowColor                     | Arrow color, accepts CSS color values. Default: rgba(0, 0, 0, 0.12)                                             |
| @Input('mdePopoverCloseOnClick') closeOnClick                 | Whether the popover should close on click. Type: boolean, Default: true.                                        |
| @Input('mdePopoverCloseOnClickTrigger') closeOnClickTrigger   | Whether the popover should close on click of trigger when click event is 'click'. Type: boolean, Default: true. |
| @Input('mdePopoverBackdropCloseOnClick') backdropCloseOnClick | Whether the popover should close on backdrop click. Type: boolean, Default: true.                               |
| @Output() opened                                              | Event emitted when the associated popover is opened.                                                            |
| @Output() closed                                              | Event emitted when the associated popover is closed.                                                            |

##### Methods

`togglePopover`
Toggles the popover between the open and closed states.

`openPopover`
Opens the popover.

`closePopover`
Closes the popover.

`destroyPopover`
Removes the popover from the DOM.

### Issues

Please report bugs and issues [here](https://github.com/Muntazir86/mde-popover/issues).

### License

ISC © Ghulam Shabbir ([Muntazir86](https://github.com/Muntazir86)). See [LICENSE](https://github.com/Muntazir86/mde-popover/blob/master/LICENSE).

Based on [Angular Popover](https://github.com/joejordanbrown/popover) by [Joe Jordan Brown](https://github.com/joejordanbrown) ([UIXD](https://uixd.co.uk)), released under the MIT License. Its copyright notice is kept in the LICENSE file.
