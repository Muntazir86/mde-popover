import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'page-examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.scss'],
    imports: [RouterOutlet]
})
export class PageExamplesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
