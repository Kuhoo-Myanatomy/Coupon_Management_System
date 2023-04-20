import React, { Component } from 'react'
import './style.css'
export class Logout extends Component {
  render() {
        if (localStorage.getItem("token") === null) {
            alert("You are not Logged In");
            window.location.href='/login';
        };
            
            
        setTimeout(()=>{localStorage.clear();window.location.href='/login'},3000);
    return (
      <div className='logout' style={{color:"white"}}><h1>Logging Out....</h1></div>
    )
  }
}

export default Logout