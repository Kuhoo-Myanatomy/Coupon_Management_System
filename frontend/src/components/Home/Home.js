import React,{Component} from "react"
import './home.css'
import { Link } from "react-router-dom"
class Home extends Component{    
    render(){
        return (
           <div>
                <div className="main">
                    <h1>Coupon Management App</h1>
                    <p></p>
                    <p>MERN Stack (MongoDB, Express JS, React-Redux, Node JS) web application </p>
                    <p>Perform all the required CRUD operations</p>
                    {/* <Link to="/coupons"><button>View Coupons <i class="fa fa-hand-o-right" style="font-size:48px;color:white"></i></button></Link> */}
                    <Link to="/coupons"><button>View Coupons <i class="fa fa-hand-o-right" ></i></button></Link>
                </div>
                <div className='footer'>
                    <p>All Right Reserved © 2023</p>
                </div>
           </div>
        )
    }
}
export default Home