import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // [post1, post2] => { 1:post, 2:post }
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}