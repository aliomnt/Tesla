import { Routes } from '@angular/router';
import { step3Guard } from './Guards/step3.guard';
import { step2Guard } from './Guards/step2.guard';

export const routes: Routes = [
  {
    path: 'Step-1',
    loadComponent: () =>
      import('./Pages/step1/step1.component').then((mod) => mod.Step1Component),
  },
  {
    path: 'Step-2',
    loadComponent: () =>
      import('./Pages/step2/step2.component').then((mod) => mod.Step2Component),
    canActivate: [step2Guard],
  },
  {
    path: 'Step-3',
    loadComponent: () =>
      import('./Pages/step3/step3.component').then((mod) => mod.Step3Component),
    canActivate: [step3Guard],
  },
  { path: '**', redirectTo: 'Step-1' },
];
