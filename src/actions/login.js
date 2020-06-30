import * as action_type_login from '../constants/login';

export const login =(data)=>{
    return {
        type: action_type_login.LOGIN,
        payload: { data}
    }
}