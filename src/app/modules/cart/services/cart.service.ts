import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
   }

   newOrder(order:any){
    return this.http.post(environment.BASEURL + '/carts', order);
  }
}
