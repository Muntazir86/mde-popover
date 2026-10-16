import { describe, expect, it } from 'vitest';

import {
  throwMdePopoverInvalidPositionX,
  throwMdePopoverInvalidPositionY,
  throwMdePopoverMissingError,
} from './popover-errors';

describe('popover errors', () => {
  it('explains a missing popover reference', () => {
    expect(throwMdePopoverMissingError).toThrow(
      /mde-popover-trigger: must pass in an mde-popover instance/
    );
    expect(throwMdePopoverMissingError).toThrow(/mdePopoverTriggerFor/);
  });

  it('explains an invalid horizontal position', () => {
    expect(throwMdePopoverInvalidPositionX).toThrow(
      /mdePopoverPositionX value must be 'before', 'after', 'start', 'end' or 'center'/
    );
  });

  it('explains an invalid vertical position', () => {
    expect(throwMdePopoverInvalidPositionY).toThrow(
      /mdePopoverPositionY value must be 'above', 'below', 'start', 'end' or 'center'/
    );
  });
});
