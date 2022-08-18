import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
  }
}
