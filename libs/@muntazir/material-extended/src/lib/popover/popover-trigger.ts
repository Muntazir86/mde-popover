import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewContainerRef,
  HostListener,
  HostBinding,
  ChangeDetectorRef,
  inject,
} from '@angular/core';

import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ConnectionPositionPair,
  Overlay,
  OverlayRef,
  OverlayConfig,
  FlexibleConnectedPositionStrategy,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

import { Subscription, Subject } from 'rxjs';

import { MdePopoverPanel, MdeTarget } from './popover-interfaces';
import {
  MdePopoverPositionX,
  MdePopoverPositionY,
  MdePopoverTriggerEvent,
  MdePopoverScrollStrategy,
} from './popover-types';
import { throwMdePopoverMissingError } from './popover-errors';
import { takeUntil } from 'rxjs/operators';
import { PopoverService } from './popover.service';

/**
 * This directive is intended to be used in conjunction with an mde-popover tag. It is
 * responsible for toggling the display of the provided popover instance.
 */

@Directive({
    selector: '[mdePopoverTriggerFor]',
    exportAs: 'mdePopoverTrigger',
})
export class MdePopoverTrigger implements AfterViewInit, OnDestroy {

  @HostBinding('attr.aria-haspopup') ariaHaspopup = true;

  popoverOpened = new Subject<void>();
  popoverClosed = new Subject<void>();

  private _portal: TemplatePortal<void>;
  private _overlayRef: OverlayRef | null = null;
  /** The preferred connection pair of this trigger's overlay. */
  private _targetPosition: ConnectionPositionPair | null = null;
  private _popoverOpen = false;
  private _halt = false;
  private _backdropSubscription: Subscription | null = null;
  private _positionSubscription: Subscription | null = null;
  private _detachmentsSubscription: Subscription | null = null;
  private _closeSubscription: Subscription | null = null;

  private _mouseoverTimer: ReturnType<typeof setTimeout> | null = null;
  private _mouseleaveTimer: ReturnType<typeof setTimeout> | null = null;
  private _destroyed = false;

  // tracking input type is necessary so it's possible to only auto-focus
  // the first item of the list when the popover is opened via the keyboard
  private _openedByMouse = false;

  private _onDestroy = new Subject<void>();

  /** References the popover instance that the trigger is associated with. */
  @Input('mdePopoverTriggerFor') popover: MdePopoverPanel;

  /** References the popover target instance that the trigger is associated with. */
  @Input('mdePopoverTargetAt') targetElement: MdeTarget;

  /** Position of the popover in the X axis */
  @Input('mdePopoverPositionX') positionX: MdePopoverPositionX;

  /** Position of the popover in the Y axis */
  @Input('mdePopoverPositionY') positionY: MdePopoverPositionY;

  /** Popover trigger event */
  @Input('mdePopoverTriggerOn') triggerEvent: MdePopoverTriggerEvent;

  /** Popover delay */
  @Input('mdePopoverEnterDelay') enterDelay: number;

  /** Popover delay */
  @Input('mdePopoverLeaveDelay') leaveDelay: number;

  /** Popover overlap trigger */
  @Input('mdePopoverOverlapTrigger') overlapTrigger: boolean;

  /** Popover target offset x */
  @Input('mdePopoverOffsetX') targetOffsetX: number;

  /** Popover target offset y */
  @Input('mdePopoverOffsetY') targetOffsetY: number;

  /** Popover arrow offset x */
  @Input('mdePopoverArrowOffsetX') arrowOffsetX: number;

  /** Popover arrow offset y */
  @Input('mdePopoverArrowOffsetY') arrowOffsetY: number;

  /** Popover arrow width */
  @Input('mdePopoverArrowWidth') arrowWidth: number;

  /** Popover arrow color */
  @Input('mdePopoverArrowColor') arrowColor: string;

  /** Popover container close on click */
  @Input('mdePopoverCloseOnClick') closeOnClick: boolean;

  /** Popover backdrop close on click */
  @Input('mdePopoverBackdropCloseOnClick') backdropCloseOnClick = true;

  /** Disables popover trigger */
  @Input('mdeDisablePopoverTrigger') disablePopoverTrigger = false;

  /** Popver container close on click of trigger, when trigger event is click */
  @Input('mdePopoverCloseOnClickTrigger') closeOnClickTrigger = true;

  /** Event emitted when the associated popover is opened. */
  @Output() opened = new EventEmitter<void>();

  /** Event emitted when the associated popover is closed. */
  @Output() closed = new EventEmitter<void>();

  private _overlay = inject(Overlay);
  _elementRef = inject(ElementRef);
  private _viewContainerRef = inject(ViewContainerRef);
  private _dir = inject(Directionality, { optional: true });
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private popoverService = inject(PopoverService);

  ngAfterViewInit() {
    this._checkPopover();
    this._setCurrentConfig();
    this._closeSubscription = this.popover.close
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => this.closePopover());
  }

  ngOnDestroy() {
    this.destroyPopover();
  }

  private _setCurrentConfig() {
    // Pass every provided value through, including 0. A truthy check dropped
    // documented numeric values such as a 0ms delay or a 0px offset.
    // Invalid positions throw from the popover setters.
    if (this.positionX != null) {
      this.popover.positionX = this.positionX;
    }

    if (this.positionY != null) {
      this.popover.positionY = this.positionY;
    }

    if (this.triggerEvent) {
      this.popover.triggerEvent = this.triggerEvent;
    }

    if (this.enterDelay != null) {
      this.popover.enterDelay = this.enterDelay;
    }

    if (this.leaveDelay != null) {
      this.popover.leaveDelay = this.leaveDelay;
    }

    if (this.overlapTrigger != null) {
      this.popover.overlapTrigger = this.overlapTrigger;
    }

    if (this.targetOffsetX != null) {
      this.popover.targetOffsetX = this.targetOffsetX;
    }

    if (this.targetOffsetY != null) {
      this.popover.targetOffsetY = this.targetOffsetY;
    }

    if (this.arrowOffsetX != null) {
      this.popover.arrowOffsetX = this.arrowOffsetX;
    }

    if (this.arrowOffsetY != null) {
      this.popover.arrowOffsetY = this.arrowOffsetY;
    }

    if (this.arrowWidth != null) {
      this.popover.arrowWidth = this.arrowWidth;
    }

    if (this.arrowColor) {
      this.popover.arrowColor = this.arrowColor;
    }

    if (this.closeOnClick != null) {
      this.popover.closeOnClick = this.closeOnClick;
    }
    // `mdePopoverTriggerOn` may live on the popover. Click handling already
    // reads popover.triggerEvent, and the trigger has to stay above a click
    // backdrop in the same case.
    if (
      !this.closeOnClickTrigger &&
      this.popover.triggerEvent === 'click' &&
      this.backdropCloseOnClick
    ) {
      this._elementRef.nativeElement.style.zIndex = '999999';
    }

    this.popover.setCurrentStyles();
  }

  /** Whether the popover is open. */
  get popoverOpen(): boolean {
    return this._popoverOpen;
  }

  @HostListener('click')
  onClick(): void {
    if (this.popover.triggerEvent === 'click') {
      if (this.closeOnClickTrigger) {
        this.togglePopover();
      } else if (!this._popoverOpen) {
        this.togglePopover();
      }
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this._halt = false;
    // Returning to the trigger cancels a close that was waiting on leaveDelay.
    this._clearTimer('_mouseleaveTimer');
    if (this.popover.triggerEvent === 'hover') {
      this._clearTimer('_mouseoverTimer');
      this._mouseoverTimer = setTimeout(() => {
        this._mouseoverTimer = null;
        // A hover open is a pointer open: closing it must not move focus onto this trigger
        // (with a shared popover that refocused the row the pointer had already left).
        if (!this._popoverOpen) {
          this._openedByMouse = true;
        }
        this.openPopover();
      }, this.popover.enterDelay);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.popover.triggerEvent === 'hover') {
      this._clearTimer('_mouseoverTimer');
      if (this._popoverOpen) {
        this._clearTimer('_mouseleaveTimer');
        this._mouseleaveTimer = setTimeout(() => {
          this._mouseleaveTimer = null;
          if (!this.popover.closeDisabled) {
            this.closePopover();
          }
        }, this.popover.leaveDelay);
      } else {
        this._halt = true;
      }
    }
  }

  /** Toggles the popover between the open and closed states. */
  togglePopover(): void {
    return this._popoverOpen ? this.closePopover() : this.openPopover();
  }

  /** Opens the popover. */
  openPopover(): void {
    if (!this._popoverOpen && !this._halt && !this.disablePopoverTrigger) {
      const overlayRef = this._createOverlay();
      // The popover may have last rendered on another side (for another trigger sharing it, or
      // after a flip). Its arrow styles change the panel height, and the overlay measures the
      // panel before it reports the new position, so start from the side this trigger asks for.
      if (this._targetPosition && this.popover._setRenderedPosition) {
        const target = this._renderedPositionOf(this._targetPosition);
        this.popover._setRenderedPosition(target.x, target.y);
      }
      overlayRef.attach(this._portal);

      this._subscribeToBackdrop();
      this._subscribeToDetachments();

      this._initPopover();
    }
  }

  /** Closes the popover. */
  closePopover(): void {
    if (this._overlayRef) {
      this._overlayRef.detach();
      this._resetPopover();
      if (!this.closeOnClickTrigger && this.popover.triggerEvent === 'click') {
        this._elementRef.nativeElement.blur();
      }
    }
  }

  /** Removes the popover from the DOM. */
  destroyPopover(): void {
    this._clearHoverTimers();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
    this._cleanUpSubscriptions();

    // ngOnDestroy also calls this, so a manual destroy must not complete twice.
    if (!this._destroyed) {
      this._destroyed = true;
      this._onDestroy.next();
      this._onDestroy.complete();
    }
  }

  private _clearTimer(
    field: '_mouseoverTimer' | '_mouseleaveTimer'
  ): void {
    const timer = this[field];
    if (timer) {
      clearTimeout(timer);
      this[field] = null;
    }
  }

  private _clearHoverTimers(): void {
    this._clearTimer('_mouseoverTimer');
    this._clearTimer('_mouseleaveTimer');
  }

  /** Focuses the popover trigger. */
  focus() {
    this._elementRef.nativeElement.focus();
  }

  /** The text direction of the containing app. */
  get dir(): Direction {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }

  /**
   * This method ensures that the popover closes when the overlay backdrop is clicked.
   * We do not use first() here because doing so would not catch clicks from within
   * the popover, and it would fail to unsubscribe properly. Instead, we unsubscribe
   * explicitly when the popover is closed or destroyed.
   */
  private _subscribeToBackdrop(): void {
    this._backdropSubscription?.unsubscribe();
    this._backdropSubscription = null;
    if (this._overlayRef) {
      /** Only subscribe to backdrop if trigger event is click */
      if (
        this.popover.triggerEvent === 'click' &&
        this.backdropCloseOnClick === true
      ) {
        this._backdropSubscription = this._overlayRef
          .backdropClick()
          .pipe(takeUntil(this.popoverClosed), takeUntil(this._onDestroy))
          .subscribe(() => {
            this.popover._emitCloseEvent();
          });
      }
    }
  }

  private _subscribeToDetachments(): void {
    this._detachmentsSubscription?.unsubscribe();
    this._detachmentsSubscription = null;
    if (this._overlayRef) {
      this._detachmentsSubscription = this._overlayRef
        .detachments()
        .pipe(takeUntil(this.popoverClosed), takeUntil(this._onDestroy))
        .subscribe(() => {
          this._setPopoverClosed();
        });
    }
  }

  /**
   * This method sets the popover state to open and focuses the first item if
   * the popover was opened via the keyboard.
   */
  private _initPopover(): void {
    this._setPopoverOpened();
  }

  /**
   * This method resets the popover when it's closed, most importantly restoring
   * focus to the popover trigger if the popover was opened via the keyboard.
   */
  private _resetPopover(): void {
    this._setPopoverClosed();

    // Focus only needs to be reset to the host element if the popover was opened
    // by the keyboard and manually shifted to the first popover item.
    // A "none" trigger is opened programmatically while focus stays on some other
    // element (an input inside or beside the host). Moving focus onto the host
    // pulls it away from that element.
    // Use the popover's event so `mdePopoverTriggerOn="none"` on the popover
    // (not only on the trigger) keeps focus on the field that opened it.
    if (!this._openedByMouse && this.popover.triggerEvent !== 'none') {
      this.focus();
    }
    this._openedByMouse = false;
  }

  /** set state rather than toggle to support triggers sharing a popover */
  private _setPopoverOpened(): void {
    if (!this._popoverOpen) {
      this._popoverOpen = true;

      this.popoverOpened.next();
      this.opened.emit();
    }
  }

  /** set state rather than toggle to support triggers sharing a popover */
  private _setPopoverClosed(): void {
    if (this._popoverOpen) {
      this._popoverOpen = false;

      this.popoverClosed.next();
      this.closed.emit();
    }
  }

  /**
   *  This method checks that a valid instance of MdPopover has been passed into
   *  mdPopoverTriggerFor. If not, an exception is thrown.
   */
  private _checkPopover() {
    if (!this.popover) {
      throwMdePopoverMissingError();
    }
  }

  /**
   *  This method creates the overlay from the provided popover's template and saves its
   *  OverlayRef so that it can be attached to the DOM when openPopover is called.
   */
  private _createOverlay(): OverlayRef {
    if (!this._overlayRef) {
      this._portal = new TemplatePortal(
        this.popover.templateRef,
        this._viewContainerRef
      );
      const config = this._getOverlayConfig();
      this._subscribeToPositions(
        config.positionStrategy as FlexibleConnectedPositionStrategy
      );
      this._overlayRef = this._overlay.create(config);
    }

    return this._overlayRef;
  }

  /**
   * This method builds the configuration object needed to create the overlay, the OverlayConfig.
   * @returns OverlayConfig
   */
  private _getOverlayConfig(): OverlayConfig {
    const overlayState = new OverlayConfig();
    overlayState.positionStrategy = this._getPositionStrategy();

    /**
     * Display overlay backdrop if the effective trigger event is click.
     * `mdePopoverTriggerOn` may be set on the popover rather than the trigger,
     * so the popover's triggerEvent is the value that click handling uses.
     */
    if (this.popover.triggerEvent === 'click') {
      overlayState.hasBackdrop = true;
      overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
      // Since CDK 21 overlays render in the browser top layer (native popover), which no
      // z-index can rise above. Keep this overlay in the regular stacking order when the
      // trigger has to stay clickable above the backdrop.
      if (!this.closeOnClickTrigger && this.backdropCloseOnClick) {
        overlayState.usePopover = false;
      }
    }

    overlayState.direction = this.dir;
    overlayState.scrollStrategy = this._getOverlayScrollStrategy(
      this.popover.scrollStrategy
    );

    return overlayState;
  }

  /**
   * This method returns the scroll strategy used by the cdk/overlay.
   */
  private _getOverlayScrollStrategy(
    strategy: MdePopoverScrollStrategy
  ): ScrollStrategy {
    switch (strategy) {
      case 'noop':
        return this._overlay.scrollStrategies.noop();
      case 'close':
        return this._overlay.scrollStrategies.close();
      case 'block':
        return this._overlay.scrollStrategies.block();
      case 'reposition':
      default:
        return this._overlay.scrollStrategies.reposition();
    }
  }

  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the popover based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  private _subscribeToPositions(
    position: FlexibleConnectedPositionStrategy
  ): void {
    this._positionSubscription = position.positionChanges.subscribe(
      (change) => {
        const { x: posisionX, y: posisionY } = this._renderedPositionOf(
          change.connectionPair
        );

        // required for ChangeDetectionStrategy.OnPush
        this._changeDetectorRef.markForCheck();

        this.popover.zone.run(() => {
          // Record the rendered position without overwriting the requested one. Writing it to
          // positionX/positionY made the next overlay built for this popover (another trigger
          // sharing it, or a re-created trigger) start from the flipped position.
          if (this.popover._setRenderedPosition) {
            this.popover._setRenderedPosition(posisionX, posisionY);
          } else {
            this.popover.positionX = posisionX;
            this.popover.positionY = posisionY;
            this.popover.setCurrentStyles();
            this.popover.setPositionClasses(posisionX, posisionY);
          }
        });
      }
    );
  }

  /** The popover position (arrow side without overlap) that a connection pair renders. */
  private _renderedPositionOf(pair: ConnectionPositionPair): {
    x: MdePopoverPositionX;
    y: MdePopoverPositionY;
  } {
    const x = this.popoverService.getHorizontalPopoverAlignment(pair.overlayX);
    let y = this.popoverService.getVerticalPopoverAlignment(pair.overlayY);
    if (!this.popover.overlapTrigger) {
      y = y === 'below' ? 'above' : y === 'above' ? 'below' : y;
    }
    return { x, y };
  }

  /**
   * This method builds the position strategy for the overlay, so the popover is properly connected
   * to the trigger.
   * @returns FlexibleConnectedPositionStrategy
   */
  private _getPositionStrategy(): FlexibleConnectedPositionStrategy {
    const requested = this.popover._requestedPosition;
    let posx = requested ? requested.x : this.popover.positionX;
    let posy = requested ? requested.y : this.popover.positionY;

    /** Reverse overlayY and fallbackOverlayY when overlapTrigger is false */
    if (!this.popover.overlapTrigger) {
      const nonOverlapPositions = this.popoverService.getNonOverlapPosition(
        posx,
        posy
      );
      posx = nonOverlapPositions.PositionX;
      posy = nonOverlapPositions.PositionY;
    }

    const targetPosition = this.popoverService.getPosition(posx, posy);
    this._targetPosition = targetPosition;
    const positions = [targetPosition];
    const fallbackPosition = this.popoverService.getFallbacks(posx, posy);
    positions.push(...fallbackPosition);

    let offsetX = 0;
    let offsetY = 0;

    if (
      this.popover.targetOffsetX &&
      !isNaN(Number(this.popover.targetOffsetX))
    ) {
      offsetX = Number(this.popover.targetOffsetX);
      // offsetX = -16;
    }

    if (
      this.popover.targetOffsetY &&
      !isNaN(Number(this.popover.targetOffsetY))
    ) {
      offsetY = Number(this.popover.targetOffsetY);
      // offsetY = -10;
    }

    // The offsets move the panel away from (or along) the trigger on the requested side. A
    // fallback on the opposite side (above instead of below, before instead of after) mirrors
    // them, so a gap stays a gap instead of pushing the flipped panel onto the trigger.
    for (const fallback of fallbackPosition) {
      const v = verticalSide(fallback);
      if (offsetY && v !== 0 && v === -verticalSide(targetPosition)) {
        fallback.offsetY = -offsetY;
      }
      const h = horizontalSide(fallback);
      if (offsetX && h !== 0 && h === -horizontalSide(targetPosition)) {
        fallback.offsetX = -offsetX;
      }
    }

    /**
     * For overriding position element, when mdePopoverTargetAt has a valid element reference.
     * Useful for sticking popover to parent element and offsetting arrow to trigger element.
     * If undefined defaults to the trigger element reference.
     */
    let element = this._elementRef;
    if (typeof this.targetElement !== 'undefined') {
      this.popover.containerPositioning = true;
      element = this.targetElement._elementRef;
    }

    return this._overlay
      .position()
      .flexibleConnectedTo(element)
      .withLockedPosition(true)
      .withPositions(positions)
      .withDefaultOffsetX(offsetX)
      .withDefaultOffsetY(offsetY);
  }

  private _cleanUpSubscriptions(): void {
    this._backdropSubscription?.unsubscribe();
    this._backdropSubscription = null;
    this._positionSubscription?.unsubscribe();
    this._positionSubscription = null;
    this._detachmentsSubscription?.unsubscribe();
    this._detachmentsSubscription = null;
    this._closeSubscription?.unsubscribe();
    this._closeSubscription = null;
  }

  @HostListener('mousedown', ['$event']) _handleMousedown(
    event: MouseEvent
  ): void {
    if (event && !isFakeMousedownFromScreenReader(event)) {
      this._openedByMouse = true;
    }
  }
}

/** 1 when the pair places the overlay below its origin, -1 above, 0 when they overlap vertically. */
function verticalSide(pair: ConnectionPositionPair): number {
  if (pair.originY === 'bottom' && pair.overlayY === 'top') {
    return 1;
  }
  return pair.originY === 'top' && pair.overlayY === 'bottom' ? -1 : 0;
}

/** 1 when the pair places the overlay after its origin, -1 before, 0 when they overlap. */
function horizontalSide(pair: ConnectionPositionPair): number {
  if (pair.originX === 'end' && pair.overlayX === 'start') {
    return 1;
  }
  return pair.originX === 'start' && pair.overlayX === 'end' ? -1 : 0;
}
