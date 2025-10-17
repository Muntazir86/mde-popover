import { Component } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MdePopoverPositionX, MdePopoverPositionY, MdePopoverTriggerEvent, MdePopoverModule } from '@muntazir/material-extended';
import { MatCard, MatCardContent, MatCardTitle, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInput } from '@angular/material/input';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatButton } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.scss'],
    imports: [MatCard, MatCardContent, MatFormField, MatLabel, MatSelect, FormsModule, MatOption, MatCheckbox, MatInput, MatCardTitle, MatButtonToggleGroup, MatButtonToggle, MatButton, NgClass, MdePopoverModule, MatCardActions]
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
