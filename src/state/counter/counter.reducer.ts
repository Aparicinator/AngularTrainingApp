import { State, initialState } from '@state/counter/counter.state';
import { CounterActionTypes, CounterActions } from '@state/counter/counter.actions';


export function counterReducer(state = initialState, action: CounterActions): State {
    switch (action.type) {
        case CounterActionTypes.INCREMENT: 
            return {
                ...state,
                counter: state.counter + 1
            };

        case CounterActionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };

        default: {
            return state;
        }
    }
}