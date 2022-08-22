import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:3000/todo`);
  }

  saveTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`http://localhost:3000/todo`,todo);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    console.log(id);
    console.log(todo);
    return this.http.put<Todo>(`http://localhost:3000/todo/${id}`,todo);
  }

  deleteProduct(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:3000/todo/${id}`);
  }
}
