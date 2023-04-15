import { getCoupons } from "../../redux/actions/actions"

const mapStateToProps=(state)=>{
    console.log("State",state);

    return {
        coupons:state.coupons
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        getCoupons:()=>dispatch(getCoupons())
    }
}

export {mapDispatchToProps,mapStateToProps};