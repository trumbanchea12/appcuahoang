import * as types from './../constants/ActionType';
import callApi from '../network/apiCaller';


export const actSignUpRequest = (info) => {
    return (dispatch) => {
        callApi('register', 'POST', info).then(res => {
            dispatch(actSignUp(res.data.user));
        });
    };
}

export const actSignUp = (info) => {
    return {
        type : types.SIGN_UP,
        info
    }
}