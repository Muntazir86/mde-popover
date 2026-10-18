import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageExamplesListComponent, PRODUCTS } from './list.component';

describe('PageExamplesListComponent', () => {
  let component: PageExamplesListComponent;
  let fixture: ComponentFixture<PageExamplesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageExamplesListComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PageExamplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders all 20 products', () => {
    expect(PRODUCTS.length).toBe(20);
    expect(fixture.nativeElement.querySelectorAll('[data-testid^="list-item-"]').length).toBe(20);
  });

  it('filters by category and resets', () => {
    component.setCategory('Audio');
    fixture.detectChanges();
    expect(component.visible.every((p) => p.category === 'Audio')).toBe(true);
    expect(fixture.nativeElement.querySelectorAll('[data-testid^="list-item-"]').length).toBe(5);
    component.reset();
    expect(component.visible.length).toBe(20);
  });

  it('shuffles to a different order with the same products', () => {
    const before = component.products.map((p) => p.id);
    component.shuffle();
    const after = component.products.map((p) => p.id);
    expect(after).not.toEqual(before);
    expect([...after].sort((a, b) => a - b)).toEqual(before);
  });

  it('turns the gap into a downward or upward offset', () => {
    component.gap = 12;
    expect(component.offsetY).toBe(12);
    component.positionY = 'above';
    expect(component.offsetY).toBe(-12);
    expect(component.layoutKey).toBe('above:-12');
  });
});
