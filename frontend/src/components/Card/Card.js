import React, { Component } from 'react'
import './stylecard.css';
import {PropTypes} from 'prop-types';
import Edit from '../Edit/index';
class Card extends Component {
    constructor(props){
        super(props)
        const searchParams = new URLSearchParams(this.props.location.search);
        this.state={
            _id:this.props.match.params._id,
            couponCode:this.props.couponCode,
            discount:'',
            issueDate:'',
            expiryDate:'',
            update:searchParams.get('update'),
        }

    }
    componentDidMount(){
      console.log("State before Fetch",this.state);
      console.log(this.state._id);
      // setTimeout(this.props.getCouponById(this.state._id),5000);
      this.props.getCouponById(this.state._id);
      setTimeout(()=>{console.log("After fetch ",this.props);
      const{ couponCode,discount,issueDate,expiryDate}=this.props.details;
      this.setState({ couponCode, discount, issueDate, expiryDate });},1000);      
    }

    handleUpdate=(val)=>{
      this.setState({update:"true"});
    }
  render() {
    console.log("Props",this.props.details);
    console.log("State",this.state);
    const {_id,couponCode,discount,issueDate,expiryDate}=this.state;
    // const {_id,couponCode,discount,issueDate,expiryDate}=this.state;

    const searchParams = new URLSearchParams(this.props.location.search);
    console.log(searchParams.get('update'));
    const update=this.state.update;
    console.log("Update:",update);

    // if(this.props.details!==null){
    //   var{couponCode,discount,issueDate,expiryDate}=this.props.details;
    // }

    console.log("Update:",update);
    console.log(typeof update);
    return (
      <div className='Card'>
      {update==="true" ? <Edit _id={_id}
                    couponCode={couponCode} 
                    discount={discount} 
                    issueDate={issueDate} 
                    expiryDate={expiryDate}
                    ></Edit>:
            <div className="cardbox" >
              <div className="contain">
                  <h3>Couponcode   <pre>{couponCode}</pre></h3>
                  <h4>Discount: <span>  {discount}</span></h4>
                  <h4>Issuedate: <span>  {issueDate}</span></h4>
                  <h4>Expirydate: <span>  {expiryDate}</span></h4>  
                <div className="bttn">
                    <center><button className='update' onClick={() => {
                    const confirmBox = window.confirm("Are you sure you want to update this Coupon details?")
                    if (confirmBox === true) {this.handleUpdate()}
                    }}>Update  <i class="fa fa-pencil"></i></button></center>
                    </div>
              </div>
          </div>
          }
      </div>
    )
  }
}
Card.propTypes={
    getCouponById:PropTypes.func,
}
export default Card;