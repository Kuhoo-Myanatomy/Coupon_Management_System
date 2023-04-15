import React,{Component} from "react";
import {Link} from 'react-router-dom';

import './nav.css'
class Nav extends Component{
    render(){
        return(
            <div className="navbar">
                <ul>
                    <li></li>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/coupons">Coupons</Link></li>
                    <li> <Link to="/add">New</Link></li>
                </ul>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav