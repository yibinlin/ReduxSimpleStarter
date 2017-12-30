import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // returning a completely new state instance
            // return state.concat([action.payload.data]);
            // ES6 syntax equivalent
            return [ action.payload.data, ...state ];
    }
    return state;
}