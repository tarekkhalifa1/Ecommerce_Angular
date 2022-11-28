import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.countItemsInCart();
  }

  countItemsInCart(){
    if(JSON.parse(localStorage.getItem('cart')!)){      
       if(JSON.parse(localStorage.getItem('cart')!).length == 0){
          return "";
       }
    }
    return JSON.parse(localStorage.getItem('cart')!).length

  } // number of items in cart

}
