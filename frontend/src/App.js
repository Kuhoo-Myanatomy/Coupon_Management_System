// import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import AddCoupon from './components/AddCoupon/index';
// import Coupon from './components/CouponCard/index';
import Card from './components/Card/index';
import Error from './components/Error';
import Login from './components/User/Login/index';
import Logout from './components/User/Logout';
import SignUp from './components/User/SignUp/index';
import Show from './components/ShowCoupons/index';
import Home from './components/Home/Home';
import Edit from './components/Edit/index';
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

  render(){
    return(

      <div>
        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/coupon/:_id' component={Card}></Route>
          <Route exact path='/edit/:_id' component={Edit}></Route>
          <Route exact path='/coupons' component={Show}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/logout' component={Logout}></Route>
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