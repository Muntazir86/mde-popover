import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MdePopoverModule } from '@muntazir/material-extended';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle } from '@angular/material/card';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
    imports: [MatIcon, MdePopoverModule, MatFormField, MatInput, MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle]
})
export class SupportComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
