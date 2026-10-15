import { NgModule } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';

import { MdePopover } from './popover';
import { MdePopoverTrigger } from './popover-trigger';
import { MdePopoverTarget } from './popover-target';
import { PopoverService } from './popover.service';

@NgModule({
  imports: [OverlayModule, MdePopover, MdePopoverTrigger, MdePopoverTarget],
  exports: [MdePopover, MdePopoverTrigger, MdePopoverTarget],
  providers: [PopoverService],
})
export class MdePopoverModule {}
