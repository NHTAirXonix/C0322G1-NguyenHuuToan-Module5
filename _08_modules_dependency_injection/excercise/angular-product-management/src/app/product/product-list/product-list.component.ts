import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  idCustomer: any='';
  nameCustomer: any='';
  displayStyle = "none";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  openPopup(idCustomer: any, nameCustomer: any) {
    this.idCustomer = idCustomer;
    this.nameCustomer = nameCustomer;
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  callService() {
    this.productService.deleteProduct(this.idCustomer);
    this.getAll();
    this.closePopup();
  }
}
