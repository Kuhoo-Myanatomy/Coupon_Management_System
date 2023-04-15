import axios from 'axios';

import {
    GET_COUPONS,CREATE_COUPON,UPDATE_COUPON,DELETE_COUPON
} from './types';

export const getCoupons=()=>{
    return (dispatch)=>{
        return axios.get('http://localhost:5000/api/coupons')
        .then((data)=>{
            console.log(data);
            // const{coupons:allcoupons}=data;
            // console.log(allcoupons);
            dispatch({
                type:GET_COUPONS,
                payload:{
                    coupons:data.data.coupons
                }
            });
        })
        .catch((err)=>{
            console.log(err);
        })     
    }
}

export const createCoupon=({couponCode,discount,issueDate,expiryDate})=>(dispatch)=>{
    console.log(couponCode,discount,issueDate,expiryDate);
    console.log("hellooooo");
    const userId="6418048d1bdcbbbe6910af14";
    axios.post(`http://localhost:5000/api/coupons/add/${userId}`,{couponCode,discount,issueDate,expiryDate})
    .then((res)=>{
        console.log(res.data);
        dispatch({
            type:CREATE_COUPON,
            payload:res.data,
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}

export const deleteCoupon=(_id)=>{
    return (dispatch)=>{
        // const userId="6418048d1bdcbbbe6910af14";
        return axios.delete(`http://localhost:5000/api/coupons/delete/${_id}`,_id)
            .then(()=>{
                console.log("delete",_id);
                dispatch({
                    type:DELETE_COUPON,
                    payload:_id,
                });
            })
            .catch((err)=>{
                console.log(err);
            })
    }
}

export const updateCoupon=({_id,couponCode,discount,issueDate,expiryDate})=>{
    return (dispatch)=>{
        // const userId="6418048d1bdcbbbe6910af14";
        console.log(_id,couponCode,discount,issueDate,expiryDate);

        // discount=0;
        // issueDate="2023-04-20";
        // expiryDate="2023-04-22";
        return axios.put(`http://localhost:5000/api/coupons/edit/${_id}`,{couponCode,discount,issueDate,expiryDate})
        .then((res)=>{
            console.log(res.data);
            dispatch({
                type:UPDATE_COUPON,
                payload:res.data
            })
        })
    }
}