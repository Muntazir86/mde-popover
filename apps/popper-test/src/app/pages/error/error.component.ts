import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-page-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageErrorComponent {}
