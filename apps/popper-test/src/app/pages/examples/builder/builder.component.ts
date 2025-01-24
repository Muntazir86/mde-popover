import { Component } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  MdePopoverPositionX,
  MdePopoverPositionY,
  MdePopoverTriggerEvent,
} from '@muntazir/material-extended';

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.scss'],
    standalone: false
})
export class PageExamplesBuilderComponent {
  alignButton = 'align-left';

  popover;

  popoverPositionX: MdePopoverPositionX = 'before';
  popoverPositionY: MdePopoverPositionY = 'above';

  event: MdePopoverTriggerEvent = 'click';

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  constructor() {}

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  resetForm() {
    // to do.. template variable #popoverTrigger, popoverTrigger.reset()
  }
}
