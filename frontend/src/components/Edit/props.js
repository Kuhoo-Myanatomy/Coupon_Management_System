import {updateCoupon,getCouponById } from "../../redux/actions/actions"; 

const mapStateToProps=(state)=>{
    console.log("Edit",state);
    return {
        // coupons:state.coupons
        details:state.details
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        updateCoupon:(state)=>dispatch(updateCoupon(state)),
        getCouponById:(_id)=>dispatch(getCouponById(_id))
    }
}

export {mapDispatchToProps,mapStateToProps}