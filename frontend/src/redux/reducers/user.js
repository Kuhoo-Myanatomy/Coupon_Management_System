import { CREATE_USER } from "../actions/types";

const initialUsers={
    users:[]
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
        default:
            return state
    }
}