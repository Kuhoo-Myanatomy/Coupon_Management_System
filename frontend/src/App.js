// import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import AddCoupon from './components/Add/index';
import Coupon from './components/CouponCard/index';
import Error from './components/Error';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp/index';
import Show from './components/ShowCoupons/index';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';

// const PrivateRoute=({component:Component,isAutheticated, ...rest})=>(
//   <Route {...rest} render={(props)=>(
//     isAutheticated ? (<Component {...props} />
//     ):(
//       <Redirect to='/login' />
//     )
//     )}/>
// );

class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     isAuthenticated:true,
  //   };
  // }
  // handleLogin(){
  //   this.setState({
  //     isAuthenticated:true
  //   });
  // }
  // handleLogout(){
  //   this.setState({
  //     isAuthenticated:false
  //   });
  // }
  render(){
    // const {isAuthenticated}=this.state;
    return(
      <div>
        <Nav></Nav>
        <Switch>
          
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/coupon' component={Coupon}></Route>
          <Route exact path='/coupons' component={Show}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={SignUp}></Route>
          <Route exact path='/add' component={AddCoupon}></Route>
          <Route component={Error}></Route>
        </Switch>

      </div>
    )
  }
}

export default App;


//  {/* <Route exact path='/login' render={(props)=>(
//             <Login onLogin={this.handleLogin}/>
//           )}/>
//           <PrivateRoute exact path='/coupons' component={Show}></PrivateRoute> */}
//           {/* <Route exact path='/show' render={()=>
//             <div>
//               <Nav />
//               <Show />
//             </div>
//             } /> */}