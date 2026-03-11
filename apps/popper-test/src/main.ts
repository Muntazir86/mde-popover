import { provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app-routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideZoneChangeDetection(),
        provideRouter(routes, withHashLocation()),
        provideHttpClient(),
    ]
}).catch((err) => console.error(err));
