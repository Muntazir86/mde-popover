import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HomeComponent implements OnInit {
  constructor() {}

  triggerdisable = false;
  ngOnInit() {}

  toggleDisableBit() {
    this.triggerdisable = !this.triggerdisable;
  }
}
