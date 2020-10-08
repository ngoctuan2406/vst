import * as homeActionTypes from './homeActionTypes'

export function login() {
    return {
        type: homeActionTypes.LOGIN,
        payload: {}
    }
}