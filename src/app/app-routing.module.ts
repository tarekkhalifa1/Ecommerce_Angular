import { CartComponent } from './modules/cart/components/cart/cart.component';
import { ProductDetailsComponent } from './modules/products/components/product-details/product-details.component';
import { AllProductsComponent } from './modules/products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "products", component:AllProductsComponent},
  {path: "products/:id", component:ProductDetailsComponent},
  {path: "cart", component: CartComponent},
  {path: "**", redirectTo: "products"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
