import React, { Component } from 'react'
import './styleedit.css'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCouponById } from '../../redux/actions/actions';
export class Edit extends Component {
    constructor(props){
        super(props)
        this.state={
            // _id:this.props.match.params._id,
            _id:this.props._id,
            couponCode:this.props.couponCode,
            discount:this.props.discount,
            issueDate:this.props.issueDate,
            expiryDate:this.props.expiryDate,
            couponCodeClicked:false,
            discountClicked:false,
            issueDateClicked:false,
            expiryDateClicked:false,
            isFormChanged: false,
        }
    }
        componentDidMount(){
            this.props.getCouponById(this.state._id);
            setTimeout(()=>{console.log("After Edit fetch ",this.props);
            const{ couponCode,discount,issueDate,expiryDate}=this.props.details;
            this.setState({ couponCode, discount, issueDate, expiryDate });},1000);  

        }
    onChange = (e) => {
        console.log("Onchange");
        this.setState({ 
            [e.target.name]: e.target.value,
            isFormChanged: true 
        });
      };
      editCoupon=(event)=>{
        console.log("Edit Method called");
        console.log(this.props);
        const {_id}=this.props;
        const{ couponCode,discount,issueDate,expiryDate}=this.state;
        console.log(_id,couponCode,discount,issueDate,expiryDate);
        console.log(this.state);
        this.props.updateCoupon({_id,couponCode,discount,issueDate,expiryDate});
        toast.success("Details Updated Successfully");
       
    }
  render() {
    console.log(this.props);
    console.log(this.state);
    const{couponCode,discount,issueDate,expiryDate,couponCodeClicked,discountClicked,issueDateClicked,expiryDateClicked,isFormChanged}=this.state;
    
    const isEmpty = [couponCode,discount,issueDate,expiryDate].every((value) => value !== "");
    const isSame=
        couponCode===this.props.couponCode &&
        discount===this.props.discount &&
        issueDate===this.props.issueDate &&
        expiryDate===this.props.expiryDate;
    const isDisabled=isEmpty&& !isSame;
   
    const message = isDisabled? "": "Please fill the new details to enable the submit button";
    console.log("Same",isSame);

    const idate=new Date(issueDate),
    mnth = ("0" + (idate.getMonth() + 1)).slice(-2),
    day = ("0" + idate.getDate()).slice(-2);
    const fissueDate= [idate.getFullYear(), mnth, day].join("-");

    const edate=new Date(expiryDate),
    emnth = ("0" + (edate.getMonth() + 1)).slice(-2),
    eday = ("0" + edate.getDate()).slice(-2);
    const fexpiryDate= [edate.getFullYear(), emnth, eday].join("-");
    
    console.log(typeof expiryDate,expiryDate);
    return (
        <div className='box'>
        <ToastContainer />
        <form>
            <h2 className='center'>Edit Coupon Details</h2>
                <div>
                    <label>Coupon Code:<sup>*</sup> </label>
                    <input
                        type='text'
                        value={couponCode}
                        name="couponCode"
                        onChange={this.onChange}
                        onClick={() => this.setState({ couponCodeClicked: true })}
                        />
                        {couponCodeClicked && couponCode.trim().length === 0 && <p>This field can't be left blank</p>}

                        </div>
                        <div>
                            <label>Discount:<sup>*</sup> </label>
                            <input
                                type='Number'
                                value={discount}
                                name="discount"
                                onChange={this.onChange}
                                onClick={() => this.setState({ dicountClicked: true })}
                            />
                            {discountClicked && discount.trim().length===0?<p>This field can't be left blank</p>:discount<0?<p>Discount should be greater than 0</p>:null}
                        </div>
                        <div>
                            <label>Issue Date:<sup>*</sup> </label>
                            <input
                                type='Date'
                                value={fissueDate}
                                name="issueDate"
                                onChange={this.onChange}
                                onClick={() => this.setState({ issueDateClicked: true })}
                            />
                            {issueDateClicked && issueDate.trim().length===0?<p>This field can't be left blank</p>:null}
                        </div>
                        <div>
                            <label>Expiry Date:<sup>*</sup> </label>
                            <input
                                type='Date'
                                value={fexpiryDate}
                                name="expiryDate"
                                onChange={this.onChange}
                                onClick={() => this.setState({ expiryDateClicked: true })}
                            />
                            {expiryDateClicked && expiryDate.trim().length===0?<p>This field can't be left blank</p>:null}
                </div>
            
                <center>
                    <button onClick={() => {const confirmBox = window.confirm("Do you want to save the details?")
                            if (confirmBox === true) {this.editCoupon()}
                            }}  type="submit" disabled={!isDisabled} title={message} style={{ cursor: !isDisabled? "not-allowed" : "pointer",opacity: !isDisabled ? 0.5 : 1, }}>Save</button>
                </center>
        </form>
    </div>
    )
  }
}
Edit.propTypes={
    coupons:PropTypes.array,
    updateCoupon:PropTypes.func
}
export default Edit