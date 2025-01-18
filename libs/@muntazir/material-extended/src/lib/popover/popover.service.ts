import { Injectable } from '@angular/core';
import { MdePopoverPositionX, MdePopoverPositionY } from './popover-types';
import {
  ConnectionPositionPair,
  HorizontalConnectionPos,
  VerticalConnectionPos,
} from '@angular/cdk/overlay';

@Injectable()
export class PopoverService {
  constructor() {}

  /** Get fallback positions based around target alignments. */
  getFallbacks(
    hTarget: MdePopoverPositionX,
    vTarget: MdePopoverPositionY
  ): ConnectionPositionPair[] {
    // Determine if the target alignments overlap the anchor
    const horizontalOverlapAllowed =
      hTarget !== 'before' && hTarget !== 'after';
    const verticalOverlapAllowed = vTarget !== 'above' && vTarget !== 'below';

    // If a target alignment doesn't cover the anchor, don't let any of the fallback alignments
    // cover the anchor
    const possibleHorizontalAlignments: MdePopoverPositionX[] =
      horizontalOverlapAllowed
        ? ['before', 'start', 'center', 'end', 'after']
        : ['before', 'after'];
    const possibleVerticalAlignments: MdePopoverPositionY[] =
      verticalOverlapAllowed
        ? ['above', 'start', 'center', 'end', 'below']
        : ['above', 'below'];

    // Create fallbacks for each allowed prioritized fallback alignment combo
    const fallbacks: ConnectionPositionPair[] = [];
    this.prioritizeAroundTarget(hTarget, possibleHorizontalAlignments).forEach(
      (h) => {
        this.prioritizeAroundTarget(
          vTarget,
          possibleVerticalAlignments
        ).forEach((v) => {
          fallbacks.push(this.getPosition(h, v));
        });
      }
    );

    // Remove the first item since it will be the target alignment and isn't considered a fallback
    return fallbacks.slice(1, fallbacks.length);
  }

  getPosition(xPosition: MdePopoverPositionX, yPosition: MdePopoverPositionY) {
    const { originX, overlayX } =
      this.getHorizontalConnectionPosPair(xPosition);
    const { originY, overlayY } = this.getVerticalConnectionPosPair(yPosition);
    return new ConnectionPositionPair(
      { originX, originY },
      { overlayX, overlayY }
    );
  }

  /** Helper function to convert an overlay connection position to equivalent popover alignment. */
  getHorizontalPopoverAlignment(
    h: HorizontalConnectionPos
  ): MdePopoverPositionX {
    if (h === 'start') {
      return 'after';
    }

    if (h === 'end') {
      return 'before';
    }

    return 'center';
  }

  /** Helper function to convert an overlay connection position to equivalent popover alignment. */
  getVerticalPopoverAlignment(v: VerticalConnectionPos): MdePopoverPositionY {
    if (v === 'top') {
      return 'below';
    }

    if (v === 'bottom') {
      return 'above';
    }

    return 'center';
  }

  /** Helper function to convert alignment to origin/overlay position pair. */
  getHorizontalConnectionPosPair(h: MdePopoverPositionX): {
    originX: HorizontalConnectionPos;
    overlayX: HorizontalConnectionPos;
  } {
    switch (h) {
      case 'before':
        return { originX: 'start', overlayX: 'end' };
      case 'start':
        return { originX: 'start', overlayX: 'start' };
      case 'end':
        return { originX: 'end', overlayX: 'end' };
      case 'after':
        return { originX: 'end', overlayX: 'start' };
      default:
        return { originX: 'center', overlayX: 'center' };
    }
  }

  getVerticalConnectionPosPair(v: MdePopoverPositionY): {
    originY: VerticalConnectionPos;
    overlayY: VerticalConnectionPos;
  } {
    switch (v) {
      case 'above':
        return { originY: 'top', overlayY: 'bottom' };
      case 'start':
        return { originY: 'top', overlayY: 'top' };
      case 'end':
        return { originY: 'bottom', overlayY: 'bottom' };
      case 'below':
        return { originY: 'bottom', overlayY: 'top' };
      default:
        return { originY: 'center', overlayY: 'center' };
    }
  }

  prioritizeAroundTarget<T>(target: T, options: T[]): T[] {
    const targetIndex = options.indexOf(target);

    // Set the first item to be the target
    const reordered = [target];

    // Make left and right stacks where the highest priority item is last
    const left = options.slice(0, targetIndex);
    const right = options.slice(targetIndex + 1, options.length).reverse();

    // Alternate between stacks until one is empty
    while (left.length && right.length) {
      reordered.push(right.pop());
      reordered.push(left.pop());
    }

    // Flush out right side
    while (right.length) {
      reordered.push(right.pop());
    }

    // Flush out left side
    while (left.length) {
      reordered.push(left.pop());
    }

    return reordered;
  }

  getNonOverlapPosition(
    posx: MdePopoverPositionX,
    posy: MdePopoverPositionY
  ): { PositionX: MdePopoverPositionX; PositionY: MdePopoverPositionY } {
    let positionX = posx;
    let positionY = posy;
    switch (posx) {
      case 'start':
        positionX = posy === 'center' ? 'before' : posx;
        positionY =
          posy === 'start' ? 'above' : posy === 'end' ? 'below' : posy;
        break;
      case 'end':
        positionX = posy === 'center' ? 'after' : posx;
        positionY =
          posy === 'start' ? 'above' : posy === 'end' ? 'below' : posy;
        break;
      case 'center':
        positionY =
          posy === 'start' || posy === 'center'
            ? 'above'
            : posy === 'end'
            ? 'below'
            : posy;
        break;
    }
    return { PositionX: positionX, PositionY: positionY };
  }
}
