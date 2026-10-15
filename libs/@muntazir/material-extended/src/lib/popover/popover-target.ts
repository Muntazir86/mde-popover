import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: 'mde-popover-target, [mdePopoverTarget]',
    exportAs: 'mdePopoverTarget',
})
export class MdePopoverTarget {
  _elementRef = inject(ElementRef);
}
