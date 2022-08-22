import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  id: number | any;
  name: string | any;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  openDelete(id: any, name: any): void {
    this.id = id;
    this.name = name;
  }

  delete(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }
}