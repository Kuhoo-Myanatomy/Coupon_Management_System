import { createCoupon,updateCoupon } from "../../redux/actions/actions"; 

const mapStateToProps=(state)=>{
    console.log("Add",state);
    return {
        coupons:state.coupons
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createCoupon:(state)=>dispatch(createCoupon(state)),
        updateCoupon:(state)=>dispatch(updateCoupon(state))
    }
}

export {mapDispatchToProps,mapStateToProps}