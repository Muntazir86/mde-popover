import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MdePopoverModule } from 'projects/muntazir/material-extended/src/public-api';

import { AppRoutingModule } from './app-routing.module';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { ThemePickerComponent } from './shared/components/theme-picker/theme-picker.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { GithubComponent } from './shared/components/github/github.component';
import { SupportComponent } from './shared/components/support/support.component';
import { ErrorModule } from './pages/error/error.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';


@NgModule({ declarations: [
        AppComponent,
        ThemePickerComponent,
        NotificationsComponent,
        GithubComponent,
        SupportComponent,
        // MdePopoverTarget
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatListModule,
        MdePopoverModule,
        AppRoutingModule,
        PagesModule,
        ErrorModule
    ], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
