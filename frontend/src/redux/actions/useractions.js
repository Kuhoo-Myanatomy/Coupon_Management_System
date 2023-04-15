import axios from 'axios';

import{CREATE_USER} from './types';

export const createUser=({username,email,password})=>(dispatch)=>{
    console.log(username);
    console.log("hellooooo");
    axios.post(`http://localhost:5000/api/users/signup`,{username,email,password})
    .then((res)=>{
        console.log(res.data);
        dispatch({
            type:CREATE_USER,
            payload:res.data,
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}