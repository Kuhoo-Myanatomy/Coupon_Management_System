import { createCoupon } from "../../redux/actions/actions"; 

const mapStateToProps=(state)=>{
    console.log("Add",state);
    return {
        coupons:state.coupons
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createCoupon:(state)=>dispatch(createCoupon(state)),
    }
}

export {mapDispatchToProps,mapStateToProps}