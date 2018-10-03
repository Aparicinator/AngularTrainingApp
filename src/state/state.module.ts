import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from '@state/counter/counter.reducer';
import { CounterEffects } from '@state/counter/counter.effects';
import { todoListReducer } from '@state/todo-list/todo-list.reducers';
@NgModule({
    imports: [
        StoreModule.forRoot({
            count: counterReducer,
            todoList: todoListReducer
        }),
        EffectsModule.forRoot([                        // add
            CounterEffects                             // add
        ]),
        StoreDevtoolsModule.instrument()
    ]
})
export class StateModule { }