import { deleteCoupon } from "../../redux/actions/actions";

const mapStateToProps=(state)=>{
    return {
        // state,
        coupons:state.coupons,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        deleteCoupon:(_id)=>{dispatch(deleteCoupon(_id))},
    }
}
export {mapStateToProps,mapDispatchToProps}