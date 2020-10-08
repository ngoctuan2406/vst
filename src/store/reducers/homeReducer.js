import * as homeActionTypes from '../actions/homeActionTypes';

const initState = {
    loading: false,
    data: {}
}
const myReducer = (state = initState, action) => {
    switch (action.type) {
        case homeActionTypes.LOGIN:
            console.log('123');
            return {
                ...state
            }
        default:
            return state
    }
}
export default myReducer;