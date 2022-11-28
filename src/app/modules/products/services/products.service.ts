import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(environment.BASEURL+ '/products');

  } // get all products

  getProduct(id:number){
    return this.http.get(environment.BASEURL + '/products/' + id)
  }
}
