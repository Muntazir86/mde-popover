import { Component } from '@angular/core';
import {
  MdePopoverModule,
  MdePopoverPositionX,
  MdePopoverPositionY,
  MdePopoverScrollStrategy,
  MdePopoverTriggerEvent,
} from '@muntazir/material-extended';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatHint, MatSuffix } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatButton } from '@angular/material/button';

export type TriggerAlign = 'start' | 'center' | 'end';

export interface PlaygroundConfig {
  triggerOn: MdePopoverTriggerEvent;
  positionX: MdePopoverPositionX;
  positionY: MdePopoverPositionY;
  overlapTrigger: boolean;
  scrollStrategy: MdePopoverScrollStrategy;
  closeOnClick: boolean;
  closeOnClickTrigger: boolean;
  backdropCloseOnClick: boolean;
  disableTrigger: boolean;
  disableAnimation: boolean;
  enterDelay: number;
  leaveDelay: number;
  offsetX: number;
  offsetY: number;
  arrowOffsetX: number;
  arrowOffsetY: number;
  arrowWidth: number;
  arrowColor: string;
  focusTrapEnabled: boolean;
  focusTrapAutoCaptureEnabled: boolean;
}

/** Library defaults (see libs/@muntazir/material-extended popover.ts / popover-trigger.ts). */
export const LIBRARY_DEFAULTS: PlaygroundConfig = {
  triggerOn: 'hover',
  positionX: 'after',
  positionY: 'below',
  overlapTrigger: true,
  scrollStrategy: 'reposition',
  closeOnClick: true,
  closeOnClickTrigger: true,
  backdropCloseOnClick: true,
  disableTrigger: false,
  disableAnimation: false,
  enterDelay: 200,
  leaveDelay: 200,
  offsetX: 0,
  offsetY: 0,
  arrowOffsetX: 0,
  arrowOffsetY: 0,
  arrowWidth: 8,
  arrowColor: 'rgba(0, 0, 0, 0.12)',
  focusTrapEnabled: true,
  focusTrapAutoCaptureEnabled: true,
};

/** Playground starting point: a click popover placed below the trigger without overlap. */
export const PLAYGROUND_DEFAULTS: PlaygroundConfig = {
  ...LIBRARY_DEFAULTS,
  triggerOn: 'click',
  overlapTrigger: false,
};

const ATTRS: { key: keyof PlaygroundConfig; attr: string }[] = [
  { key: 'triggerOn', attr: 'mdePopoverTriggerOn' },
  { key: 'positionX', attr: 'mdePopoverPositionX' },
  { key: 'positionY', attr: 'mdePopoverPositionY' },
  { key: 'overlapTrigger', attr: 'mdePopoverOverlapTrigger' },
  { key: 'scrollStrategy', attr: 'mdePopoverScrollStrategy' },
  { key: 'closeOnClick', attr: 'mdePopoverCloseOnClick' },
  { key: 'disableAnimation', attr: 'mdePopoverDisableAnimation' },
  { key: 'enterDelay', attr: 'mdePopoverEnterDelay' },
  { key: 'leaveDelay', attr: 'mdePopoverLeaveDelay' },
  { key: 'offsetX', attr: 'mdePopoverOffsetX' },
  { key: 'offsetY', attr: 'mdePopoverOffsetY' },
  { key: 'arrowOffsetX', attr: 'mdePopoverArrowOffsetX' },
  { key: 'arrowOffsetY', attr: 'mdePopoverArrowOffsetY' },
  { key: 'arrowWidth', attr: 'mdePopoverArrowWidth' },
  { key: 'arrowColor', attr: 'mdePopoverArrowColor' },
  { key: 'focusTrapEnabled', attr: 'mdeFocusTrapEnabled' },
  { key: 'focusTrapAutoCaptureEnabled', attr: 'mdeFocusTrapAutoCaptureEnabled' },
];

const TRIGGER_ATTRS: { key: keyof PlaygroundConfig; attr: string }[] = [
  { key: 'closeOnClickTrigger', attr: 'mdePopoverCloseOnClickTrigger' },
  { key: 'backdropCloseOnClick', attr: 'mdePopoverBackdropCloseOnClick' },
  { key: 'disableTrigger', attr: 'mdeDisablePopoverTrigger' },
];

function binding(attr: string, value: unknown): string {
  return typeof value === 'string'
    ? `${attr}="${value}"`
    : `[${attr}]="${value}"`;
}

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  imports: [
    FormsModule,
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatHint,
    MatSuffix,
    MatSelect,
    MatOption,
    MatInput,
    MatSlideToggle,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatButton,
    MdePopoverModule,
  ],
})
export class PageExamplesBuilderComponent {
  config: PlaygroundConfig = { ...PLAYGROUND_DEFAULTS };
  align: TriggerAlign = 'center';
  copied = false;

  get triggerLabel(): string {
    if (this.config.disableTrigger) {
      return 'Disabled';
    }
    switch (this.config.triggerOn) {
      case 'click':
        return 'Click me';
      case 'hover':
        return 'Hover me';
      default:
        return 'Manual (none)';
    }
  }

  get contentHint(): string {
    if (this.config.closeOnClick) {
      return 'Click inside this popover to close it.';
    }
    return 'Clicks inside keep this popover open.';
  }

  /** Inputs whose value differs from the library default. */
  get changedInputs(): string[] {
    return [...ATTRS, ...TRIGGER_ATTRS]
      .filter(({ key }) => this.config[key] !== LIBRARY_DEFAULTS[key])
      .map(({ attr }) => attr);
  }

  get snippet(): string {
    const pick = (list: typeof ATTRS) =>
      list
        .filter(({ key }) => this.config[key] !== LIBRARY_DEFAULTS[key])
        .map(({ key, attr }) => '\n    ' + binding(attr, this.config[key]));
    const popoverAttrs = pick(ATTRS).join('');
    const triggerAttrs = pick(TRIGGER_ATTRS).join('');
    return (
      `<button mat-button [mdePopoverTriggerFor]="appPopover"${triggerAttrs}>\n  Open\n</button>\n\n` +
      `<mde-popover #appPopover="mdePopover"${popoverAttrs}>\n` +
      `  <mat-card>\n    <mat-card-content>Popover content</mat-card-content>\n  </mat-card>\n` +
      `</mde-popover>`
    );
  }

  reset(): void {
    this.config = { ...PLAYGROUND_DEFAULTS };
    this.align = 'center';
    this.copied = false;
  }

  async copySnippet(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.snippet);
      this.copied = true;
      setTimeout(() => (this.copied = false), 1500);
    } catch {
      this.copied = false;
    }
  }
}
