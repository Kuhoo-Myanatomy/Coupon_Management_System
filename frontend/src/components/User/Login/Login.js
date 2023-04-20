import React,{Component} from "react";
import '../style.css'
import {Link} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import PropTypes from 'prop-types';
// import Nav from '../Navbar/Nav'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            emailClicked:false,
            password:'',
            passwordClicked:false,
        }
    }
    onChange = (e) => {
        this.setState({ 
            [e.target.id]: e.target.value 
        });
    };
    handleLogin=(e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        this.props.loginUser({email,password});
        
        
        // toast.success("User Logged In Successfully");
    }
    render(){
        console.log("Login Props: ",this.props);
        const {email,password,emailClicked,passwordClicked}=this.state
        const isDisabled = [email, password].every((value) => value !== "");
        const message = isDisabled
        ? ""
        : "Please fill the details to enable the submit button";
        return(
            
            <div className="user">
                <form className="required">
                    <h2> User Login</h2>
                    <div>
                        <label>Email:<sup>*</sup> </label>
                        <input type="email" id="email" value={email} required onChange={this.onChange} onClick={() => this.setState({ emailClicked: true })}></input>
                        {emailClicked && email.trim().length === 0 && <p>This field can't be left blank</p>}
                    </div>
                    <div>
                        <label>Password:<sup>*</sup> </label>
                        <input type="password" id="password" value={password} required onChange={this.onChange} onClick={() => this.setState({ passwordClicked: true })}></input>
                        {passwordClicked && password.trim().length <8 && <p>Invalid Password</p>}
                    </div>
                    <div>
                         <label>
                            Don't have an account ? <Link to="/signup">Register</Link>  
                         </label>
                    </div>
                    <div>
                            <center><button className='center' onClick={this.handleLogin} type="submit" disabled={!isDisabled}  title={message} style={{ cursor: !isDisabled ? "not-allowed" : "pointer" ,opacity: !isDisabled ? 0.5 : 1, }} >Login</button></center>
                    </div>
                </form>
            </div>
            // </div>
        )
    }
}
Login.propTypes={
    loginUser:PropTypes.func,
    token:PropTypes.string
}
export default Login