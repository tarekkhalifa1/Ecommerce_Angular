import { CategoriesService } from './../../services/categories.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any;
  categories: any;
  isLoading = false;
  cartProducts:any = [];
  constructor(
    private pageTitle: Title,
    private productService: ProductsService,
    private categoryService: CategoriesService) {
      pageTitle.setTitle('All Products')
     }

  ngOnInit(): void {
    this.getAllCategories();
    this.getProducts();
  } // end ngoninit

  getProducts() {
    this.isLoading = true;
    this.productService.getAll().subscribe(
      (data) => {
        this.products = data;
        this.isLoading = false;
      }, (err) => {
        console.log(err);
        this.isLoading = false;
      });
  } // end get products


  getAllCategories() {
    this.isLoading = true;
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
      this.isLoading = false;
    },
      (err) => {
        console.log(err);
      })

  } // end get all categories

  filterCategory(event: any) {
    let selected = event.target.value;
    (selected == 'all') ? this.getProducts() : this.getSpecificCategory(selected);
    
  } // end filter category


  getSpecificCategory(category: any) {
    this.isLoading = true;
    this.categoryService.filterCategory(category).subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    },
      (err) => {
        console.log(err);
        this.isLoading = false;
      });

  } // end get specific category



  addToCart(event:any){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exists = this.cartProducts.find((i:any) => i.item.id == event.item.id);
      if(!exists){
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));      
      }
    }else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
    
  } // end add to cart

}
