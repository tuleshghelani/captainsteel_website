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
  },
  {
    path: 'products/corrugated-roofing-sheets',
    loadComponent: () => import('./pages/all-products/corrugated-roofing-sheets/corrugated-roofing-sheets.component').then(m => m.CorrugatedRoofingSheetsComponent)
  },
  {
    path: 'products/trapezoidal-profile-sheets',
    loadComponent: () => import('./pages/all-products/trapezoidal-profile-sheets/trapezoidal-profile-sheets.component').then(m => m.TrapezoidalProfileSheetsComponent)
  },
  {
    path: 'products/insulated-metal-sheets',
    loadComponent: () => import('./pages/all-products/insulated-metal-sheets/insulated-metal-sheets.component').then(m => m.InsulatedMetalSheetsComponent)
  },
  {
    path: 'products/crimping',
    loadComponent: () => import('./pages/all-products/crimping/crimping.component').then(m => m.CrimpingComponent)
  },
  {
    path: 'products/polycarbonate-sheet',
    loadComponent: () => import('./pages/all-products/polycarbonate-sheet/polycarbonate-sheet.component').then(m => m.PolycarbonateSheetComponent)
  },
  {
    path: 'products/roofing-accessories',
    loadComponent: () => import('./pages/all-products/roofing-accessories/roofing-accessories.component').then(m => m.RoofingAccessoriesComponent)
  },
  {
    path: 'clients',
    loadComponent: () => import('./pages/clients/clients.component').then(m => m.ClientsComponent)
  }
];
