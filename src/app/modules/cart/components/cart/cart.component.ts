import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any;
  totalOfCart: any;
  success:boolean = false;
  constructor(private pageTitle: Title, private myService: CartService) {
    pageTitle.setTitle('Cart');
   }

  ngOnInit(): void {
    this.getCartProducts();
  }


  get cartTotal() {
    return Number.parseFloat(this.totalOfCart).toFixed(2);

  } // end cart total




  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.updateLocalStorage();

  } // end get cart products


  plus(id: number) {
    this.cartProducts[id].quantity++;
    this.updateLocalStorage();

  } // end plus quantity

  mins(id: number) {
    this.cartProducts[id].quantity--;
    this.updateLocalStorage();

  } // end mins quantity

  changeQuantity() {
    this.updateLocalStorage();

  } // end change quantity


  getCartTotal() {
    this.totalOfCart = 0;
    for (let i in this.cartProducts) {
      this.totalOfCart += this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  } // end get cart total


  clearProduct(id: number) {
    this.cartProducts.splice(id, 1);
    this.updateLocalStorage();

  } // end clear product


  clearCart() {
    this.cartProducts = [];
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();

  } // end update products in local storage


  makeOrder() {
    let products = this.cartProducts.map((product: any) => {
      return { productId: product.item.id, quantity: product.quantity }
    });

    const Order = {
      userId: 1,
      date: new Date(),
      products: products
    }

    this.myService.newOrder(Order).subscribe(
      (res) => this.success = true,
      (err) => console.log(err)
    )

    this.cartProducts = [];
    this.updateLocalStorage();

  } // end make order

}
