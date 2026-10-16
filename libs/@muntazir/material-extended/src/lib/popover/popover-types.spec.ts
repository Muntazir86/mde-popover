import { describe, expect, it } from 'vitest';

import { VALID_PositionX, VALID_PositionY } from './popover-types';

describe('popover position constants', () => {
  it('lists the documented horizontal positions', () => {
    expect(VALID_PositionX).toEqual(['before', 'start', 'center', 'end', 'after']);
  });

  it('lists the documented vertical positions', () => {
    expect(VALID_PositionY).toEqual(['above', 'start', 'center', 'end', 'below']);
  });
});
