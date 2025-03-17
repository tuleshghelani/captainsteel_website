import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'catalogue',
    loadComponent: () => import('./pages/catalogue/catalogue.component').then(m => m.CatalogueComponent)
  },
  {
    path: 'products/air-ventilator',
    loadComponent: () => import('./pages/all-products/air-ventilator/air-ventilator.component').then(m => m.AirVentilatorComponent)
  }
  // ... other routes
];
