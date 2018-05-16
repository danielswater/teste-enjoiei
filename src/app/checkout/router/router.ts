import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CheckoutComponent } from './../checkout.component';
import { ProductComponent } from './../../produto/product.component';

export const appRoutes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'produto/:productId/checkout/:checkoutId' , component: CheckoutComponent }
]