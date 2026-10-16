import { describe, expect, it } from 'vitest';

import { transformPopover } from './popover-animations';
import * as popoverIndex from './index';
import * as popoverPublicApi from './public-api';
import * as libraryPublicApi from '../../public-api';

describe('popover animations and public barrels', () => {
  it('keeps the deprecated transform trigger available', () => {
    expect(transformPopover.name).toBe('transformPopover');
    expect(transformPopover.definitions.length).toBeGreaterThan(0);
  });

  it('re-exports the popover API from the library and folder barrels', () => {
    expect(libraryPublicApi.MdePopover).toBe(popoverPublicApi.MdePopover);
    expect(popoverIndex.MdePopoverTrigger).toBe(libraryPublicApi.MdePopoverTrigger);
    expect(popoverIndex.MdePopoverModule).toBe(libraryPublicApi.MdePopoverModule);
    expect(popoverPublicApi.transformPopover.name).toBe('transformPopover');
    expect(libraryPublicApi.MdePopoverTarget).toBe(popoverIndex.MdePopoverTarget);
  });
});
