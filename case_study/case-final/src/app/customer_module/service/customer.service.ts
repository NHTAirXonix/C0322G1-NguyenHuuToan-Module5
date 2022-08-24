import {Injectable} from '@angular/core';
import {Customer} from '../model/customer.model';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs/dist/types';
import {CustomerI} from '../model/customer-i';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<CustomerI> {
    return this.http.get<CustomerI>(`http://localhost:3000/customer/${id}`);
  }

  getAll(): Observable<CustomerI[]> {
    return this.http.get<CustomerI[]>('http://localhost:3000/customer');
  }

  save(customer: any): Observable<CustomerI> {
    return this.http.post<CustomerI>('http://localhost:3000/customer', customer);
  }

  update(id: number, customer: CustomerI): Observable<CustomerI> {
    return this.http.put<CustomerI>(`http://localhost:3000/customer/${id}`, customer);
  }

  delete(id: number): Observable<CustomerI> {
    return this.http.delete<CustomerI>(`http://localhost:3000/customer/${id}`);
  }
}


