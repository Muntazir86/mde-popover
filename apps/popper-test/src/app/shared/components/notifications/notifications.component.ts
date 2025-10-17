import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    imports: [MatCard, MatTabGroup, MatTab]
})
export class NotificationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
