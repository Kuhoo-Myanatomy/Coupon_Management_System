import React,{Component} from "react";
import '../style.css'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            usernameClicked:false,
            email:'',
            emailClicked:false,
            password:'',
            passwordClicked:false,
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
        // event.preventDefault();
        
    }
    registerUser=(event)=>{
        // event.preventDefault();
        const {username,email,password}=this.state;
        console.log(this.props.createUser({username,email,password}));
        setTimeout(()=>{console.log("Waittt")},2000);
        // toast.success("User Registered Successfully");
        // this.context.router.push('/login');
    }
    render(){
        
        const {username,email,password,usernameClicked,emailClicked,passwordClicked}=this.state
        const isDisabled = [username, email, password].every((value) => value !== "");
        const message = isDisabled
        ? ""
        : "Please fill the details to enable the submit button";
        // console.log(message);
        return(
            // <div><Nav></Nav>

            <div className="user">
            <ToastContainer/>
                {/* <div className="form"> */}
                <form>
                <h2> SignUp </h2>
                    <div>
                        <label className="required">UserName:<sup>*</sup></label>
                        <input type="text" id="username" value={username} required onChange={this.onChange} onClick={() => this.setState({ usernameClicked: true })}></input>
                        {usernameClicked && username.trim().length === 0 && <p>This field can't be left blank</p>}
                    </div>
                    <div>
                        <label>Email:<sup>*</sup> </label>
                        <input type="email" id="email" value={email} required onChange={this.onChange} onClick={() => this.setState({ emailClicked: true })}></input>
                        {emailClicked && email.trim().length === 0 && <p>This field can't be left blank</p>}
                    </div>
                    <div>
                        <label>Password:<sup>*</sup> </label>
                        <input type="password" id="password" value={password} required onChange={this.onChange} onClick={() => this.setState({ passwordClicked: true })}></input>
                        {passwordClicked && password.trim().length < 8 && <p>Password should be of minimun 8 characters.</p>}
    
                    </div>
                    <div>
                         <label>
                            Already have an account ? <Link to="/login">Login</Link>  
                         </label>
                    </div>
                    <div>
                        <button className='center' onClick={this.registerUser} type="submit" disabled={!isDisabled} title={message} style={{ cursor: !isDisabled ? "not-allowed" : "pointer" ,opacity: !isDisabled ? 0.5 : 1, }} >SignUp</button>
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