import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Should be returning a completely new state instance
            // return state.concat([action.payload.data]);
            // ES6 syntax equivalent
            // payload contains the whole response object, data is a key inside the object.
            // console.log(action.payload);
            return [ action.payload.data, ...state ];
    }
    return state;
}