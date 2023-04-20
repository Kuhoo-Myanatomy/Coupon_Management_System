import { loginUser } from "../../../redux/actions/useractions"; 
const mapStateToProps=(state)=>{
    console.log("State",state);
    return {
        token:state.token
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        loginUser:(state)=>dispatch(loginUser(state)),
    }
}
export {mapDispatchToProps,mapStateToProps}