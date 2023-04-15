import React, { Component } from 'react';
import './add.css'
import PropTypes from 'prop-types'

class AddCoupon extends Component{
    constructor(props){
        super(props)
        this.state={
            _id:this.props._id,
            couponCode:this.props.couponCode,
            discount:this.props.discount,
            issueDate:this.props.issueDate,
            expiryDate:this.props.expiryDate,
            eupdate:false,
        }
    }
    onChange = (e) => {
        console.log("Onchange");
        this.setState({ 
            [e.target.name]: e.target.value });
      };

    editCoupon=(event)=>{
        // event.preventDefault();
        console.log("Edit Method called");
        console.log(this.state);
        const {_id}=this.props;
        console.log(_id);
        const{ couponCode,discount,issueDate,expiryDate}=this.state;
        console.log(_id,couponCode,discount,issueDate,expiryDate);
        console.log(this.state);
        this.props.updateCoupon({_id,couponCode,discount,issueDate,expiryDate});
        // this.props.history.push('/coupons');
    }
    saveCoupon=(event)=>{
        event.preventDefault();
        console.log("Save Method called");

        console.log(this.state);
        const{ couponCode,discount,issueDate,expiryDate}=this.state;
        console.log(couponCode,discount,issueDate,expiryDate);
        this.props.createCoupon({couponCode,discount,issueDate,expiryDate});
    }
    render(){
        let heading="Edit ";
        if(!this.props.eupdate){
            // eupdate=false;
            heading="Add ";
        }
        var{ _id,couponCode,discount,issueDate,expiryDate,eupdate}=this.state
        const idate=new Date(issueDate),
        mnth = ("0" + (idate.getMonth() + 1)).slice(-2),
        day = ("0" + idate.getDate()).slice(-2);
        issueDate= [idate.getFullYear(), mnth, day].join("-");

        const edate=new Date(expiryDate),
        emnth = ("0" + (edate.getMonth() + 1)).slice(-2),
        eday = ("0" + edate.getDate()).slice(-2);
        expiryDate= [edate.getFullYear(), emnth, eday].join("-");
        
        console.log(typeof expiryDate,expiryDate);
        
        return (
            
            <div className='box'>
                <form>
                    <h2 className='center'>{heading} Coupon Details</h2>
                        <div>
                            <label>Coupon Code: </label>
                            <input
                                type='text'
                                value={couponCode}
                                name="couponCode"
                                onChange={this.onChange}
                            />
                        </div>
                        <div>
                            <label>Discount: </label>
                            <input
                                type='Number'
                                value={discount}
                                name="discount"
                                onChange={this.onChange}
                            />
                        </div>
                        <div>
                            <label>Issue Date: </label>
                            <input
                                type='Date'
                                value={issueDate}
                                name="issueDate"
                                onChange={this.onChange}
                            />
                        </div>
                        <div>
                            <label>Expiry Date: </label>
                            <input
                                type='Date'
                                value={expiryDate}
                                name="expiryDate"
                                onChange={this.onChange}
                            />
                        </div>
                    
                        <center>
                            <button onClick={heading === "Edit " ? this.editCoupon : this.saveCoupon}>{heading}</button>
                        </center>
                </form>
            </div>
        )
        // if(couponCode==='' && discount==='' && issueDate==='' && expiryDate==='')
        //     temp=true;
    }
}
AddCoupon.propTypes={
    createCoupon:PropTypes.func,
    coupons:PropTypes.array,
    updateCoupon:PropTypes.func
}
export default AddCoupon;