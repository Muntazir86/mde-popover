import { Component, HostBinding } from '@angular/core';

import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss'],
    imports: [MatButton, MatIcon]
})
export class GithubComponent {
  @HostBinding('class.mat-elevation-z4') elevation = true;
}
