import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.routes').then((m) => m.mainRoutes),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
