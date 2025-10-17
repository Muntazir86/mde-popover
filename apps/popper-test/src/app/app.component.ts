import { Component, HostBinding, inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatToolbar } from '@angular/material/toolbar';
import { MdePopoverModule } from '@muntazir/material-extended';
import { MatButton, MatIconButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ThemePickerComponent } from './shared/components/theme-picker/theme-picker.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { GithubComponent } from './shared/components/github/github.component';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { SupportComponent } from './shared/components/support/support.component';
import { RouterOutlet } from '@angular/router';

export const DEFAULT_THEME = 'indigo-pink-theme';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [MatToolbar, MdePopoverModule, MatButton, MatIconButton, MatIcon, ThemePickerComponent, NotificationsComponent, GithubComponent, MatCard, MatCardContent, MatCardActions, MatFabButton, SupportComponent, RouterOutlet]
})
export class AppComponent {
  @HostBinding('class') _themeClass: string = DEFAULT_THEME;
  private overlayContainer = inject(OverlayContainer);

  get themeClass() {
    return this._themeClass;
  }
  set themeClass(v) {
    if (v) {
      this.overlayContainer
        .getContainerElement()
        .classList.remove(this._themeClass);
      this.overlayContainer.getContainerElement().classList.add(v);
      this._themeClass = v;
    }
  }

  constructor() {
    this.overlayContainer.getContainerElement().classList.add(this.themeClass);
  }
}
