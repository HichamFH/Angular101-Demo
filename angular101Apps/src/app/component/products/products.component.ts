import { PRODUCTS } from './../../models/product-list';
import { Products } from './../../models/products.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  /*======= Create Product Array ====*/

  products : Products[] = [];

  /*===== Declare isUpdate Property (Help In Update Button)====*/

   isUpdate : boolean = false;

   /*====== OnInit Function ====*/

  ngOnInit(): void {

    /*=======Initialize Product Array With PRODUCT Array Constant =======*/
    
    this.products = PRODUCTS;
    console.log(this.products)
  }

  /*===== Initialize Product Data =====*/

  product : Products = {
    id : 0,
    name : "",
    price: 0
  }


  /*===== OnSubmit Function ===*/

  onSubmit(form : any) {
    this.products = [...this.products , form];
    this.reset();
    this.toastr.success("Produit Ajouté avec succés ","Ajout Avec Succés")
  }

  /*===== Delete Product Function =======*/

  deleteProduct(id : number) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.products = this.products.filter(p => p.id !== id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  /*========= Recupere Data In The Form To Update ==*/

    getProductInForm(p : Products) {
      this.product = Object.assign({},p);
      this.isUpdate = true;
      console.log(this.product)
    }

    /*=======Update Product ========*/

    updateProduct(product : Products) {
        let id = product.id;
        this.products.forEach(function(pro){
          if(pro.id === id) {
            pro.name = product.name
            pro.price = product.price
          }
        });
        this.reset();
        this.clear();
       this.toastr.warning("Produit Modifié avec succés ","Modification Avec Succés")


    }

    /*======== Clear Function===== */
    clear() {
      this.isUpdate = false;
      this.reset();
    }

    /*======Reset Function =====*/
    reset() {
      this.product = {
        id : 0,
        name : '',
        price: 0
      }
    }

    
    
    


}
