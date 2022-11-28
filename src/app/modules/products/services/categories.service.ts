import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(environment.BASEURL + '/products/categories');
  }

  filterCategory(category:any){
    return this.http.get(environment.BASEURL + '/products/category/' + category);
  }

}
