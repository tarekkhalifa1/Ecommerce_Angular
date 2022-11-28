import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ]
})
export class ProductsModule { }
