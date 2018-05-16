import { Http } from '@angular/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from './../service/products.service';
import { ProductsModel } from '../models/products.model';
import { CheckoutModel } from '../models/checkout.model';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  private checkout = new CheckoutModel()
  private product = new ProductsModel();
  private selected: any;
  private alert: boolean = false;
  public saveUsername: boolean;
  private value: any

  private modalConfirm: BsModalRef;
  private modalCancel: BsModalRef;
  
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService) { }

  ngOnInit() {
    this.getParams()
  }

  private getParams(){
    this.route.params.subscribe( params =>  {
      this.productService.getCheckoutCouponId(params.checkoutId).subscribe(res => {
        this.checkout = res['checkout'];
        this.product = res['product'];
      })
    });
  }

  private changeCoupon(item){
    this.alert = false;
    if(item !== null){
      this.productService.getCheckoutCouponId(item.id).subscribe(res => {
        this.checkout = res['checkout'];
        this.product = res['product'];
      })
    }
    else{
      this.getParams();
    }
  }

  private openModalConfirm(template: TemplateRef<any>) {
    if(this.selected === undefined){
      this.alert = true;
      return
    }
    else{
      this.productService.postCheckoutCouponId(this.selected).subscribe(res => {
        if(res['status'] == 'success'){
          this.modalService.show(template, {class: 'modal-sm'});
        }
      })
    }
    
  }

  private openModalCancel(template: TemplateRef<any>) {
    this.modalService.show(template, {class: 'modal-sm'});
  }
}

