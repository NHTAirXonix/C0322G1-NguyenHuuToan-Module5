import { Injectable } from '@angular/core';
import {CustomerType} from "../model/customer-type.model";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {CustomerTypeI} from "../model/customer-type-i";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CustomerTypeI[]> {
    return this.http.get<CustomerTypeI[]>('http://localhost:3000/customerTypeI');
  }

}
