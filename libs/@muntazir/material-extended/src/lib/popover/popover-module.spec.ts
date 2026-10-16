import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { MdePopover } from './popover';
import { MdePopoverModule } from './popover-module';
import { MdePopoverTarget } from './popover-target';
import { MdePopoverTrigger } from './popover-trigger';
import { PopoverService } from './popover.service';

@Component({
  selector: 'mde-spec-module-host',
  imports: [MdePopoverModule],
  template: `
    <mde-popover #popover="mdePopover">Content</mde-popover>
    <button type="button" [mdePopoverTriggerFor]="popover" #trigger="mdePopoverTrigger">
      Open
    </button>
    <mde-popover-target #target="mdePopoverTarget">Target</mde-popover-target>
  `,
})
class ModuleHost {}

@NgModule({
  imports: [MdePopoverModule],
  exports: [MdePopoverModule],
})
class ConsumerModule {}

describe('MdePopoverModule', () => {
  let fixture: ComponentFixture<ModuleHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleHost, ConsumerModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ModuleHost);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('exports the popover, trigger, and target for a consuming module', () => {
    expect(fixture.debugElement.query(By.directive(MdePopover)).componentInstance).toBeInstanceOf(
      MdePopover
    );
    expect(
      fixture.debugElement.query(By.directive(MdePopoverTrigger)).injector.get(MdePopoverTrigger)
    ).toBeInstanceOf(MdePopoverTrigger);
    expect(
      fixture.debugElement.query(By.directive(MdePopoverTarget)).injector.get(MdePopoverTarget)
    ).toBeInstanceOf(MdePopoverTarget);
    expect(TestBed.inject(PopoverService)).toBeInstanceOf(PopoverService);
  });
});
