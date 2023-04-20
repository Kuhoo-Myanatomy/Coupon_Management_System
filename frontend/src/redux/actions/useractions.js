import axios from 'axios';

import{CREATE_USER,LOGIN_USER} from './types';
// import { toast } from 'react-toastify';

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
    setTimeout(()=>{console.log("Signupp")},3000);

    })
    // .then(()=>{
        // setTimeout(()=>{console.log("Signupp")},3000);
        // setTimeout(()=>{window.location.href='/login'},3000);
        // window.location.href='/login';
        // toast.success("User Registered Successfully");
    // })
    .catch((err)=>{
        alert(err.response.data.message);
        console.log(err);
    })
}

export const loginUser=({email,password})=>(dispatch)=>{
    console.log(email);
    axios.post(`http://localhost:5000/api/users/login`,{email,password})
    .then((res)=>{
        // console.log(res.data);
        localStorage.setItem('token',res.data.token);
        // console.log(localStorage.getItem("token"));
        
        console.log("Hello", res.data.payload.name);
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
        const username="Hello " + res.data.payload.name;

        alert(username);
    })
    .then(()=>{ 
        // setTimeout(()=>{localStorage.clear();
        // console.log("Cleared...");},5000);
        window.location.href='/';
    })
    .catch((err)=>{
        alert(err.response.data.message);
        console.log(err);
    })
}