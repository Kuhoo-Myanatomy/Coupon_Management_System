import React, { Component } from 'react'

export class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            couponCode:this.props.couponCode,
            discount:this.props.discount,
            issueDate:this.props.issueDate,
            expiryDate:this.props.expiryDate,
            couponCodeClicked:false,
            discountClicked:false,
            issueDateClicked:false,
            expiryDateClicked:false,
            addflag:this.props.addflag,
        }
    }
    onChange = (e) => {
        console.log("Onchange");
        this.setState({ 
            [e.target.name]: e.target.value}); 
      };
    
  render() {
    const {couponCode,discount,issueDate,expiryDate,couponCodeClicked,discountClicked,issueDateClicked,expiryDateClicked,addflag}=this.state
    // const {addflag}=this.props.addflag;
    console.log(addflag);
    let heading="Add ";
    if(!addflag){
        heading="Edit ";
    }
    const isDisabled = [couponCode,discount,issueDate,expiryDate,].every((value) => value !== "");
        const message = isDisabled
        ? "": "Please fill the details to enable the submit button";
    return (
      <div>form
        <form>
            <h2 className='center'>{heading} Coupon Details</h2>
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
                                value={issueDate}
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
                                value={expiryDate}
                                name="expiryDate"
                                onChange={this.onChange}
                                onClick={() => this.setState({ expiryDateClicked: true })}
                            />
                            {expiryDateClicked && expiryDate.trim().length===0?<p>This field can't be left blank</p>:null}
                </div>
            
                <center>
                    {addflag?<button onClick={this.addCoupon} type="submit" disabled={!isDisabled} title={message} style={{ cursor: !isDisabled? "not-allowed" : "pointer",opacity: !isDisabled ? 0.5 : 1, }}>Save</button>:
                    <button onClick={this.editCoupon} type="submit" disabled={!isDisabled} title={message} style={{ cursor: !isDisabled? "not-allowed" : "pointer",opacity: !isDisabled ? 0.5 : 1, }}>Save</button>}
                </center>
        </form>
      </div>
    )
  }
}

export default Form