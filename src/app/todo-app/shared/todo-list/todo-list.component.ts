import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';                        // add
import { Observable } from 'rxjs';                                  // add

import { ToggleTodo } from '@state/todo-list/todo-list.actions';    // add
import { State } from '@state/todo-list/todo-list.state';
@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todoList$: Observable<any>;                                         // add

    constructor(private store: Store<State>) {                          // add
        this.todoList$ = store.pipe(select('todoList'));                // add
    }

    ngOnInit() {
    }
    toggleTodo(index: Number) {                                         // add
        this.store.dispatch(                                            // add
            new ToggleTodo({ index })                                   // add
        );                                                              // add
    }
}
