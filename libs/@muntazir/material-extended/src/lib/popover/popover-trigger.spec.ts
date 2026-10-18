import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { MdePopoverModule } from './popover-module';
import { MdePopover } from './popover';
import { MdePopoverTrigger } from './popover-trigger';

// Fixes backported from 10.0.0 and 11.0.0.

@Component({
  standalone: false,
  template: `
    <mde-popover
      #popover="mdePopover"
      [mdePopoverTriggerOn]="triggerOn"
      mdePopoverPositionX="center"
      mdePopoverPositionY="below"
      [mdePopoverOverlapTrigger]="false"
      [mdePopoverOffsetY]="offsetY"
      [mdePopoverEnterDelay]="100"
      [mdePopoverLeaveDelay]="100"
      [mdePopoverDisableAnimation]="true"
    >
      <span class="content">Shared</span>
    </mde-popover>
    <button type="button" class="first" [mdePopoverTriggerFor]="popover">First</button>
    @if (showSecond) {
      <button type="button" class="second" [mdePopoverTriggerFor]="popover">Second</button>
    }
  `,
})
class SharedHost {
  @ViewChild('popover') popover!: MdePopover;
  triggerOn: 'click' | 'hover' | 'none' = 'click';
  offsetY = 0;
  showSecond = true;
}

@Component({
  standalone: false,
  template: `
    <mde-popover #popover="mdePopover" mdePopoverOverlapTrigger="false" class="one two">
      <span>Panel</span>
    </mde-popover>
    <button type="button" [mdePopoverTriggerFor]="popover" [mdePopoverEnterDelay]="0" [mdePopoverOffsetX]="0">
      Open
    </button>
  `,
})
class AttributeHost {
  @ViewChild('popover') popover!: MdePopover;
}

type TriggerProbe = {
  _overlayRef: { getConfig(): { positionStrategy: unknown } } | null;
  _openedByMouse: boolean;
};
type StrategyProbe = {
  positions: ConnectedOverlayPositionChange['connectionPair'][];
  _offsetY: number;
  positionChanges: { next(change: ConnectedOverlayPositionChange): void };
};

function probe(trigger: MdePopoverTrigger): TriggerProbe {
  return trigger as unknown as TriggerProbe;
}

function strategyOf(trigger: MdePopoverTrigger): StrategyProbe {
  return probe(trigger)._overlayRef!.getConfig().positionStrategy as StrategyProbe;
}

function report(strategy: StrategyProbe, index: number): void {
  // What the CDK emits when it renders the overlay at positions[index].
  (strategy as unknown as { _positionChanges: { next(c: ConnectedOverlayPositionChange): void } })
    ._positionChanges.next({
      connectionPair: strategy.positions[index],
      scrollableViewProperties: {
        isOriginClipped: false,
        isOriginOutsideView: false,
        isOverlayClipped: false,
        isOverlayOutsideView: false,
      },
    } as ConnectedOverlayPositionChange);
}

/** Index of the first fallback that places the panel above the trigger. */
function aboveIndex(strategy: StrategyProbe): number {
  return strategy.positions.findIndex((p) => p.originY === 'top' && p.overlayY === 'bottom');
}

const pair = (p: ConnectedOverlayPositionChange['connectionPair']) => `${p.originY}/${p.overlayY}`;

describe('MdePopoverTrigger backported fixes', () => {
  let fixture: ComponentFixture<SharedHost>;
  let first: MdePopoverTrigger;
  let second: () => MdePopoverTrigger;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdePopoverModule],
      declarations: [SharedHost, AttributeHost],
    }).compileComponents();
    fixture = TestBed.createComponent(SharedHost);
    fixture.detectChanges();
    first = fixture.debugElement.query(By.css('.first')).injector.get(MdePopoverTrigger);
    second = () => fixture.debugElement.query(By.css('.second')).injector.get(MdePopoverTrigger);
  });

  afterEach(() => fixture.destroy());

  /** Open and let the CDK apply its own first position before a test reports one. */
  async function open(trigger: MdePopoverTrigger): Promise<void> {
    trigger.openPopover();
    fixture.detectChanges();
    await fixture.whenStable();
  }

  it('builds every new overlay from the requested position, not the last rendered one', async () => {
    await open(first);
    // The CDK fell back to the position above the trigger.
    report(strategyOf(first), aboveIndex(strategyOf(first)));
    expect(fixture.componentInstance.popover.positionY).toBe('below');
    first.closePopover();

    second().openPopover();
    // center/below without overlap opens below the trigger: origin bottom, overlay top.
    expect(pair(strategyOf(second()).positions[0])).toBe('bottom/top');
    second().closePopover();

    fixture.componentInstance.showSecond = false;
    fixture.detectChanges();
    fixture.componentInstance.showSecond = true;
    fixture.detectChanges();
    second().openPopover();
    expect(pair(strategyOf(second()).positions[0])).toBe('bottom/top');
    second().closePopover();
  });

  it('mirrors the offset for a fallback on the opposite side', () => {
    fixture.componentInstance.offsetY = 12;
    fixture.detectChanges();
    first.openPopover();
    const strategy = strategyOf(first);
    expect(strategy._offsetY).toBe(12);
    const above = strategy.positions.filter((p) => p.originY === 'top' && p.overlayY === 'bottom');
    expect(above.length).toBeGreaterThan(0);
    above.forEach((p) => expect(p.offsetY).toBe(-12));
    first.closePopover();
  });

  it('starts every open from the side the trigger asks for', async () => {
    const popover = fixture.componentInstance.popover;
    await open(first);
    report(strategyOf(first), aboveIndex(strategyOf(first)));
    expect(popover.popoverContentStyles['margin-top']).toBe('-16px');
    first.closePopover();

    const rendered = spyOn(popover, '_setRenderedPosition').and.callThrough();
    first.openPopover();
    expect(rendered).toHaveBeenCalledWith('center', 'above');
    expect(popover.popoverContentStyles['margin-top']).toBe('0px');
    first.closePopover();
  });

  it('does not move focus onto the trigger when a hover open closes', fakeAsync(() => {
    fixture.componentInstance.triggerOn = 'hover';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.first')).nativeElement as HTMLElement;
    const focus = spyOn(button, 'focus');

    button.dispatchEvent(new MouseEvent('mouseenter'));
    tick(100);
    expect(first.popoverOpen).toBeTrue();
    expect(probe(first)._openedByMouse).toBeTrue();

    button.dispatchEvent(new MouseEvent('mouseleave'));
    tick(100);
    expect(first.popoverOpen).toBeFalse();
    expect(focus).not.toHaveBeenCalled();
  }));

  it('cancels a pending hover close when the pointer re-enters', fakeAsync(() => {
    fixture.componentInstance.triggerOn = 'hover';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.first')).nativeElement as HTMLElement;
    button.dispatchEvent(new MouseEvent('mouseenter'));
    tick(100);
    button.dispatchEvent(new MouseEvent('mouseleave'));
    tick(50);
    button.dispatchEvent(new MouseEvent('mouseenter'));
    tick(200);
    expect(first.popoverOpen).toBeTrue();
    first.destroyPopover();
    expect(() => first.destroyPopover()).not.toThrow();
  }));

  it('clears closeDisabled when the popover emits close', () => {
    const popover = fixture.componentInstance.popover;
    first.openPopover();
    popover.closeDisabled = true;
    popover._emitCloseEvent();
    expect(popover.closeDisabled).toBeFalse();
    expect(first.popoverOpen).toBeFalse();
  });

  it('does not steal focus when a "none" popover closes', () => {
    fixture.componentInstance.triggerOn = 'none';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.first')).nativeElement as HTMLElement;
    const focus = spyOn(button, 'focus');
    first.openPopover();
    first.closePopover();
    expect(focus).not.toHaveBeenCalled();
  });

  it('honours 0 values on the trigger, coerces "false" and returns the class list', () => {
    const host = TestBed.createComponent(AttributeHost);
    host.detectChanges();
    const popover = host.componentInstance.popover;
    expect(popover.enterDelay).toBe(0);
    expect(popover.targetOffsetX).toBe(0);
    expect(popover.overlapTrigger).toBeFalse();
    expect(popover.classList).toBe('one two');
    host.destroy();
  });
});
