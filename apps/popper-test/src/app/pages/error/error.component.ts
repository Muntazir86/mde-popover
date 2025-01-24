import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PageErrorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
