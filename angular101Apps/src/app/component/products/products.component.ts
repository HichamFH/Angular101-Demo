import { PRODUCTS } from './../../models/product-list';
import { Products } from './../../models/products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

   products : Products[] = [];

  ngOnInit(): void {
    this.products = PRODUCTS;
    console.log(this.products)
  }

}
