import { Component, inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
  private _themeClass: string = DEFAULT_THEME;
  private overlayContainer = inject(OverlayContainer);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  get themeClass() {
    return this._themeClass;
  }
  set themeClass(v) {
    if (v) {
      // Remove old theme class from body
      this.renderer.removeClass(this.document.body, this._themeClass);
      // Remove old theme class from overlay container
      this.overlayContainer
        .getContainerElement()
        .classList.remove(this._themeClass);
      
      // Add new theme class to body
      this.renderer.addClass(this.document.body, v);
      // Add new theme class to overlay container
      this.overlayContainer.getContainerElement().classList.add(v);
      
      this._themeClass = v;
    }
  }

  constructor() {
    // Apply initial theme to body and overlay container
    this.renderer.addClass(this.document.body, this.themeClass);
    this.overlayContainer.getContainerElement().classList.add(this.themeClass);
  }
}
