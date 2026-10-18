import { Directionality } from '@angular/cdk/bidi';
import {
  ConnectedOverlayPositionChange,
  ConnectionPositionPair,
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ApplicationRef, ElementRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EMPTY, Subject } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { MdePopover } from './popover';
import { MdePopoverTarget } from './popover-target';
import { MdePopoverTrigger } from './popover-trigger';
import { PopoverService } from './popover.service';
import {
  MdePopoverPositionX,
  MdePopoverPositionY,
  MdePopoverScrollStrategy,
  MdePopoverTriggerEvent,
} from './popover-types';

@Component({
  selector: 'mde-spec-trigger-host',
  imports: [MdePopover, MdePopoverTrigger, MdePopoverTarget],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <mde-popover
      #popover="mdePopover"
      [mdePopoverTriggerOn]="popoverTriggerOn"
      [mdePopoverPositionX]="popoverPositionX"
      [mdePopoverPositionY]="popoverPositionY"
      [mdePopoverEnterDelay]="popoverEnterDelay"
      [mdePopoverLeaveDelay]="popoverLeaveDelay"
      [mdePopoverOverlapTrigger]="popoverOverlap"
      [mdePopoverOffsetX]="popoverOffsetX"
      [mdePopoverOffsetY]="popoverOffsetY"
      [mdePopoverArrowOffsetX]="popoverArrowOffsetX"
      [mdePopoverArrowOffsetY]="popoverArrowOffsetY"
      [mdePopoverArrowWidth]="popoverArrowWidth"
      [mdePopoverArrowColor]="popoverArrowColor"
      [mdePopoverCloseOnClick]="popoverCloseOnClick"
      [mdePopoverScrollStrategy]="scrollStrategy"
      [mdeFocusTrapEnabled]="focusTrap"
      [mdeFocusTrapAutoCaptureEnabled]="autoCapture"
      [mdePopoverDisableAnimation]="disableAnimation"
      (close)="closeCount = closeCount + 1"
    >
      <button type="button" class="inside">Inside</button>
    </mde-popover>
    <button
      type="button"
      class="trigger"
      #trigger="mdePopoverTrigger"
      [mdePopoverTriggerFor]="popover"
      [mdePopoverTargetAt]="useTarget ? target : undefined"
      [mdePopoverTriggerOn]="$any(triggerTriggerOn)"
      [mdePopoverPositionX]="$any(triggerPositionX)"
      [mdePopoverPositionY]="$any(triggerPositionY)"
      [mdePopoverEnterDelay]="$any(triggerEnterDelay)"
      [mdePopoverLeaveDelay]="$any(triggerLeaveDelay)"
      [mdePopoverOverlapTrigger]="$any(triggerOverlap)"
      [mdePopoverOffsetX]="$any(triggerOffsetX)"
      [mdePopoverOffsetY]="$any(triggerOffsetY)"
      [mdePopoverArrowOffsetX]="$any(triggerArrowOffsetX)"
      [mdePopoverArrowOffsetY]="$any(triggerArrowOffsetY)"
      [mdePopoverArrowWidth]="$any(triggerArrowWidth)"
      [mdePopoverArrowColor]="$any(triggerArrowColor)"
      [mdePopoverCloseOnClick]="$any(triggerCloseOnClick)"
      [mdeDisablePopoverTrigger]="disabled"
      [mdePopoverCloseOnClickTrigger]="closeOnClickTrigger"
      [mdePopoverBackdropCloseOnClick]="backdropClose"
      (opened)="openedCount = openedCount + 1"
      (closed)="closedCount = closedCount + 1"
    >
      Open
    </button>
    <mde-popover-target class="anchor" #target="mdePopoverTarget">Anchor</mde-popover-target>
    <input class="other-field" aria-label="Other field" />
  `,
})
class TriggerHost {
  popoverTriggerOn: MdePopoverTriggerEvent = 'hover';
  popoverPositionX: MdePopoverPositionX = 'after';
  popoverPositionY: MdePopoverPositionY = 'below';
  popoverEnterDelay = 200;
  popoverLeaveDelay = 200;
  popoverOverlap = true;
  popoverOffsetX = 0;
  popoverOffsetY = 0;
  popoverArrowOffsetX = 0;
  popoverArrowOffsetY = 0;
  popoverArrowWidth = 8;
  popoverArrowColor = 'rgba(0, 0, 0, 0.12)';
  popoverCloseOnClick = true;
  scrollStrategy: MdePopoverScrollStrategy = 'reposition';
  focusTrap = true;
  autoCapture = true;
  disableAnimation = false;

  triggerTriggerOn?: MdePopoverTriggerEvent;
  triggerPositionX?: MdePopoverPositionX;
  triggerPositionY?: MdePopoverPositionY;
  triggerEnterDelay?: number;
  triggerLeaveDelay?: number;
  triggerOverlap?: boolean;
  triggerOffsetX?: number;
  triggerOffsetY?: number;
  triggerArrowOffsetX?: number;
  triggerArrowOffsetY?: number;
  triggerArrowWidth?: number;
  triggerArrowColor?: string;
  triggerCloseOnClick?: boolean;

  disabled = false;
  closeOnClickTrigger = true;
  backdropClose = true;
  useTarget = false;

  openedCount = 0;
  closedCount = 0;
  closeCount = 0;
}

@Component({
  selector: 'mde-spec-shared-popover-host',
  imports: [MdePopover, MdePopoverTrigger],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <mde-popover
      #popover="mdePopover"
      mdePopoverTriggerOn="click"
      mdePopoverPositionX="center"
      mdePopoverPositionY="below"
      [mdePopoverOverlapTrigger]="false"
    >
      <span>Shared</span>
    </mde-popover>
    <button type="button" class="first" [mdePopoverTriggerFor]="popover">First</button>
    @if (showSecond) {
      <button type="button" class="second" [mdePopoverTriggerFor]="popover">Second</button>
    }
  `,
})
class SharedPopoverHost {
  showSecond = true;
}

@Component({
  selector: 'mde-spec-missing-popover',
  imports: [MdePopoverTrigger],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `<button type="button" [mdePopoverTriggerFor]="popover">Open</button>`,
})
class MissingPopoverHost {
  popover: MdePopover | null = null;
}

interface TriggerProbe {
  _overlayRef: OverlayRef | null;
  _mouseoverTimer: ReturnType<typeof setTimeout> | null;
  _mouseleaveTimer: ReturnType<typeof setTimeout> | null;
  _halt: boolean;
  _openedByMouse: boolean;
  _backdropSubscription: { closed: boolean } | null;
  _positionSubscription: { closed: boolean } | null;
}

interface StrategyProbe {
  _offsetX: number;
  _offsetY: number;
  _origin: ElementRef<HTMLElement> | HTMLElement;
  positions: ConnectionPositionPair[];
  positionChanges: Subject<ConnectedOverlayPositionChange>;
}

function probe(trigger: MdePopoverTrigger): TriggerProbe {
  return trigger as unknown as TriggerProbe;
}

function mouse(type: string, init: MouseEventInit = {}): MouseEvent {
  return new MouseEvent(type, { bubbles: true, cancelable: true, ...init });
}

function escapeEvent(): KeyboardEvent {
  const event = new KeyboardEvent('keydown', {
    key: 'Escape',
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperty(event, 'keyCode', { value: 27 });
  return event;
}

function panel(): HTMLElement | null {
  return document.querySelector('.mde-popover-panel');
}

function backdrop(): HTMLElement | null {
  return document.querySelector('.cdk-overlay-backdrop');
}

function useHoverTimers(): void {
  vi.useFakeTimers({
    toFake: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval'],
  });
}

async function advance(ms: number): Promise<void> {
  await vi.advanceTimersByTimeAsync(ms);
}

describe('MdePopoverTrigger', () => {
  let fixture: ComponentFixture<TriggerHost> | undefined;

  afterEach(() => {
    vi.useRealTimers();
    fixture?.destroy();
    fixture = undefined;
    document.querySelector('.cdk-overlay-container')?.remove();
  });

  async function setup(
    prepare?: (host: TriggerHost) => void,
    providers: unknown[] = []
  ): Promise<{
    fixture: ComponentFixture<TriggerHost>;
    host: TriggerHost;
    popover: MdePopover;
    trigger: MdePopoverTrigger;
    button: HTMLButtonElement;
    field: HTMLInputElement;
    anchor: HTMLElement;
  }> {
    await TestBed.configureTestingModule({
      imports: [TriggerHost],
      providers,
    }).compileComponents();
    fixture = TestBed.createComponent(TriggerHost);
    prepare?.(fixture.componentInstance);
    fixture.detectChanges();
    return {
      fixture,
      host: fixture.componentInstance,
      popover: fixture.debugElement.query(By.directive(MdePopover)).componentInstance,
      trigger: fixture.debugElement.query(By.css('button.trigger')).injector.get(MdePopoverTrigger),
      button: fixture.nativeElement.querySelector('.trigger'),
      field: fixture.nativeElement.querySelector('.other-field'),
      anchor: fixture.nativeElement.querySelector('.anchor'),
    };
  }

  function strategyOf(trigger: MdePopoverTrigger): StrategyProbe {
    const overlayRef = probe(trigger)._overlayRef;
    if (!overlayRef) {
      throw new Error('Overlay was not created.');
    }
    return overlayRef.getConfig().positionStrategy as unknown as StrategyProbe;
  }

  function originElement(strategy: StrategyProbe): HTMLElement {
    const origin = strategy._origin;
    return origin instanceof ElementRef ? origin.nativeElement : origin;
  }

  describe('inputs copied onto the popover', () => {
    it('keeps the popover defaults when the trigger inputs are unset', async () => {
      const { popover, button } = await setup();

      expect(popover.positionX).toBe('after');
      expect(popover.positionY).toBe('below');
      expect(popover.triggerEvent).toBe('hover');
      expect(popover.enterDelay).toBe(200);
      expect(popover.leaveDelay).toBe(200);
      expect(popover.overlapTrigger).toBe(true);
      expect(popover.targetOffsetX).toBe(0);
      expect(popover.targetOffsetY).toBe(0);
      expect(popover.arrowWidth).toBe(8);
      expect(popover.closeOnClick).toBe(true);
      expect(button.getAttribute('aria-haspopup')).toBe('true');
    });

    it('applies trigger overrides, including zero delays, offsets, and arrow width', async () => {
      const { popover } = await setup((host) => {
        host.popoverEnterDelay = 80;
        host.popoverLeaveDelay = 90;
        host.popoverOffsetX = 12;
        host.popoverOffsetY = 14;
        host.popoverArrowOffsetX = 5;
        host.popoverArrowOffsetY = 6;
        host.popoverArrowWidth = 8;
        host.popoverArrowColor = 'red';
        host.popoverOverlap = true;
        host.popoverCloseOnClick = true;
        host.triggerPositionX = 'before';
        host.triggerPositionY = 'above';
        host.triggerTriggerOn = 'click';
        host.triggerEnterDelay = 0;
        host.triggerLeaveDelay = 0;
        host.triggerOverlap = false;
        host.triggerOffsetX = 0;
        host.triggerOffsetY = 0;
        host.triggerArrowOffsetX = 0;
        host.triggerArrowOffsetY = 0;
        host.triggerArrowWidth = 0;
        host.triggerArrowColor = 'blue';
        host.triggerCloseOnClick = false;
      });

      expect(popover.positionX).toBe('before');
      expect(popover.positionY).toBe('above');
      expect(popover.triggerEvent).toBe('click');
      expect(popover.enterDelay).toBe(0);
      expect(popover.leaveDelay).toBe(0);
      expect(popover.overlapTrigger).toBe(false);
      expect(popover.targetOffsetX).toBe(0);
      expect(popover.targetOffsetY).toBe(0);
      expect(popover.arrowOffsetX).toBe(0);
      expect(popover.arrowOffsetY).toBe(0);
      expect(popover.arrowWidth).toBe(0);
      expect(popover.arrowColor).toBe('blue');
      expect(popover.closeOnClick).toBe(false);
    });

    it('ignores an empty trigger event and arrow color instead of clearing the popover', async () => {
      const { popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverArrowColor = 'red';
        host.triggerTriggerOn = '' as MdePopoverTriggerEvent;
        host.triggerArrowColor = '';
      });

      expect(popover.triggerEvent).toBe('click');
      expect(popover.arrowColor).toBe('red');
    });

    it('throws the documented error when the trigger position is invalid', async () => {
      await expect(
        setup((host) => {
          host.triggerPositionX = 'left' as MdePopoverPositionX;
        })
      ).rejects.toThrow(/mdePopoverPositionX/);
    });

    it('throws the documented error when the trigger vertical position is invalid', async () => {
      await expect(
        setup((host) => {
          host.triggerPositionY = 'up' as MdePopoverPositionY;
        })
      ).rejects.toThrow(/mdePopoverPositionY/);
    });

    it('throws when the trigger has no popover', async () => {
      await TestBed.configureTestingModule({
        imports: [MissingPopoverHost],
      }).compileComponents();
      const missing = TestBed.createComponent(MissingPopoverHost);

      expect(() => missing.detectChanges()).toThrow(/must pass in an mde-popover instance/);
      missing.destroy();
    });
  });

  describe('open, close, and toggle', () => {
    it('toggles through the public API and emits opened, closed, and close once', async () => {
      const { trigger, host } = await setup((value) => {
        value.popoverTriggerOn = 'click';
      });

      expect(trigger.popoverOpen).toBe(false);
      trigger.togglePopover();
      expect(trigger.popoverOpen).toBe(true);
      expect(panel()?.textContent).toContain('Inside');
      expect(host.openedCount).toBe(1);
      expect(host.closeCount).toBe(0);

      trigger.togglePopover();
      expect(trigger.popoverOpen).toBe(false);
      expect(panel()).toBeNull();
      expect(host.closedCount).toBe(1);
      expect(host.closeCount).toBe(0);

      trigger.openPopover();
      trigger.openPopover();
      expect(host.openedCount).toBe(2);
      trigger.closePopover();
      trigger.closePopover();
      expect(host.closedCount).toBe(2);
    });

    it('opens a click trigger from the click listener and ignores hover', async () => {
      const { button, host } = await setup((value) => {
        value.popoverTriggerOn = 'click';
      });

      button.dispatchEvent(mouse('mouseenter'));
      expect(panel()).toBeNull();

      button.dispatchEvent(mouse('click'));
      expect(panel()).not.toBeNull();
      expect(host.openedCount).toBe(1);

      button.dispatchEvent(mouse('click'));
      expect(panel()).toBeNull();
      expect(host.closedCount).toBe(1);
    });

    it('does not open a hover trigger from a click', async () => {
      const { button } = await setup();

      button.dispatchEvent(mouse('click'));
      expect(panel()).toBeNull();
    });

    it('does not open or close when the trigger event is none', async () => {
      const { button, trigger, host } = await setup((value) => {
        value.popoverTriggerOn = 'none';
      });

      button.dispatchEvent(mouse('click'));
      button.dispatchEvent(mouse('mouseenter'));
      button.dispatchEvent(mouse('mouseleave'));
      expect(panel()).toBeNull();

      trigger.openPopover();
      expect(panel()?.textContent).toContain('Inside');
      expect(host.openedCount).toBe(1);
      trigger.closePopover();
      expect(host.closedCount).toBe(1);
    });

    it('stays closed while the trigger is disabled and opens again once enabled', async () => {
      const { button, fixture: hostFixture, host, trigger } = await setup((value) => {
        value.popoverTriggerOn = 'click';
        value.disabled = true;
      });

      button.dispatchEvent(mouse('click'));
      trigger.openPopover();
      expect(panel()).toBeNull();
      expect(host.openedCount).toBe(0);

      host.disabled = false;
      hostFixture.detectChanges();
      button.dispatchEvent(mouse('click'));
      expect(panel()).not.toBeNull();
    });
  });

  describe('hover timing', () => {
    beforeEach(() => {
      useHoverTimers();
    });

    it('waits for enterDelay and leaveDelay', async () => {
      const { button, popover } = await setup((host) => {
        host.popoverEnterDelay = 200;
        host.popoverLeaveDelay = 200;
      });

      button.dispatchEvent(mouse('mouseenter'));
      await advance(199);
      expect(panel()).toBeNull();
      await advance(1);
      expect(panel()).not.toBeNull();

      button.dispatchEvent(mouse('mouseleave'));
      await advance(199);
      expect(panel()).not.toBeNull();
      expect(popover.closeDisabled).toBe(false);
      await advance(1);
      expect(panel()).toBeNull();
    });

    it('does not move focus onto the trigger when a hover open closes', async () => {
      const { button, trigger } = await setup();
      const focus = vi.spyOn(button, 'focus');

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      expect(panel()).not.toBeNull();
      expect(probe(trigger)._openedByMouse).toBe(true);

      button.dispatchEvent(mouse('mouseleave'));
      await advance(200);
      expect(panel()).toBeNull();
      expect(focus).not.toHaveBeenCalled();
      expect(probe(trigger)._openedByMouse).toBe(false);
    });

    it('opens immediately when the trigger delay is zero', async () => {
      const { button, popover } = await setup((host) => {
        host.triggerEnterDelay = 0;
        host.triggerLeaveDelay = 0;
      });

      expect(popover.enterDelay).toBe(0);
      button.dispatchEvent(mouse('mouseenter'));
      await advance(0);
      expect(panel()).not.toBeNull();

      button.dispatchEvent(mouse('mouseleave'));
      await advance(0);
      expect(panel()).toBeNull();
    });

    it('cancels a pending open when the pointer leaves early', async () => {
      const { button, trigger } = await setup();

      button.dispatchEvent(mouse('mouseenter'));
      button.dispatchEvent(mouse('mouseleave'));
      expect(probe(trigger)._halt).toBe(true);
      expect(probe(trigger)._mouseoverTimer).toBeNull();
      await advance(200);
      expect(panel()).toBeNull();

      trigger.openPopover();
      expect(panel()).toBeNull();

      button.dispatchEvent(mouse('mouseenter'));
      expect(probe(trigger)._halt).toBe(false);
      await advance(200);
      expect(panel()).not.toBeNull();
    });

    it('does not close when the pointer returns to the trigger before leaveDelay', async () => {
      const { button } = await setup();

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      button.dispatchEvent(mouse('mouseleave'));
      await advance(100);
      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      expect(panel()).not.toBeNull();

      button.dispatchEvent(mouse('mouseleave'));
      await advance(200);
      expect(panel()).toBeNull();
    });

    it('stays open while the pointer is over the panel and closes when it leaves the panel', async () => {
      const { button, popover } = await setup();

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      button.dispatchEvent(mouse('mouseleave'));
      panel()?.dispatchEvent(mouse('mouseover'));
      expect(popover.closeDisabled).toBe(true);
      await advance(200);
      expect(panel()).not.toBeNull();

      panel()?.dispatchEvent(mouse('mouseleave'));
      expect(popover.closeDisabled).toBe(false);
      expect(panel()).toBeNull();
    });

    it('arms closeDisabled from panel focus and still closes on pointer leave', async () => {
      const { button, popover } = await setup();

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      panel()?.dispatchEvent(new FocusEvent('focus'));
      expect(popover.closeDisabled).toBe(true);
      panel()?.dispatchEvent(mouse('mouseleave'));
      expect(panel()).toBeNull();
    });

    it('resets closeDisabled after a click closes a hover popover', async () => {
      const { button, popover } = await setup();

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      panel()?.dispatchEvent(mouse('mouseover'));
      expect(popover.closeDisabled).toBe(true);
      panel()?.click();
      expect(panel()).toBeNull();
      expect(popover.closeDisabled).toBe(false);

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      button.dispatchEvent(mouse('mouseleave'));
      await advance(200);
      expect(panel()).toBeNull();
    });

    it('resets closeDisabled after Escape closes a hover popover', async () => {
      const { button, popover } = await setup();

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      panel()?.dispatchEvent(mouse('mouseover'));
      panel()?.dispatchEvent(escapeEvent());
      expect(popover.closeDisabled).toBe(false);
      expect(panel()).toBeNull();

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      button.dispatchEvent(mouse('mouseleave'));
      await advance(200);
      expect(panel()).toBeNull();
    });

    it('does not open a disabled hover trigger until it is enabled', async () => {
      const { button, trigger } = await setup((value) => {
        value.disabled = true;
      });

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      expect(panel()).toBeNull();

      trigger.disablePopoverTrigger = false;
      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      expect(panel()).not.toBeNull();
    });
  });

  describe('click backdrop, Escape, and closeOnClick', () => {
    it('creates a backdrop from the popover trigger event and closes on an outside click or Escape', async () => {
      const { button, host } = await setup((value) => {
        value.popoverTriggerOn = 'click';
      });

      button.dispatchEvent(mouse('click'));
      expect(backdrop()).not.toBeNull();
      expect(backdrop()?.classList.contains('cdk-overlay-transparent-backdrop')).toBe(true);

      backdrop()?.dispatchEvent(mouse('click'));
      expect(panel()).toBeNull();
      expect(host.closeCount).toBe(1);
      expect(host.closedCount).toBe(1);

      button.dispatchEvent(mouse('click'));
      panel()?.dispatchEvent(escapeEvent());
      expect(panel()).toBeNull();
      expect(host.closeCount).toBe(2);
    });

    it('does not create a backdrop for hover, including when the event is set on the trigger', async () => {
      const { trigger } = await setup((host) => {
        host.triggerTriggerOn = 'hover';
      });

      trigger.openPopover();
      expect(backdrop()).toBeNull();
    });

    it('follows popover.triggerEvent when the click input is only on the popover', async () => {
      const { button, trigger } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.closeOnClickTrigger = false;
        host.backdropClose = true;
      });

      expect(trigger.triggerEvent).toBeUndefined();
      expect(button.style.zIndex).toBe('999999');

      button.dispatchEvent(mouse('click'));
      expect(backdrop()).not.toBeNull();
      button.dispatchEvent(mouse('click'));
      expect(panel()).not.toBeNull();

      const blur = vi.spyOn(button, 'blur');
      backdrop()?.dispatchEvent(mouse('click'));
      expect(panel()).toBeNull();
      expect(blur).toHaveBeenCalled();
    });

    it('keeps the panel open when closeOnClick is false until Escape or the backdrop', async () => {
      const { button } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverCloseOnClick = false;
      });

      button.dispatchEvent(mouse('click'));
      panel()?.click();
      expect(panel()).not.toBeNull();

      panel()?.dispatchEvent(escapeEvent());
      expect(panel()).toBeNull();

      button.dispatchEvent(mouse('click'));
      backdrop()?.dispatchEvent(mouse('click'));
      expect(panel()).toBeNull();
    });

    it('keeps a click trigger open when a second click is ignored', async () => {
      const { button } = await setup((host) => {
        host.triggerTriggerOn = 'click';
        host.closeOnClickTrigger = false;
      });

      button.dispatchEvent(mouse('click'));
      button.dispatchEvent(mouse('click'));
      expect(panel()).not.toBeNull();
      expect(button.style.zIndex).toBe('999999');
    });

    it('keeps the overlay out of the top layer so the raised trigger stays clickable', async () => {
      const { button } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.closeOnClickTrigger = false;
        host.backdropClose = true;
      });
      const create = vi.spyOn(TestBed.inject(Overlay), 'create');

      button.dispatchEvent(mouse('click'));
      expect(panel()).not.toBeNull();
      expect(create.mock.calls[0][0]?.usePopover).toBe(false);
    });

    it('leaves the CDK popover default alone otherwise', async () => {
      const { button } = await setup((host) => {
        host.popoverTriggerOn = 'click';
      });
      const create = vi.spyOn(TestBed.inject(Overlay), 'create');

      button.dispatchEvent(mouse('click'));
      expect(create.mock.calls[0][0]?.usePopover).toBeUndefined();
    });

    it('leaves the backdrop in place when backdrop clicks are disabled', async () => {
      const { button } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.backdropClose = false;
      });

      button.dispatchEvent(mouse('click'));
      expect(backdrop()).not.toBeNull();
      expect(button.style.zIndex).toBe('');
      backdrop()?.dispatchEvent(mouse('click'));
      expect(panel()).not.toBeNull();
    });
  });

  describe('focus trap and focus restore', () => {
    it('moves focus into the panel and restores it to the trigger after a keyboard close', async () => {
      const offsetWidth = vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(120);
      const offsetHeight = vi
        .spyOn(HTMLElement.prototype, 'offsetHeight', 'get')
        .mockReturnValue(24);
      try {
        const { button, fixture: hostFixture, popover } = await setup((host) => {
          host.popoverTriggerOn = 'click';
          host.focusTrap = true;
          host.autoCapture = true;
          host.disableAnimation = true;
        });

        expect(popover.focusTrapEnabled).toBe(true);
        expect(popover.focusTrapAutoCaptureEnabled).toBe(true);
        button.focus();
        button.dispatchEvent(mouse('click'));
        hostFixture.detectChanges();
        await TestBed.inject(ApplicationRef).whenStable();

        await vi.waitFor(() => {
          expect(panel()?.contains(document.activeElement)).toBe(true);
        });

        const focus = vi.spyOn(button, 'focus');
        panel()?.dispatchEvent(escapeEvent());
        expect(panel()).toBeNull();
        expect(focus).toHaveBeenCalled();
        expect(document.activeElement).toBe(button);
      } finally {
        offsetWidth.mockRestore();
        offsetHeight.mockRestore();
      }
    });

    it('does not restore focus after a real mouse open', async () => {
      const { button, trigger } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.focusTrap = false;
      });

      button.dispatchEvent(mouse('mousedown', { buttons: 1, detail: 1 }));
      button.dispatchEvent(mouse('click'));
      expect(probe(trigger)._openedByMouse).toBe(true);

      const focus = vi.spyOn(button, 'focus');
      trigger.closePopover();
      expect(focus).not.toHaveBeenCalled();
    });

    it('treats a screen-reader mousedown as a keyboard open and restores focus', async () => {
      const { button, trigger } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.focusTrap = false;
      });

      button.dispatchEvent(mouse('mousedown', { buttons: 0, detail: 0 }));
      button.dispatchEvent(mouse('click'));
      expect(probe(trigger)._openedByMouse).toBe(false);

      const focus = vi.spyOn(button, 'focus');
      trigger.closePopover();
      expect(focus).toHaveBeenCalled();
    });

    it('leaves focus on the field when a none trigger closes with the trap disabled', async () => {
      const { field, trigger, button } = await setup((host) => {
        host.popoverTriggerOn = 'none';
        host.focusTrap = false;
        host.autoCapture = false;
      });

      field.focus();
      trigger.openPopover();
      expect(document.activeElement).toBe(field);

      const focus = vi.spyOn(button, 'focus');
      trigger.closePopover();
      expect(focus).not.toHaveBeenCalled();
      expect(document.activeElement).toBe(field);
    });

    it('does not steal focus when none is set only on the popover', async () => {
      const { field, trigger, button } = await setup((host) => {
        host.popoverTriggerOn = 'none';
        host.focusTrap = false;
      });

      expect(trigger.triggerEvent).toBeUndefined();
      field.focus();
      trigger.openPopover();
      const focus = vi.spyOn(button, 'focus');
      trigger.closePopover();
      expect(focus).not.toHaveBeenCalled();
      expect(document.activeElement).toBe(field);
    });

    it('focuses the trigger element through the public focus method', async () => {
      const { trigger, button, field } = await setup();

      field.focus();
      trigger.focus();
      expect(document.activeElement).toBe(button);
    });
  });

  describe('target anchoring, position, and scroll strategy', () => {
    it('anchors the overlay to the trigger by default', async () => {
      const { trigger, button, popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverPositionX = 'after';
        host.popoverPositionY = 'below';
      });

      trigger.openPopover();
      const strategy = strategyOf(trigger);
      const service = TestBed.inject(PopoverService);
      const expected = [
        service.getPosition('after', 'below'),
        ...service.getFallbacks('after', 'below'),
      ];

      expect(popover.containerPositioning).toBe(false);
      expect(originElement(strategy)).toBe(button);
      expect(strategy.positions.map((item) => item.overlayX)).toEqual(
        expected.map((item) => item.overlayX)
      );
      expect(strategy.positions.map((item) => item.overlayY)).toEqual(
        expected.map((item) => item.overlayY)
      );
      expect(strategy._offsetX).toBe(0);
      expect(strategy._offsetY).toBe(0);
      expect(panel()?.classList.contains('mde-popover-after')).toBe(true);
      expect(panel()?.classList.contains('mde-popover-below')).toBe(true);
      expect(panel()?.querySelector('.mde-popover-direction-arrow')).toBeNull();
    });

    it('anchors to mde-popover-target and applies offsets', async () => {
      const { trigger, anchor, popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.useTarget = true;
        host.triggerOffsetX = 15;
        host.triggerOffsetY = -4;
        host.popoverOverlap = false;
        host.popoverPositionX = 'before';
        host.popoverPositionY = 'center';
      });

      trigger.openPopover();
      const strategy = strategyOf(trigger);

      expect(popover.containerPositioning).toBe(true);
      expect(originElement(strategy)).toBe(anchor);
      expect(strategy._offsetX).toBe(15);
      expect(strategy._offsetY).toBe(-4);
      expect(panel()?.querySelector('.mde-popover-direction-arrow')).not.toBeNull();
    });

    it('mirrors the vertical offset on fallbacks that flip to the other side', async () => {
      const { trigger } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverOverlap = false;
        host.popoverPositionX = 'center';
        host.popoverPositionY = 'below';
        host.popoverOffsetY = 12;
      });

      trigger.openPopover();
      const strategy = strategyOf(trigger);
      const [primary, ...fallbacks] = strategy.positions;

      expect(strategy._offsetY).toBe(12);
      expect(`${primary.originY}/${primary.overlayY}`).toBe('bottom/top');
      expect(primary.offsetY).toBeUndefined();
      const above = fallbacks.filter((p) => p.originY === 'top' && p.overlayY === 'bottom');
      const below = fallbacks.filter((p) => p.originY === 'bottom' && p.overlayY === 'top');
      expect(above.length).toBeGreaterThan(0);
      expect(above.every((p) => p.offsetY === -12)).toBe(true);
      expect(below.every((p) => p.offsetY === undefined)).toBe(true);
      expect(fallbacks.every((p) => p.offsetX === undefined)).toBe(true);
    });

    it('mirrors the horizontal offset on fallbacks that flip to the other side', async () => {
      const { trigger } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverOverlap = false;
        host.popoverPositionX = 'before';
        host.popoverPositionY = 'center';
        host.popoverOffsetX = -10;
      });

      trigger.openPopover();
      const [primary, ...fallbacks] = strategyOf(trigger).positions;

      expect(`${primary.originX}/${primary.overlayX}`).toBe('start/end');
      const after = fallbacks.filter((p) => p.originX === 'end' && p.overlayX === 'start');
      const before = fallbacks.filter((p) => p.originX === 'start' && p.overlayX === 'end');
      expect(after.length).toBeGreaterThan(0);
      expect(after.every((p) => p.offsetX === 10)).toBe(true);
      expect(before.every((p) => p.offsetX === undefined)).toBe(true);
    });

    it('leaves fallbacks alone without an offset or when the request overlaps the trigger', async () => {
      const { trigger } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverOverlap = true;
        host.popoverPositionX = 'start';
        host.popoverPositionY = 'start';
        host.popoverOffsetX = 5;
        host.popoverOffsetY = 5;
      });

      trigger.openPopover();
      const positions = strategyOf(trigger).positions;
      expect(positions.every((p) => p.offsetX === undefined && p.offsetY === undefined)).toBe(true);
    });

    it('shifts non-overlapping fallback positions off the anchor', async () => {
      const { trigger } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverOverlap = false;
        host.popoverPositionX = 'center';
        host.popoverPositionY = 'center';
      });

      trigger.openPopover();
      const service = TestBed.inject(PopoverService);
      const shifted = service.getNonOverlapPosition('center', 'center');
      const expected = [
        service.getPosition(shifted.PositionX, shifted.PositionY),
        ...service.getFallbacks(shifted.PositionX, shifted.PositionY),
      ];
      const strategy = strategyOf(trigger);

      expect(shifted).toEqual({ PositionX: 'center', PositionY: 'above' });
      expect(strategy.positions.map((item) => `${item.originX}/${item.originY}`)).toEqual(
        expected.map((item) => `${item.originX}/${item.originY}`)
      );
    });

    it('updates arrow classes when the overlay reports a fallback position', async () => {
      const { trigger, popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverOverlap = false;
        host.popoverPositionX = 'before';
        host.popoverPositionY = 'center';
        host.popoverArrowColor = 'red';
      });

      trigger.openPopover();
      // CDK 22 re-applies the real position once the overlay settles; let it finish first.
      await fixture.whenStable();
      strategyOf(trigger).positionChanges.next({
        connectionPair: new ConnectionPositionPair(
          { originX: 'center', originY: 'top' },
          { overlayX: 'center', overlayY: 'top' }
        ),
        scrollableViewProperties: {
          isOriginClipped: false,
          isOriginOutsideView: false,
          isOverlayClipped: false,
          isOverlayOutsideView: false,
        },
      });

      expect(popover.positionX).toBe('center');
      expect(popover.positionY).toBe('above');
      expect(popover._classList['mde-popover-center']).toBe(true);
      expect(popover._classList['mde-popover-above']).toBe(true);
      expect(popover._classList['mde-popover-below']).toBe(false);
      expect(popover.popoverArrowStyles['border-bottom']).toContain('red');
    });

    it('does not flip the vertical class when overlap is allowed', async () => {
      const { trigger, popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverOverlap = true;
        host.popoverPositionX = 'before';
        host.popoverPositionY = 'above';
      });

      trigger.openPopover();
      // CDK 22 re-applies the real position once the overlay settles; let it finish first.
      await fixture.whenStable();
      strategyOf(trigger).positionChanges.next({
        connectionPair: new ConnectionPositionPair(
          { originX: 'end', originY: 'bottom' },
          { overlayX: 'start', overlayY: 'top' }
        ),
        scrollableViewProperties: {
          isOriginClipped: false,
          isOriginOutsideView: false,
          isOverlayClipped: false,
          isOverlayOutsideView: false,
        },
      });

      expect(popover.positionX).toBe('after');
      expect(popover.positionY).toBe('below');
      expect(popover._classList['mde-popover-after']).toBe(true);
      expect(popover._classList['mde-popover-below']).toBe(true);
    });

    it('flips an above fallback downward and leaves a centered fallback centered', async () => {
      const { trigger, popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverOverlap = false;
        host.popoverPositionX = 'before';
        host.popoverPositionY = 'center';
      });

      trigger.openPopover();
      // CDK 22 re-applies the real position once the overlay settles; let it finish first.
      await fixture.whenStable();
      const changes = strategyOf(trigger).positionChanges;
      const emit = (overlayY: 'bottom' | 'center') => {
        changes.next({
          connectionPair: new ConnectionPositionPair(
            { originX: 'center', originY: 'center' },
            { overlayX: 'center', overlayY }
          ),
          scrollableViewProperties: {
            isOriginClipped: false,
            isOriginOutsideView: false,
            isOverlayClipped: false,
            isOverlayOutsideView: false,
          },
        });
      };

      emit('bottom');
      expect(popover.positionY).toBe('below');
      emit('center');
      expect(popover.positionY).toBe('center');
    });

    it.each(['noop', 'close', 'block', 'reposition'] as const)(
      'uses the %s scroll strategy',
      async (name) => {
        const { trigger } = await setup((host) => {
          host.popoverTriggerOn = 'click';
          host.scrollStrategy = name;
        });
        const overlay = TestBed.inject(Overlay);
        const spies: Record<MdePopoverScrollStrategy, ReturnType<typeof vi.spyOn>> = {
          noop: vi.spyOn(overlay.scrollStrategies, 'noop'),
          close: vi.spyOn(overlay.scrollStrategies, 'close'),
          block: vi.spyOn(overlay.scrollStrategies, 'block'),
          reposition: vi.spyOn(overlay.scrollStrategies, 'reposition'),
        };
        const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

        trigger.openPopover();

        expect(spies[name]).toHaveBeenCalled();
        expect(log).not.toHaveBeenCalledWith('noop');
        log.mockRestore();
      }
    );

    it('falls back to reposition for an unknown scroll strategy', async () => {
      const { trigger, popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
      });
      popover.scrollStrategy = 'unknown' as MdePopoverScrollStrategy;
      const overlay = TestBed.inject(Overlay);
      const reposition = vi.spyOn(overlay.scrollStrategies, 'reposition');

      trigger.openPopover();

      expect(reposition).toHaveBeenCalled();
    });

    it('sets the overlay direction from Directionality', async () => {
      const { trigger } = await setup(
        (host) => {
          host.popoverTriggerOn = 'click';
        },
        [{ provide: Directionality, useValue: { value: 'rtl', change: EMPTY } }]
      );

      expect(trigger.dir).toBe('rtl');
      trigger.openPopover();
      expect(probe(trigger)._overlayRef?.getConfig().direction).toBe('rtl');
    });

    it('defaults the direction to ltr', async () => {
      const { trigger } = await setup();

      expect(trigger.dir).toBe('ltr');
    });
  });

  describe('destroy and cleanup', () => {
    it('disposes the overlay and ignores a later close', async () => {
      const { trigger, popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
      });

      trigger.openPopover();
      const overlayRef = probe(trigger)._overlayRef;
      const dispose = vi.spyOn(overlayRef as OverlayRef, 'dispose');
      const closePopover = vi.spyOn(trigger, 'closePopover');

      trigger.destroyPopover();

      expect(dispose).toHaveBeenCalled();
      expect(probe(trigger)._overlayRef).toBeNull();
      expect(panel()).toBeNull();
      closePopover.mockClear();
      popover._emitCloseEvent();
      expect(closePopover).not.toHaveBeenCalled();
    });

    it('clears a pending hover timer so destroy does not open or close later', async () => {
      useHoverTimers();
      const { button, trigger } = await setup();
      const openPopover = vi.spyOn(trigger, 'openPopover');

      button.dispatchEvent(mouse('mouseenter'));
      expect(probe(trigger)._mouseoverTimer).not.toBeNull();
      trigger.destroyPopover();
      expect(probe(trigger)._mouseoverTimer).toBeNull();
      await advance(200);
      expect(openPopover).not.toHaveBeenCalled();
    });

    it('clears a pending leave timer', async () => {
      useHoverTimers();
      const { button, trigger } = await setup();

      button.dispatchEvent(mouse('mouseenter'));
      await advance(200);
      button.dispatchEvent(mouse('mouseleave'));
      expect(probe(trigger)._mouseleaveTimer).not.toBeNull();
      const closePopover = vi.spyOn(trigger, 'closePopover');
      trigger.destroyPopover();
      expect(probe(trigger)._mouseleaveTimer).toBeNull();
      await advance(200);
      expect(closePopover).not.toHaveBeenCalled();
    });

    it('can be destroyed twice and from the directive lifecycle', async () => {
      const { trigger, fixture: hostFixture } = await setup((host) => {
        host.popoverTriggerOn = 'click';
      });

      trigger.openPopover();
      expect(() => trigger.destroyPopover()).not.toThrow();
      expect(() => trigger.destroyPopover()).not.toThrow();
      expect(() => hostFixture.destroy()).not.toThrow();
      fixture = undefined;
    });

    it('drops the position subscription so a later fallback does not move the popover', async () => {
      const { trigger, popover } = await setup((host) => {
        host.popoverTriggerOn = 'click';
        host.popoverPositionX = 'before';
        host.popoverPositionY = 'above';
      });

      trigger.openPopover();
      const changes = strategyOf(trigger).positionChanges;
      const positionSub = probe(trigger)._positionSubscription;
      const backdropSub = probe(trigger)._backdropSubscription;
      trigger.destroyPopover();

      expect(positionSub?.closed).toBe(true);
      expect(backdropSub?.closed).toBe(true);
      expect(probe(trigger)._positionSubscription).toBeNull();
      expect(probe(trigger)._backdropSubscription).toBeNull();
      try {
        changes.next({
          connectionPair: new ConnectionPositionPair(
            { originX: 'end', originY: 'bottom' },
            { overlayX: 'start', overlayY: 'top' }
          ),
          scrollableViewProperties: {
            isOriginClipped: false,
            isOriginOutsideView: false,
            isOverlayClipped: false,
            isOverlayOutsideView: false,
          },
        });
      } catch {
        // Disposing the overlay completes the strategy subject.
      }
      expect(popover.positionX).toBe('before');
      expect(popover.positionY).toBe('above');
    });
  });

  describe('a popover shared by several triggers', () => {
    const below = (strategy: StrategyProbe) =>
      `${strategy.positions[0].originY}/${strategy.positions[0].overlayY}`;

    function reportPosition(strategy: StrategyProbe): void {
      // What the CDK reports when the requested (non-fallback) position fits.
      strategy.positionChanges.next({
        connectionPair: strategy.positions[0],
        scrollableViewProperties: {
          isOriginClipped: false,
          isOriginOutsideView: false,
          isOverlayClipped: false,
          isOverlayOutsideView: false,
        },
      });
    }

    async function setupShared() {
      await TestBed.configureTestingModule({ imports: [SharedPopoverHost] }).compileComponents();
      const shared = TestBed.createComponent(SharedPopoverHost);
      shared.detectChanges();
      const triggerAt = (selector: string) =>
        shared.debugElement.query(By.css(selector)).injector.get(MdePopoverTrigger);
      return { shared, triggerAt };
    }

    function strategyFor(trigger: MdePopoverTrigger): StrategyProbe {
      return probe(trigger)._overlayRef?.getConfig()
        .positionStrategy as unknown as StrategyProbe;
    }

    it('builds every new overlay from the requested position, not the last rendered one', async () => {
      const { shared, triggerAt } = await setupShared();
      const first = triggerAt('button.first');
      const second = triggerAt('button.second');

      first.openPopover();
      await shared.whenStable();
      reportPosition(strategyFor(first));
      first.closePopover();

      second.openPopover();
      await shared.whenStable();

      // center/below without overlap opens below the trigger: origin bottom, overlay top.
      expect(below(strategyFor(first))).toBe('bottom/top');
      expect(below(strategyFor(second))).toBe('bottom/top');
      second.closePopover();
      shared.destroy();
    });

    it('keeps the requested position for a trigger that is re-created', async () => {
      const { shared, triggerAt } = await setupShared();
      for (let round = 0; round < 3; round++) {
        const second = triggerAt('button.second');
        second.openPopover();
        await shared.whenStable();
        reportPosition(strategyFor(second));
        expect(below(strategyFor(second))).toBe('bottom/top');
        second.closePopover();

        shared.componentInstance.showSecond = false;
        shared.detectChanges();
        shared.componentInstance.showSecond = true;
        shared.detectChanges();
      }
      shared.destroy();
    });

    it('falls back to positionX/positionY for a panel without the requested-position members', async () => {
      const { shared, triggerAt } = await setupShared();
      const first = triggerAt('button.first');
      const popover = shared.debugElement.query(By.directive(MdePopover))
        .componentInstance as MdePopover;
      // A custom MdePopoverPanel may not implement the optional members.
      Object.defineProperty(popover, '_requestedPosition', { value: undefined });
      Object.defineProperty(popover, '_setRenderedPosition', { value: undefined });

      first.openPopover();
      await shared.whenStable();
      expect(below(strategyFor(first))).toBe('bottom/top');
      reportPosition(strategyFor(first));
      expect(popover.positionY).toBe('above');
      expect(popover._classList['mde-popover-above']).toBe(true);
      first.closePopover();
      shared.destroy();
    });

    it('starts every open from the side the trigger asks for, not where the last one rendered', async () => {
      const { shared, triggerAt } = await setupShared();
      const first = triggerAt('button.first');
      const second = triggerAt('button.second');
      const popover = shared.debugElement.query(By.directive(MdePopover))
        .componentInstance as MdePopover;

      first.openPopover();
      await shared.whenStable();
      const flipped = strategyFor(first);
      // The CDK used the fallback above the trigger: the arrow moves under the content.
      flipped.positionChanges.next({
        connectionPair: flipped.positions[1],
        scrollableViewProperties: {
          isOriginClipped: false,
          isOriginOutsideView: false,
          isOverlayClipped: false,
          isOverlayOutsideView: false,
        },
      });
      expect(popover.positionY).toBe('below');
      expect(popover.popoverContentStyles['margin-top']).toBe('-16px');
      first.closePopover();

      // The overlay measures the panel before it reports a position, so the panel must already
      // have the requested side's arrow styles (and height) when it is attached.
      const spy = vi.spyOn(popover, '_setRenderedPosition');
      second.openPopover();
      expect(spy).toHaveBeenCalledWith('center', 'above');
      expect(popover.popoverContentStyles['margin-top']).toBe('0px');
      expect(popover._classList['mde-popover-above']).toBe(true);
      expect(popover._classList['mde-popover-below']).toBe(false);
      second.closePopover();

      // Reopening the flipped trigger also starts from its requested side.
      spy.mockClear();
      first.openPopover();
      expect(spy).toHaveBeenCalledWith('center', 'above');
      first.closePopover();
      shared.destroy();
    });

    it('still reports the rendered position on the popover', async () => {
      const { shared, triggerAt } = await setupShared();
      const first = triggerAt('button.first');
      const popover = shared.debugElement.query(By.directive(MdePopover))
        .componentInstance as MdePopover;

      first.openPopover();
      await shared.whenStable();
      reportPosition(strategyFor(first));

      // The arrow styles and classes follow the rendered position (flipped for non-overlap).
      expect(popover.positionY).toBe('above');
      expect(popover._classList['mde-popover-above']).toBe(true);
      first.closePopover();
      shared.destroy();
    });
  });
});
