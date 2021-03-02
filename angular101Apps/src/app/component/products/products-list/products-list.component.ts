import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/models/product-list';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
 
  }

}
