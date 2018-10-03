import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodo, ToggleTodo } from '@state/todo-list/todo-list.actions';
import { State } from '@state/todo-list/todo-list.state';
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  newTodo: String = '';

  todoList$: Observable<any>;

  constructor(private store: Store<State>) {                                  // change
    this.todoList$ = store.pipe(select('todoList'));                        // add
  }

  ngOnInit() {
  }
  addTodo() {
    this.store.dispatch(                                                    // change
      new AddTodo({ name: this.newTodo })                                 // change
    );                                                                      // change
  }

  toggleTodo(index: Number) {                                                 // add
    this.store.dispatch(                                                    // add
      new ToggleTodo({ index })                                           // add
    );                                                                      // add
  }
}
