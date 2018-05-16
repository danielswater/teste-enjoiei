import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  private END_POINT = "http://localhost:3000/api/checkouts/";

  constructor(private http: HttpClient) { }

  public getCheckoutCouponId(id: any){
    return this.http.get(this.END_POINT + id).map(res => {
      return res;
    })
  }

  public postCheckoutCouponId(id: any){
    let body = JSON.stringify({ checkoutId: id });
    return this.http.post(this.END_POINT+id, body).map(res => {
      return res;
    });
  }

}
