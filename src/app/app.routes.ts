import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'practice',
    loadComponent: () => import('./practice/practice.page').then((m) => m.PracticePage),
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.page').then((m) => m.HistoryPage),
  },
  {
    path: 'charts',
    loadComponent: () => import('./charts/charts.page').then((m) => m.ChartsPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];