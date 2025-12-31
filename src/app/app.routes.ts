import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./products/products-routes').then(r => r.PRODUCT_ROUTS) },
  { path: 'cart', loadComponent: () => import('./cart/cart/cart.component').then(c => c.CartComponent) }
]
