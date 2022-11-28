import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productID: number;
  product: any = {};
  isLoading: boolean = false;
  constructor(
    private pageTitle: Title,
    private myActivated: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.productID = (myActivated.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.getProduct();

  }


  getProduct() {
    this.isLoading = true;
    this.productService.getProduct(this.productID).subscribe((data) => {
      this.product = data;
      this.pageTitle.setTitle(this.product.title);
      this.isLoading = false;
    },
      (err) => {
        this.isLoading = true;
        console.log(err);
        this.isLoading = false;
      }
    )
  }

}
