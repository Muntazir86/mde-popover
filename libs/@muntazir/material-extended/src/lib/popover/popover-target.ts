import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: 'mde-popover-target, [mdePopoverTarget]',
    exportAs: 'mdePopoverTarget',
    standalone: false
})
export class MdePopoverTarget {
  // tslint:disable-line:directive-class-suffix
  _elementRef = inject(ElementRef);

}
