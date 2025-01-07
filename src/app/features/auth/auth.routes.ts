import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('@features/auth').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('@features/auth').then( m => m.RegisterPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];