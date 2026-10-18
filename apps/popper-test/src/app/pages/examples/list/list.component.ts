import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdePopoverModule, MdePopoverPositionY } from '@muntazir/material-extended';
import { MatButton } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

export type ProductCategory = 'Audio' | 'Wearables' | 'Home' | 'Office';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  rating: number;
  stock: number;
  sku: string;
  color: string;
  blurb: string;
}

export const CATEGORIES: ProductCategory[] = ['Audio', 'Wearables', 'Home', 'Office'];

const NAMES: [string, ProductCategory, string][] = [
  ['Aurora Headphones', 'Audio', 'Over-ear, 40 h battery, active noise cancelling.'],
  ['Pulse Earbuds', 'Audio', 'Sweat-proof buds with a pocket-sized charging case.'],
  ['Echo Bookshelf Speaker', 'Audio', 'Warm wooden cabinet with Bluetooth and line-in.'],
  ['Nova Soundbar', 'Audio', 'Slim 3.1 soundbar with a wireless subwoofer.'],
  ['Drift Turntable', 'Audio', 'Belt-drive turntable with a built-in preamp.'],
  ['Orbit Smartwatch', 'Wearables', 'Always-on display, GPS and a 7-day battery.'],
  ['Stride Fitness Band', 'Wearables', 'Heart rate, sleep and step tracking.'],
  ['Halo Smart Ring', 'Wearables', 'Titanium ring that tracks recovery and sleep.'],
  ['Trail Sports Watch', 'Wearables', 'Barometer, compass and offline maps.'],
  ['Lumen Desk Lamp', 'Home', 'Dimmable LED lamp with a warm-to-cool range.'],
  ['Breeze Air Purifier', 'Home', 'HEPA filter for rooms up to 40 m².'],
  ['Kettle Pro', 'Home', 'Variable temperature kettle with keep-warm.'],
  ['Nest Thermostat Mini', 'Home', 'Learns your schedule and saves energy.'],
  ['Brew Coffee Grinder', 'Home', 'Conical burr grinder with 40 settings.'],
  ['Glow Night Light', 'Home', 'Motion-activated light for hallways.'],
  ['Atlas Standing Desk', 'Office', 'Dual-motor desk with four memory presets.'],
  ['Flow Ergonomic Chair', 'Office', 'Mesh back, adjustable lumbar support.'],
  ['Key Mechanical Keyboard', 'Office', 'Hot-swappable switches, aluminium case.'],
  ['Glide Wireless Mouse', 'Office', 'Silent clicks and a 70-day battery.'],
  ['Dock USB-C Hub', 'Office', 'Nine ports with 100 W pass-through charging.'],
];

const COLORS = ['#5c6bc0', '#26a69a', '#ef6c00', '#8e24aa', '#00897b', '#c2185b', '#3949ab', '#6d4c41'];

export const PRODUCTS: Product[] = NAMES.map(([name, category, blurb], i) => ({
  id: i + 1,
  name,
  category,
  blurb,
  price: Math.round((19 + ((i * 37) % 280)) * 100 - 1) / 100,
  rating: 3 + ((i * 7) % 20) / 10,
  stock: (i * 13) % 4 === 0 ? 0 : 3 + ((i * 11) % 40),
  sku: `MDE-${String(1000 + i * 17)}`,
  color: COLORS[i % COLORS.length],
}));

/**
 * A product list where every row opens the SAME hover popover. Sharing one popover between many
 * triggers, and re-creating triggers when the list is filtered or re-laid-out, is the case that
 * used to make a non-overlapping popover flip to the other side of its trigger.
 */
@Component({
  selector: 'app-page-examples-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    FormsModule,
    MdePopoverModule,
    MatButton,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatCard,
    MatCardContent,
    MatChipListbox,
    MatChipOption,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatInput,
  ],
})
export class PageExamplesListComponent {
  readonly categories = CATEGORIES;
  readonly enterDelay = 150;
  readonly leaveDelay = 100;

  products: Product[] = [...PRODUCTS];
  category: ProductCategory | 'All' = 'All';
  positionY: MdePopoverPositionY = 'below';
  /** Distance between the row and the panel, in px. */
  gap = 8;
  active: Product | null = null;

  get visible(): Product[] {
    return this.category === 'All'
      ? this.products
      : this.products.filter((p) => p.category === this.category);
  }

  /** mdePopoverOffsetY moves the panel down, so a gap above the row is a negative offset. */
  get offsetY(): number {
    const gap = Number(this.gap) || 0;
    return this.positionY === 'above' ? -gap : gap;
  }

  /**
   * A trigger builds its overlay once, so a position or gap change re-creates every row's trigger.
   * That is also the re-creation case the regression tests cover.
   */
  get layoutKey(): string {
    return `${this.positionY}:${this.offsetY}`;
  }

  setCategory(category: ProductCategory | 'All'): void {
    this.category = category ?? 'All';
  }

  shuffle(): void {
    const next = [...this.products];
    // Deterministic rotation plus swap so every shuffle changes the order.
    next.push(...next.splice(0, 7));
    for (let i = 0; i + 1 < next.length; i += 3) {
      [next[i], next[i + 1]] = [next[i + 1], next[i]];
    }
    this.products = next;
  }

  reset(): void {
    this.products = [...PRODUCTS];
    this.category = 'All';
    this.positionY = 'below';
    this.gap = 8;
  }

  stars(rating: number): string {
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }
}
