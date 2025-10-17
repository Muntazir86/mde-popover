import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MdePopoverModule } from '@muntazir/material-extended';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'page-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButton, MdePopoverModule, RouterLink, MatCard, MatCardContent, MatCardActions]
})
export class HomeComponent implements OnInit {
  constructor() {}

  triggerdisable = false;
  ngOnInit() {}

  toggleDisableBit() {
    this.triggerdisable = !this.triggerdisable;
  }
}
