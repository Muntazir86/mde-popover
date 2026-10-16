import { Component, EmbeddedViewRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { MdePopover } from './popover';
import { MdePopoverPositionX, MdePopoverPositionY } from './popover-types';

@Component({
  selector: 'mde-spec-popover-host',
  imports: [MdePopover],
  template: `
    <mde-popover class="from-host extra" #popover="mdePopover">
      <button type="button" class="inside">Inside</button>
    </mde-popover>
  `,
})
class PopoverHost {}

function escapeEvent(): KeyboardEvent {
  const event = new KeyboardEvent('keydown', {
    key: 'Escape',
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperty(event, 'keyCode', { value: 27 });
  return event;
}

describe('MdePopover', () => {
  let fixture: ComponentFixture<PopoverHost>;
  let popover: MdePopover;
  let view: EmbeddedViewRef<void> | undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverHost],
    }).compileComponents();
    fixture = TestBed.createComponent(PopoverHost);
    fixture.detectChanges();
    popover = fixture.debugElement.query(By.directive(MdePopover)).componentInstance;
  });

  afterEach(() => {
    view?.destroy();
    view = undefined;
    fixture.destroy();
  });

  function renderPanel(): HTMLElement {
    view?.destroy();
    view = popover.templateRef.createEmbeddedView();
    view.detectChanges();
    const panel = view.rootNodes.find((node): node is HTMLElement => node instanceof HTMLElement);
    if (!panel) {
      throw new Error('Popover template did not render a panel.');
    }
    document.body.appendChild(panel);
    return panel;
  }

  describe('defaults', () => {
    it('uses the documented default inputs', () => {
      expect(popover.positionX).toBe('after');
      expect(popover.positionY).toBe('below');
      expect(popover.triggerEvent).toBe('hover');
      expect(popover.enterDelay).toBe(200);
      expect(popover.leaveDelay).toBe(200);
      expect(popover.overlapTrigger).toBe(true);
      expect(popover.targetOffsetX).toBe(0);
      expect(popover.targetOffsetY).toBe(0);
      expect(popover.arrowOffsetX).toBe(0);
      expect(popover.arrowOffsetY).toBe(0);
      expect(popover.arrowWidth).toBe(8);
      expect(popover.arrowColor).toBe('rgba(0, 0, 0, 0.12)');
      expect(popover.closeOnClick).toBe(true);
      expect(popover.focusTrapEnabled).toBe(true);
      expect(popover.focusTrapAutoCaptureEnabled).toBe(true);
      expect(popover.disableAnimation).toBe(false);
      expect(popover.scrollStrategy).toBe('reposition');
      expect(popover.closeDisabled).toBe(false);
      expect(popover.containerPositioning).toBe(false);
      expect(fixture.nativeElement.querySelector('mde-popover').getAttribute('role')).toBe(
        'dialog'
      );
    });

    it('accepts every documented position and records its arrow class', () => {
      const horizontal: MdePopoverPositionX[] = ['before', 'start', 'center', 'end', 'after'];
      const vertical: MdePopoverPositionY[] = ['above', 'start', 'center', 'end', 'below'];

      for (const position of horizontal) {
        popover.positionX = position;
        expect(popover.positionX).toBe(position);
      }
      for (const position of vertical) {
        popover.positionY = position;
        expect(popover.positionY).toBe(position);
      }

      expect(popover._classList['mde-popover-after']).toBe(true);
      expect(popover._classList['mde-popover-below']).toBe(true);
      expect(popover._classList['mde-popover-center']).toBe(false);
    });

    it('rejects positions outside the documented set', () => {
      expect(() => {
        popover.positionX = 'left' as MdePopoverPositionX;
      }).toThrow(/mdePopoverPositionX/);
      expect(() => {
        popover.positionY = 'up' as MdePopoverPositionY;
      }).toThrow(/mdePopoverPositionY/);
    });
  });

  describe('boolean and class inputs', () => {
    it('coerces boolean attributes, including the string false', () => {
      popover.overlapTrigger = 'false' as unknown as boolean;
      popover.closeOnClick = 'false' as unknown as boolean;
      popover.focusTrapEnabled = 'false' as unknown as boolean;
      popover.focusTrapAutoCaptureEnabled = null as unknown as boolean;
      popover.disableAnimation = '' as unknown as boolean;

      expect(popover.overlapTrigger).toBe(false);
      expect(popover.closeOnClick).toBe(false);
      expect(popover.focusTrapEnabled).toBe(false);
      expect(popover.focusTrapAutoCaptureEnabled).toBe(false);
      expect(popover.disableAnimation).toBe(true);

      popover.disableAnimation = 'false' as unknown as boolean;
      expect(popover.disableAnimation).toBe(false);
    });

    it('moves host classes onto the overlay panel and keeps them readable', () => {
      expect(popover.classList).toBe('from-host extra');
      expect(fixture.nativeElement.querySelector('mde-popover').className).toBe('');

      popover.classList = 'legacy-panel';
      expect(popover.classList).toBe('legacy-panel');
      expect(popover._classList['legacy-panel']).toBe(true);
      expect(popover._classList['mde-popover-after']).toBe(true);
      expect(popover._classList['mde-popover-below']).toBe(true);

      popover.panelClass = '';
      expect(popover.classList).toBe('');
      popover.panelClass = undefined as unknown as string;
      expect(popover.classList).toBe('');
    });

    it('stores the remaining inputs', () => {
      popover.triggerEvent = 'none';
      popover.scrollStrategy = 'close';
      popover.enterDelay = 0;
      popover.leaveDelay = 40;
      popover.targetOffsetX = 12;
      popover.targetOffsetY = -3;
      popover.arrowOffsetX = 2;
      popover.arrowOffsetY = 4;
      popover.arrowWidth = 6;
      popover.arrowColor = 'red';

      expect(popover.triggerEvent).toBe('none');
      expect(popover.scrollStrategy).toBe('close');
      expect(popover.enterDelay).toBe(0);
      expect(popover.leaveDelay).toBe(40);
      expect(popover.targetOffsetX).toBe(12);
      expect(popover.targetOffsetY).toBe(-3);
      expect(popover.arrowOffsetX).toBe(2);
      expect(popover.arrowOffsetY).toBe(4);
      expect(popover.arrowWidth).toBe(6);
      expect(popover.arrowColor).toBe('red');
    });
  });

  describe('position classes and arrow styles', () => {
    it('sets explicit position classes without changing the stored position', () => {
      popover.setPositionClasses('before', 'center');

      expect(popover.positionX).toBe('after');
      expect(popover.positionY).toBe('below');
      expect(popover._classList['mde-popover-before']).toBe(true);
      expect(popover._classList['mde-popover-after']).toBe(false);
      expect(popover._classList['mde-popover-center']).toBe(true);
      expect(popover._classList['mde-popover-above']).toBe(false);
      expect(popover._classList['mde-popover-below']).toBe(false);
    });

    it('hides the arrow on a corner and removes its padding', () => {
      popover.positionX = 'before';
      popover.positionY = 'above';
      popover.setCurrentStyles();

      expect(popover.popoverArrowStyles).toEqual({ border: '0px' });
      expect(popover.popoverContentStyles).toEqual({ padding: '0px' });

      popover.positionX = 'after';
      popover.positionY = 'below';
      popover.setCurrentStyles();
      expect(popover.popoverArrowStyles['border']).toBe('0px');
    });

    it('points the arrow down from a centered popover above the trigger', () => {
      popover.positionX = 'center';
      popover.positionY = 'above';
      popover.overlapTrigger = false;
      popover.arrowOffsetX = 4;
      popover.arrowWidth = 10;
      popover.arrowColor = 'red';
      popover.setCurrentStyles();

      expect(popover.popoverArrowStyles['left']).toBe('calc(50% + -6px)');
      expect(popover.popoverArrowStyles['right']).toBe('');
      expect(popover.popoverArrowStyles['top']).toBe('');
      expect(popover.popoverArrowStyles['border-bottom']).toBe('10px solid red');
      expect(popover.popoverArrowStyles['border-top']).toBe('0px solid transparent');
      expect(popover.popoverContentStyles['padding']).toBe('10px');
      expect(popover.popoverContentStyles['margin-top']).toBe('0px');
    });

    it('points the arrow up from a centered popover below the trigger', () => {
      popover.positionX = 'center';
      popover.positionY = 'below';
      popover.overlapTrigger = false;
      popover.arrowWidth = 8;
      popover.arrowColor = 'blue';
      popover.containerPositioning = false;
      popover.setCurrentStyles();

      expect(popover.popoverArrowStyles['border-top']).toBe('8px solid blue');
      expect(popover.popoverArrowStyles['border-bottom']).toBe('8px solid transparent');
      expect(popover.popoverContentStyles['margin-top']).toBe('-16px');
    });

    it('drops the negative margin when the popover is anchored to another element', () => {
      popover.positionX = 'center';
      popover.positionY = 'below';
      popover.overlapTrigger = false;
      popover.containerPositioning = true;
      popover.arrowWidth = 8;
      popover.setCurrentStyles();

      expect(popover.popoverContentStyles['margin-top']).toBe('0px');
    });

    it('draws a side arrow when the popover is vertically centered', () => {
      popover.positionY = 'center';
      popover.arrowOffsetY = 2;
      popover.arrowWidth = 8;
      popover.arrowColor = 'green';

      popover.positionX = 'after';
      popover.setCurrentStyles();
      expect(popover.popoverArrowStyles['left']).toBe('-8px');
      expect(popover.popoverArrowStyles['right']).toBe('');
      expect(popover.popoverArrowStyles['top']).toBe('calc(50% - 10px)');
      expect(popover.popoverArrowStyles['border-right']).toBe('8px solid green');
      expect(popover.popoverArrowStyles['border-left']).toBe('8px solid transparent');

      popover.positionX = 'before';
      popover.setCurrentStyles();
      expect(popover.popoverArrowStyles['left']).toBe('');
      expect(popover.popoverArrowStyles['right']).toBe('-8px');
      expect(popover.popoverArrowStyles['border-left']).toBe('8px solid green');
      expect(popover.popoverArrowStyles['border-right']).toBe('8px solid transparent');
    });

    it('offsets a horizontal arrow when the popover is not centered', () => {
      popover.positionX = 'after';
      popover.positionY = 'start';
      popover.arrowOffsetX = 3;
      popover.arrowWidth = 5;
      popover.overlapTrigger = true;
      popover.setCurrentStyles();

      expect(popover.popoverArrowStyles['left']).toBe('8px');
      expect(popover.popoverArrowStyles['right']).toBe('');
      expect(popover.popoverArrowStyles['border-top']).toBe('0px solid transparent');
      expect(popover.popoverContentStyles['padding']).toBe('0px');

      popover.positionX = 'before';
      popover.overlapTrigger = false;
      popover.setCurrentStyles();
      expect(popover.popoverArrowStyles['right']).toBe('8px');
      expect(popover.popoverArrowStyles['left']).toBe('');
      expect(popover.popoverContentStyles['padding']).toBe('5px');
    });

    it('centers both axes without a directional arrow color', () => {
      popover.positionX = 'center';
      popover.positionY = 'center';
      popover.arrowWidth = 8;
      popover.arrowColor = 'black';
      popover.setCurrentStyles();

      expect(popover.popoverArrowStyles['left']).toBe('');
      expect(popover.popoverArrowStyles['right']).toBe('');
      expect(popover.popoverArrowStyles['border-top']).toBe('8px solid transparent');
      expect(popover.popoverArrowStyles['border-right']).toBe('8px solid transparent');
      expect(popover.popoverArrowStyles['border-bottom']).toBe('8px solid transparent');
      expect(popover.popoverArrowStyles['border-left']).toBe('8px solid transparent');
    });
  });

  describe('template', () => {
    it('renders an overlapping panel with a focus trap and the enter animation', () => {
      const panel = renderPanel();
      const content = panel.querySelector('.mde-popover-content');

      expect(panel.getAttribute('role')).toBe('dialog');
      expect(panel.getAttribute('tabindex')).toBe('-1');
      expect(panel.classList.contains('mde-popover-overlap')).toBe(true);
      expect(panel.classList.contains('mde-popover-after')).toBe(true);
      expect(panel.classList.contains('mde-popover-below')).toBe(true);
      expect(panel.classList.contains('from-host')).toBe(true);
      expect(panel.querySelector('.mde-popover-direction-arrow')).toBeNull();
      expect(content?.textContent).toContain('Inside');
      expect(popover.disableAnimation).toBe(false);
    });

    it('renders the arrow and skips animation and the trap when those inputs are off', () => {
      popover.overlapTrigger = false;
      popover.disableAnimation = true;
      popover.focusTrapEnabled = false;
      popover.focusTrapAutoCaptureEnabled = false;
      popover.positionX = 'center';
      popover.positionY = 'above';
      popover.arrowColor = 'red';
      popover.setCurrentStyles();

      const panel = renderPanel();

      expect(panel.querySelector('.mde-popover-direction-arrow')).not.toBeNull();
      expect(panel.className).not.toContain('mde-popover-enter-animation');
      expect(panel.classList.contains('mde-popover-overlap')).toBe(false);
      expect(panel.classList.contains('mde-popover-center')).toBe(true);
      expect(panel.classList.contains('mde-popover-above')).toBe(true);
    });
  });

  describe('close output', () => {
    it('emits close on click when closeOnClick is true and ignores the click otherwise', () => {
      const close = vi.fn();
      popover.close.subscribe(close);
      const panel = renderPanel();

      panel.click();
      expect(close).toHaveBeenCalledTimes(1);
      expect(popover.closeDisabled).toBe(false);

      popover.closeOnClick = false;
      panel.click();
      expect(close).toHaveBeenCalledTimes(1);
    });

    it('emits close for Escape and ignores other keys', () => {
      const close = vi.fn();
      popover.close.subscribe(close);
      const panel = renderPanel();

      panel.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true })
      );
      expect(close).not.toHaveBeenCalled();

      panel.dispatchEvent(escapeEvent());
      expect(close).toHaveBeenCalledTimes(1);
    });

    it('holds a hover popover open over the panel and closes when the pointer leaves it', () => {
      const close = vi.fn();
      popover.close.subscribe(close);
      popover.triggerEvent = 'hover';
      const panel = renderPanel();

      panel.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      expect(popover.closeDisabled).toBe(true);
      expect(close).not.toHaveBeenCalled();

      panel.dispatchEvent(new FocusEvent('focus'));
      expect(popover.closeDisabled).toBe(true);

      panel.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
      expect(popover.closeDisabled).toBe(false);
      expect(close).toHaveBeenCalledTimes(1);
    });

    it('does not arm closeDisabled for a click popover', () => {
      const close = vi.fn();
      popover.close.subscribe(close);
      popover.triggerEvent = 'click';
      const panel = renderPanel();

      panel.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      panel.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));

      expect(popover.closeDisabled).toBe(false);
      expect(close).not.toHaveBeenCalled();
    });

    it('clears closeDisabled before emitting close', () => {
      const close = vi.fn();
      popover.close.subscribe(close);
      popover.triggerEvent = 'hover';
      popover.closeDisabled = true;

      popover._emitCloseEvent();

      expect(popover.closeDisabled).toBe(false);
      expect(close).toHaveBeenCalledTimes(1);
    });

    it('emits close and completes when the popover is destroyed', () => {
      const close = vi.fn();
      const complete = vi.fn();
      popover.close.subscribe({ next: close, complete });

      fixture.destroy();

      expect(close).toHaveBeenCalledTimes(1);
      expect(complete).toHaveBeenCalledTimes(1);

      const afterDestroy = vi.fn();
      popover.close.subscribe(afterDestroy);
      expect(afterDestroy).not.toHaveBeenCalled();
    });
  });

  describe('animation callbacks', () => {
    it('completes the enter and leave animations and emits', () => {
      const enter = vi.fn();
      const leave = vi.fn();
      const animationComplete = vi.fn();
      popover._onEnterAnimationComplete.subscribe(enter);
      popover._onLeaveAnimationComplete.subscribe(leave);

      const event = {
        target: document.createElement('div'),
        animationComplete,
      };
      popover.onEnterAnimationComplete(event);
      popover.onLeaveAnimationComplete(event);

      expect(animationComplete).toHaveBeenCalledTimes(2);
      expect(enter).toHaveBeenCalledTimes(1);
      expect(leave).toHaveBeenCalledTimes(1);
    });
  });
});
