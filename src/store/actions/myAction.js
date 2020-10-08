// import { FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS } from './myActionTypes'
import * as myActionTypes from './myActionTypes';
export const getConfig = () => async dispatch => {
    console.log("responseBody")
    try {
        dispatch({ type: myActionTypes.FETCH_REQUEST });
        const url = "http://ip.jsontest.com/";
        const response = await fetch(url);
        const responseBody = await response.json();
            console.log(responseBody)
     
            dispatch({
                type: myActionTypes.FETCH_SUCCESS,
                data: responseBody
            })
    } catch (e) {
        dispatch({
            type: myActionTypes.FETCH_ERROR
        })
    }
}