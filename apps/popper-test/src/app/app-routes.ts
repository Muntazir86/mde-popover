import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      meta: {
        title: 'Home - Angular Popover Library',
        description: 'Angular Popover Library using the CDK.',
        themeColor: '#FFFFFF',
      },
    },
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./pages/examples/examples-routes').then((m) => m.ExamplesRoutes),
  },
  {
    path: '**',
    component: PageErrorComponent,
  },
];