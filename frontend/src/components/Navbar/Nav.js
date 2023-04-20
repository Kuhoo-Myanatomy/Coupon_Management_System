import React,{Component} from "react";
import {Link, withRouter} from 'react-router-dom';

import './nav.css'
class Nav extends Component{
    constructor(props) {
        super(props);
        this.state = {
          currentTab: 'home',
        };
    }
    
    componentDidMount() {
        this.handleNavigation(this.props.location);
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          this.handleNavigation(this.props.location);
        }
    }
    
    handleNavigation(location) {
        const path = location.pathname;
        if (path === '/') {
          this.setState({ currentTab: 'home' });
        } else if (path === '/coupons') {
          this.setState({ currentTab: 'coupons' });
        } else if (path === '/add') {
          this.setState({ currentTab: 'new' });
        }else if (path === '/login') {
            this.setState({ currentTab: 'login' });
          } else if (path === '/signup') {
            this.setState({ currentTab: 'signup' });
          }else if (path === '/logout') {
            this.setState({ currentTab: 'logout' });
          }
    }
    render(){
        console.log(this.props.location);
        const { currentTab } = this.state;
        console.log(currentTab);
        return(
            <div className="navbar">
                <ul>
                    <li></li>
                    <li> <Link to="/" className={currentTab === 'home' ? 'active-tab' : ''}>Home</Link></li>
                    <li> <Link to="/coupons" className={currentTab === 'coupons' ? 'active-tab' : ''}>Coupons</Link></li>
                    <li> <Link to="/add" className={currentTab === 'new' ? 'active-tab' : ''}>New</Link></li>
                </ul>
                <ul>

                    <li><Link to="/logout" className={currentTab === 'logout' ? 'active-tab' : ''}>Logout</Link></li>
                    <li><Link to="/login" className={currentTab === 'login' ? 'active-tab' : ''}>Login</Link></li>
                    <li><Link to="/signup" className={currentTab === 'signup' ? 'active-tab' : ''}>SignUp</Link></li>
      
                </ul>
            </div>
        )
    }
}

export default withRouter(Nav);