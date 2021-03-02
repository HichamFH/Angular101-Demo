import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/models/product-list';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  productList = PRODUCTS;

  constructor() { 
    console.log(this.productList)
  }

  

ngOnInit(){}

}
