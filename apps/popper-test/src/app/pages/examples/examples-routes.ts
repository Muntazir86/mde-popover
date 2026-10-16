import { Routes } from '@angular/router';
import { PageExamplesComponent } from './examples.component';
import { PageExamplesFormComponent } from './form/form.component';
import { PageExamplesBuilderComponent } from './builder/builder.component';
import { PageErrorComponent } from '../error/error.component';

export const ExamplesRoutes: Routes = [
  {
    path: '',
    component: PageExamplesComponent,
    data: {
      meta: {
        title: 'Examples',
        description: '',
        themeColor: '#FFFFFF',
      },
    },
    children: [
      {
        path: '',
        component: PageExamplesComponent,
      },
      {
        path: 'form',
        component: PageExamplesFormComponent,
      },
      {
        path: 'builder',
        component: PageExamplesBuilderComponent,
      },
      {
        path: '**',
        component: PageErrorComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageErrorComponent,
  },
];
