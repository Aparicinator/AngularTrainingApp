import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from '@state/counter/counter.reducer';

@NgModule({
    imports: [
        StoreModule.forRoot({
            count: counterReducer
        })
    ]
})
export class StateModule { }