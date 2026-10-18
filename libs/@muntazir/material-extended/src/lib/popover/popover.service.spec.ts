import { ConnectionPositionPair } from '@angular/cdk/overlay';

import { PopoverService } from './popover.service';
import { MdePopoverPositionX, MdePopoverPositionY } from './popover-types';

function coords(pair: ConnectionPositionPair): string {
  return `${pair.originX}/${pair.originY} -> ${pair.overlayX}/${pair.overlayY}`;
}

describe('PopoverService', () => {
  const service = new PopoverService();

  describe('getPosition', () => {
    const cases: Array<{
      x: MdePopoverPositionX;
      y: MdePopoverPositionY;
      coords: string;
    }> = [
      { x: 'before', y: 'above', coords: 'start/top -> end/bottom' },
      { x: 'before', y: 'start', coords: 'start/top -> end/top' },
      { x: 'before', y: 'center', coords: 'start/center -> end/center' },
      { x: 'before', y: 'end', coords: 'start/bottom -> end/bottom' },
      { x: 'before', y: 'below', coords: 'start/bottom -> end/top' },
      { x: 'start', y: 'above', coords: 'start/top -> start/bottom' },
      { x: 'start', y: 'start', coords: 'start/top -> start/top' },
      { x: 'start', y: 'center', coords: 'start/center -> start/center' },
      { x: 'start', y: 'end', coords: 'start/bottom -> start/bottom' },
      { x: 'start', y: 'below', coords: 'start/bottom -> start/top' },
      { x: 'center', y: 'above', coords: 'center/top -> center/bottom' },
      { x: 'center', y: 'start', coords: 'center/top -> center/top' },
      { x: 'center', y: 'center', coords: 'center/center -> center/center' },
      { x: 'center', y: 'end', coords: 'center/bottom -> center/bottom' },
      { x: 'center', y: 'below', coords: 'center/bottom -> center/top' },
      { x: 'end', y: 'above', coords: 'end/top -> end/bottom' },
      { x: 'end', y: 'start', coords: 'end/top -> end/top' },
      { x: 'end', y: 'center', coords: 'end/center -> end/center' },
      { x: 'end', y: 'end', coords: 'end/bottom -> end/bottom' },
      { x: 'end', y: 'below', coords: 'end/bottom -> end/top' },
      { x: 'after', y: 'above', coords: 'end/top -> start/bottom' },
      { x: 'after', y: 'start', coords: 'end/top -> start/top' },
      { x: 'after', y: 'center', coords: 'end/center -> start/center' },
      { x: 'after', y: 'end', coords: 'end/bottom -> start/bottom' },
      { x: 'after', y: 'below', coords: 'end/bottom -> start/top' },
    ];

    for (const { x, y, coords: expected } of cases) {
      it(`maps ${x} / ${y} to ${expected}`, () => {
        expect(coords(service.getPosition(x, y))).toBe(expected);
      });
    }
  });

  describe('alignment helpers', () => {
    it('maps overlay horizontal positions back to popover positions', () => {
      expect(service.getHorizontalPopoverAlignment('start')).toBe('after');
      expect(service.getHorizontalPopoverAlignment('end')).toBe('before');
      expect(service.getHorizontalPopoverAlignment('center')).toBe('center');
    });

    it('maps overlay vertical positions back to popover positions', () => {
      expect(service.getVerticalPopoverAlignment('top')).toBe('below');
      expect(service.getVerticalPopoverAlignment('bottom')).toBe('above');
      expect(service.getVerticalPopoverAlignment('center')).toBe('center');
    });
  });

  describe('prioritizeAroundTarget', () => {
    it('keeps the target first and alternates outward', () => {
      expect(
        service.prioritizeAroundTarget('center', [
          'before',
          'start',
          'center',
          'end',
          'after',
        ])
      ).toEqual(['center', 'end', 'start', 'after', 'before']);
    });

    it('flushes the only non-empty side when the target is at an end', () => {
      expect(service.prioritizeAroundTarget('before', ['before', 'after'])).toEqual([
        'before',
        'after',
      ]);
      expect(service.prioritizeAroundTarget('after', ['before', 'after'])).toEqual([
        'after',
        'before',
      ]);
    });
  });

  describe('getNonOverlapPosition', () => {
    const cases: Array<{
      x: MdePopoverPositionX;
      y: MdePopoverPositionY;
      nextX: MdePopoverPositionX;
      nextY: MdePopoverPositionY;
    }> = [
      { x: 'start', y: 'center', nextX: 'before', nextY: 'center' },
      { x: 'start', y: 'start', nextX: 'start', nextY: 'above' },
      { x: 'start', y: 'end', nextX: 'start', nextY: 'below' },
      { x: 'start', y: 'above', nextX: 'start', nextY: 'above' },
      { x: 'start', y: 'below', nextX: 'start', nextY: 'below' },
      { x: 'end', y: 'center', nextX: 'after', nextY: 'center' },
      { x: 'end', y: 'start', nextX: 'end', nextY: 'above' },
      { x: 'end', y: 'end', nextX: 'end', nextY: 'below' },
      { x: 'end', y: 'below', nextX: 'end', nextY: 'below' },
      { x: 'center', y: 'start', nextX: 'center', nextY: 'above' },
      { x: 'center', y: 'center', nextX: 'center', nextY: 'above' },
      { x: 'center', y: 'end', nextX: 'center', nextY: 'below' },
      { x: 'center', y: 'above', nextX: 'center', nextY: 'above' },
      { x: 'center', y: 'below', nextX: 'center', nextY: 'below' },
      { x: 'before', y: 'below', nextX: 'before', nextY: 'below' },
      { x: 'after', y: 'above', nextX: 'after', nextY: 'above' },
    ];

    for (const { x, y, nextX, nextY } of cases) {
      it(`moves ${x} / ${y} to ${nextX} / ${nextY} when overlap is not allowed`, () => {
        expect(service.getNonOverlapPosition(x, y)).toEqual({
          PositionX: nextX,
          PositionY: nextY,
        });
      });
    }
  });

  describe('getFallbacks', () => {
    it('drops the requested position and keeps the remaining non-overlapping corners', () => {
      const fallbacks = service.getFallbacks('before', 'above');

      expect(fallbacks.map(coords)).toEqual([
        coords(service.getPosition('before', 'below')),
        coords(service.getPosition('after', 'above')),
        coords(service.getPosition('after', 'below')),
      ]);
    });

    it('builds overlapping fallbacks around the center, starting beside the target', () => {
      const fallbacks = service.getFallbacks('center', 'center');

      expect(fallbacks.length).toBe(24);
      expect(coords(fallbacks[0])).toBe(coords(service.getPosition('center', 'end')));
      expect(fallbacks.map(coords)).not.toContain(
        coords(service.getPosition('center', 'center'))
      );
    });

    it('limits a side-aligned target to before/after and above/below', () => {
      const fallbacks = service.getFallbacks('after', 'below');

      expect(fallbacks.map(coords)).toEqual([
        coords(service.getPosition('after', 'above')),
        coords(service.getPosition('before', 'below')),
        coords(service.getPosition('before', 'above')),
      ]);
    });
  });
});
