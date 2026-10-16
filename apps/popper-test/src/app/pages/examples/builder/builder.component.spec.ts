import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  LIBRARY_DEFAULTS,
  PageExamplesBuilderComponent,
  PLAYGROUND_DEFAULTS,
} from './builder.component';

describe('PageExamplesBuilderComponent', () => {
  let component: PageExamplesBuilderComponent;
  let fixture: ComponentFixture<PageExamplesBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageExamplesBuilderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PageExamplesBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the playground heading', () => {
    const heading = fixture.nativeElement.querySelector('[data-testid="builder-heading"]');
    expect(heading.textContent).toContain('Popover playground');
  });

  it('labels the trigger by mode', () => {
    expect(component.triggerLabel).toBe('Click me');
    component.config.triggerOn = 'hover';
    expect(component.triggerLabel).toBe('Hover me');
    component.config.triggerOn = 'none';
    expect(component.triggerLabel).toBe('Manual (none)');
    component.config.disableTrigger = true;
    expect(component.triggerLabel).toBe('Disabled');
  });

  it('only lists inputs that differ from the library defaults', () => {
    expect(component.changedInputs).toEqual([
      'mdePopoverTriggerOn',
      'mdePopoverPositionX',
      'mdePopoverOverlapTrigger',
    ]);
    expect(component.snippet).toContain('mdePopoverTriggerOn="click"');
    expect(component.snippet).toContain('[mdePopoverOverlapTrigger]="false"');
    expect(component.snippet).not.toContain('mdePopoverPositionY');
  });

  it('updates the snippet for popover and trigger inputs', () => {
    component.config.positionY = 'above';
    component.config.enterDelay = 0;
    component.config.backdropCloseOnClick = false;
    expect(component.snippet).toContain('mdePopoverPositionY="above"');
    expect(component.snippet).toContain('[mdePopoverEnterDelay]="0"');
    expect(component.snippet).toMatch(
      /<button[^>]*\[mdePopoverBackdropCloseOnClick\]="false"/
    );
  });

  it('reset restores playground defaults', () => {
    component.config.closeOnClick = false;
    component.align = 'end';
    component.reset();
    expect(component.config).toEqual(PLAYGROUND_DEFAULTS);
    expect(component.align).toBe('center');
  });

  it('shows the arrow only for a centered axis without overlap', () => {
    expect(component.arrowVisible).toBe(true);
    component.config.positionX = 'after';
    expect(component.arrowVisible).toBe(false);
    component.config.positionY = 'start';
    expect(component.arrowVisible).toBe(false);
    component.config.positionY = 'center';
    expect(component.arrowVisible).toBe(true);
    component.config.overlapTrigger = true;
    expect(component.arrowVisible).toBe(false);
  });

  it('only enables closeOnClickTrigger where it has an effect', () => {
    expect(component.closeOnClickTriggerApplies).toBe(true);
    component.config.backdropCloseOnClick = false;
    expect(component.closeOnClickTriggerApplies).toBe(false);
    component.config.backdropCloseOnClick = true;
    component.config.triggerOn = 'hover';
    expect(component.closeOnClickTriggerApplies).toBe(false);
  });

  it('starts from the library defaults except for click, center and no overlap', () => {
    expect({ ...PLAYGROUND_DEFAULTS, triggerOn: 'hover', positionX: 'after', overlapTrigger: true }).toEqual(
      LIBRARY_DEFAULTS
    );
  });
});
