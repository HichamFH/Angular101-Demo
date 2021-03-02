import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductsListComponent } from './component/products/products-list/products-list.component';
import { ProductsFormComponent } from './component/products/products-form/products-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsFormComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 

  ],
  providers: [],
  bootstrap: [ProductsComponent]
})
export class AppModule { }
