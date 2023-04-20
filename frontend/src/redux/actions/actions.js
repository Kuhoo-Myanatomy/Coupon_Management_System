import axios from 'axios';

import {
    GET_COUPONS,CREATE_COUPON,UPDATE_COUPON,DELETE_COUPON,GET_COUPON_BY_ID
} from './types';
const token=localStorage.getItem('token');

export const getCoupons=()=>{
    
    console.log(token);
    return (dispatch)=>{
        return axios.get('http://localhost:5000/api/coupons',
        {
            headers: { Authorization: `Bearer ${token}` }
        }
        )
        
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
            alert(err.response.data.message);
            console.log(err);
        })     
    }
}
// export const getCouponById=(_id)=>{
//     console.log(_id);
//     return (dispatch)=>{
//         return axios.get(`http://localhost:5000/api/coupons/getcoupon/${_id}`)
//         .then((data)=>{
//             console.log(data.data);
//             dispatch({
//                 type:GET_COUPON_BY_ID,
//                 payload:{
//                     details:data.data.coupon
//                 }
//             });
//         })
//         .catch((err)=>{
//             console.log(err);
//         })     
//     }
// }
export const getCouponById = (_id) => {
    console.log(_id);
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/coupons/getcoupon/${_id}`,
        {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response.data);
        dispatch({
          type: GET_COUPON_BY_ID,
          payload: {
            details: response.data.coupon
          }
        });
      } catch (err) {
        alert(err.response.data.message);
        console.log(err);
      }
    }
  }
  
export const createCoupon=({couponCode,discount,issueDate,expiryDate})=>(dispatch)=>{
    console.log(couponCode,discount,issueDate,expiryDate);
    console.log("hellooooo");
    const userId="6418048d1bdcbbbe6910af14";
    axios.post(`http://localhost:5000/api/coupons/add/${userId}`,{couponCode,discount,issueDate,expiryDate},
    {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then((res)=>{
        console.log(res.data);
        dispatch({
            type:CREATE_COUPON,
            payload:res.data,
        });
    })
    .then(()=>{
        setTimeout(()=>{window.location.href='/coupons'},3000);
    })
    .catch((err)=>{
        const errors=err.response.data.errors;
        console.log(errors);
        alert(errors[0].msg);
        console.log(err);
    })
}

export const deleteCoupon=(_id)=>{
    return (dispatch)=>{
        // const userId="6418048d1bdcbbbe6910af14";
        return axios.delete(`http://localhost:5000/api/coupons/delete/${_id}`,_id,
        {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(()=>{
                console.log("delete",_id);
                dispatch({
                    type:DELETE_COUPON,
                    payload:_id,
                });
            })
            .catch((err)=>{
                alert(err.response.data.message);
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
        return axios.put(`http://localhost:5000/api/coupons/edit/${_id}`,{couponCode,discount,issueDate,expiryDate},
        {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            console.log(res.data);
            dispatch({
                type:UPDATE_COUPON,
                payload:res.data
            })
        })
        .catch((err)=>{
            alert(err.response.data.message);
            console.log(err);
        })
    }
}