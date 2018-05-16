import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsService } from './service/products.service';
import { appRoutes } from './checkout/router/router';
import { ProductComponent } from './produto/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    ProductComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [ProductComponent]
})
export class AppModule { }
