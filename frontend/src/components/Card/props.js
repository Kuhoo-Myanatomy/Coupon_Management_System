import { getCouponById } from "../../redux/actions/actions";

const mapStateToProps=(state)=>{
    console.log(state);
    return {
        // state
        // coupons:state.coupons,
        // _id:state.coupons._id
        // details:state.details.data.coupon
        details:state.details
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getCouponById:(_id)=>{dispatch(getCouponById(_id))},
    }
}
export {mapStateToProps,mapDispatchToProps}