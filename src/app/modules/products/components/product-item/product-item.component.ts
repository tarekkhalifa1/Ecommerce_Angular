import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() data:any;
  @Output() item = new EventEmitter();
  addButton:boolean = false;
  amount:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  add(){    
    this.item.emit({item: this.data, quantity: this.amount});
    this.addButton = false;
  }

}
