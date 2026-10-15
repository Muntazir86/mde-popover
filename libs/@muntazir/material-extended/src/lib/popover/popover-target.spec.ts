import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { MdePopoverTarget } from './popover-target';

@Component({
  selector: 'mde-spec-target-host',
  imports: [MdePopoverTarget],
  template: `
    <mde-popover-target class="element-target" #element="mdePopoverTarget">
      Element
    </mde-popover-target>
    <div class="attr-target" mdePopoverTarget #attr="mdePopoverTarget">Attribute</div>
  `,
})
class TargetHost {}

describe('MdePopoverTarget', () => {
  let fixture: ComponentFixture<TargetHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetHost],
    }).compileComponents();
    fixture = TestBed.createComponent(TargetHost);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('anchors both the element selector and the attribute selector', () => {
    const targets = fixture.debugElement.queryAll(By.directive(MdePopoverTarget));
    const elementTarget = targets[0].injector.get(MdePopoverTarget);
    const attributeTarget = targets[1].injector.get(MdePopoverTarget);

    expect(elementTarget._elementRef.nativeElement.classList.contains('element-target')).toBe(
      true
    );
    expect(attributeTarget._elementRef.nativeElement.classList.contains('attr-target')).toBe(
      true
    );
    expect(elementTarget._elementRef.nativeElement.textContent).toContain('Element');
    expect(attributeTarget._elementRef.nativeElement.textContent).toContain('Attribute');
  });
});
