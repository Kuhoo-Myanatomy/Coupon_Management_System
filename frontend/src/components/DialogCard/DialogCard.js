import React, {Component} from "react";

class DialogCard extends Component{
    constructor(props){
        super(props)
        
        this.state={

        }
    }
    render(){
        
        return(
                <div className='box'>
                    <form>
                        <h2 className='center'> Coupon Details</h2>
                            <div>
                                <label>Coupon Code: </label>
                                <input
                                    type='text'
                                    value=""
                                />
                            </div>
                            <div>
                                <label>Discount: </label>
                                <input
                                    type='Number'
                                    value=""
                                />
                            </div>
                            
                        
                            <center>
                            <button>Buttom</button>
                                {/* <button onClick={heading === "Edit " ? this.editCoupon : this.saveCoupon}>{heading}</button> */}
                            </center>
                    </form>
                </div>
        )
    }
}

export default DialogCard

  