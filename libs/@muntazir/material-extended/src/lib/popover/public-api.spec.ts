import { describe, expect, it } from 'vitest';

import * as popoverIndex from './index';
import * as popoverPublicApi from './public-api';
import * as libraryPublicApi from '../../public-api';

describe('public barrels', () => {
  it('re-exports the popover API from the library and folder barrels', () => {
    expect(libraryPublicApi.MdePopover).toBe(popoverPublicApi.MdePopover);
    expect(popoverIndex.MdePopoverTrigger).toBe(libraryPublicApi.MdePopoverTrigger);
    expect(popoverIndex.MdePopoverModule).toBe(libraryPublicApi.MdePopoverModule);
    expect(libraryPublicApi.MdePopoverTarget).toBe(popoverIndex.MdePopoverTarget);
  });

  it('no longer exports the removed transformPopover trigger', () => {
    expect('transformPopover' in libraryPublicApi).toBe(false);
    expect('transformPopover' in popoverPublicApi).toBe(false);
  });
});
