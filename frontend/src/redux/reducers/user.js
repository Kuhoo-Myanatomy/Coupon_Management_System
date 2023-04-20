import { CREATE_USER, LOGIN_USER } from "../actions/types";

const initialUsers={
    users:[],
    error: null
}

export const userReducer=(state=initialUsers,action)=>{
    const {type,payload}=action
    console.log(payload);
    switch(type){
        case CREATE_USER:{
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        }
        case LOGIN_USER:{
            return{
                ...state,
            }
        }
        default:
            return state
    }
}