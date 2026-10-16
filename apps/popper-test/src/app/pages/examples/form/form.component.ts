import { Component, OnDestroy } from '@angular/core';
import { MdePopoverTrigger, MdePopoverModule } from '@muntazir/material-extended';

import { FormsModule } from '@angular/forms';
import { MatFormField, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    imports: [FormsModule, MatFormField, MdePopoverModule, MatInput, MatHint]
})
export class PageExamplesFormComponent implements OnDestroy {
  popoverText: string;
  previousRef: MdePopoverTrigger;
  popoverOpen = false;

  private closeTimeout: ReturnType<typeof setTimeout> | null = null;

  ngOnDestroy() {
    this.clearCloseTimer();
  }

  openPopover(ref: MdePopoverTrigger, text: string) {
    // Focus moved between fields (or returned) before the leave delay elapsed.
    this.clearCloseTimer();
    this.popoverText = text;

    if (this.previousRef !== ref) {
      const previous = this.previousRef;
      // Open the new anchor first so the shared projected content moves with it,
      // then close the previous anchor. Same-anchor fields only swap the text.
      if (!ref.popoverOpen) {
        ref.openPopover();
      }
      if (previous?.popoverOpen) {
        previous.closePopover();
      }
    } else if (!ref.popoverOpen) {
      ref.openPopover();
    }

    this.previousRef = ref;
    this.popoverOpen = true;
  }

  closePopover(ref: MdePopoverTrigger) {
    this.clearCloseTimer();
    this.closeTimeout = setTimeout(() => {
      this.closeTimeout = null;
      if (this.previousRef === ref) {
        ref.closePopover();
        this.popoverOpen = false;
        this.previousRef = null;
      }
    }, 400);
  }

  private clearCloseTimer() {
    if (this.closeTimeout !== null) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  }
}
