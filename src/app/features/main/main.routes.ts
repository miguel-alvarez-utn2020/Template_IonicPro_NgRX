import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    {
      path: 'home',
      loadComponent: () => import('@features/main').then((m) => m.HomePage),
    },
    {
      path: 'dashboard',
      loadComponent: () => import('@features/main').then( m => m.DashboardPage)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
  ];