import React,{Component} from "react";
import './style.css'
import {Link} from 'react-router-dom'
// import Nav from '../Navbar/Nav'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    onChange = (e) => {
        this.setState({ 
            [e.target.id]: e.target.value 
        });
    };

    render(){
        const {email,password}=this.state
        return(
            <div className="user">
                <form className="required">
                    <h2> User Login</h2>
                    <div>
                        <label>Email: </label>
                        <input type="email" id="email" value={email} required onChange={this.onChange}></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" id="password" value={password} required onChange={this.onChange}></input>
                    </div>
                    <div>
                         <label>
                            Don't have an account ? <Link to="/signup">Register</Link>  
                         </label>
                    </div>
                    <div>
                            <center><button className='center' type='submit'>Login</button></center>
                    </div>
                </form>
            </div>
            // </div>
        )
    }
}

export default Login