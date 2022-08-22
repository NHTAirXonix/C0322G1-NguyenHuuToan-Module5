import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from "../todo.service";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getList();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  getList() {
    this.todoService.getAll().subscribe(todo => this.todos = todo);
  }

  save() {
    const value = this.content.value;

    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(next => {
        this.getList();
        this.content.reset();
      });

    }
  }

  edit(i: number) {
    const todo = this.todos[i];
    const todoData = {
      ...todo,
      complete: !todo.complete
    };
    // @ts-ignore
    this.todoService.update(todoData).subscribe(next => {
      this.todos[i].complete = next.complete;
      this.getList();
        this.content.reset();
    });
  }

  delete(id: any) {
    this.todoService.deleteProduct(id).subscribe(next => {
      this.getList();
      this.content.reset();
    });
  }
}
