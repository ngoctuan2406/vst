import * as myActionTypes from '../actions/myActionTypes';

const initState = {
    loading: false,
    success: false,
    data: null,
    message: null
}
function myReducer (state = initState, action) {
    switch (action.type) {
        case myActionTypes.FETCH_SUCCESS:
            console.log("action",action.data.ip)
            return {
                ...state,
                loading: false,
                success: true,
                data: action.data.ip
            };

        case myActionTypes.FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case myActionTypes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                success: false
            };

        default:
            return state
    }
}
export default myReducer;