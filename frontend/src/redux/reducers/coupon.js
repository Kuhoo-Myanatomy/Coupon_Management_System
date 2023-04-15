import {
    GET_COUPONS,CREATE_COUPON,UPDATE_COUPON,DELETE_COUPON
} from '../actions/types';

const initialState={
    coupons:[]
}

const couponReducer=(state=initialState,action)=>{
    const {type,payload}=action
    console.log(payload);
    switch(type){
        case GET_COUPONS:{
            console.log(payload.coupons);
            // const newstate=state.coupons.concat(payload.coupons);
            return {
                ...state,
                coupons:payload.coupons
            }
        }
        case CREATE_COUPON:{
            console.log(state,action);
            return {
                ...state,
                coupons:[...state.coupons,action.payload] 
            }
        }
        case DELETE_COUPON:{
            console.log(state,action);
            const newarr=state.coupons.filter((c)=>c._id!==payload)
            initialState.coupons=newarr;
            return {
                coupons:newarr
            }
        }
        case UPDATE_COUPON:{
            console.log(state,action);
           const newarr=state.coupons.map((p) =>p.id === action.payload.id ? action.payload : p)
           console.log("hello",newarr);
            initialState.coupons=newarr;
            return {
                ...state,
                coupons:newarr
                
            }
        }
        default:
            return state
    }
    
}
export default couponReducer;
