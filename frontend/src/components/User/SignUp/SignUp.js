import React,{Component} from "react";
import '../style.css'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit=event=>{
        console.log(this.state)
        console.log(
            `User Details:
            Username: ${this.state.username}, 
            email: ${this.state.email}`
            )
        event.preventDefault()
    }
    registerUser=(event)=>{
        event.preventDefault();
        const {username,email,password}=this.state;
        this.props.createUser({username,email,password});
    }
    render(){
        const {username,email,password}=this.state
        return(
            // <div><Nav></Nav>
            <div className="user">
                <form>
                <h2> SignUp </h2>
                    <div>
                        <label className="required">UserName: </label>
                        <input type="text" id="username" value={username} required onChange={this.onChange}></input>
                    </div>
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
                            Already have an account ? <Link to="/login">Login</Link>  
                         </label>
                    </div>
                    <div>
                        <button className='center' onClick={this.registerUser}>SignUp</button>
                    </div>
                </form>

            </div>
        )
    }
}
SignUp.propTypes={
    createUser:PropTypes.func,
    users:PropTypes.array
}
export default SignUp