import React, { Component } from 'react';
import './add.css'
import PropTypes from 'prop-types'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AddCoupon extends Component{
    constructor(props){
        super(props)  
        this.state={
            couponCode:'',
            couponCodeClicked:false,
            discount:'',
            discountClicked:false,
            issueDate:'',
            issueDateClicked:false,
            expiryDate:'',
            expiryDateClicked:false,
            addflag:true,
            saved:false,
        }
    }
    // setEdit=()=>{
    //         const {couponCode,discount,issueDate,expiryDate,eupdate}=this.state
    //         this.setState=(
    //             {_id:this.props.location._id},
    //             {couponCode:this.props.location.couponCode.couponCode},
    //             {discount:this.props.location.discount.discount},
    //             {issueDate:this.props.location.issueDate.issueDate},
    //             {expiryDate:this.props.location.expiryDate.expiryDate},
    //             {eupdate:true}
    //         )
    // }

    onChange = (e) => {
        console.log("Onchange");
        this.setState({ 
            [e.target.name]: e.target.value});  
      };
    saveCoupon=(event)=>{
        // event.preventDefault();
        console.log("Save Method called"); 
        const{ couponCode,discount,issueDate,expiryDate}=this.state;
        if(this.props.createCoupon({couponCode,discount,issueDate,expiryDate})){
        toast.success("Coupon Added Successfully")
        }
    }
    render(){
        console.log(this.props);
        console.log(this);
        const{couponCode,discount,issueDate,expiryDate,couponCodeClicked,discountClicked,issueDateClicked,expiryDateClicked}=this.state
        const isDisabled = [couponCode,discount,issueDate,expiryDate,].every((value) => value !== "");
        const message = isDisabled? "": "Please fill the details to enable the submit button";
        const idate=new Date(issueDate),
        mnth = ("0" + (idate.getMonth() + 1)).slice(-2),
        day = ("0" + idate.getDate()).slice(-2);
        const fissueDate= [idate.getFullYear(), mnth, day].join("-");

        const edate=new Date(expiryDate),
        emnth = ("0" + (edate.getMonth() + 1)).slice(-2),
        eday = ("0" + edate.getDate()).slice(-2);
        const fexpiryDate= [edate.getFullYear(), emnth, eday].join("-");
        console.log( discount);

        return (
            <div className='box'>
            <ToastContainer/>
                <form>
                    <h2 className='center'>Add Coupon Details</h2>
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
                            {discountClicked && discount===0?<p>This field can't be left blank</p>:discount<0?<p>Discount should be greater than 0</p>:null}
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
                            <button onClick={
                                // this.saveCoupon}
                                (event) => {
                                    const confirmBox = window.confirm("Do you want to add this Coupon?")
                                    if (confirmBox === true) 
                                        // console.log("true");
                                        this.saveCoupon(event)
                            }} 
                             type="submit" disabled={!isDisabled} title={message} 
                            style={{ cursor: !isDisabled ? "not-allowed" : "pointer",opacity: !isDisabled ? 0.5 : 1, }}>Add</button>
                        </center>
                </form>
            {/* <Form 
            couponCode={couponCode} 
            discount={discount} 
            issueDate={fissueDate} 
            expiryDate={fexpiryDate}
            addflag={true}></Form> */}    
            </div>
        )
    }
}
AddCoupon.propTypes={
    createCoupon:PropTypes.func,
    coupons:PropTypes.array,
}
export default AddCoupon;