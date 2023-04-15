import { createUser } from "../../../redux/actions/useractions"; 

const mapStateToProps=(state)=>{
    console.log("State",state);
    return {
        users:state.users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createUser:(state)=>dispatch(createUser(state)),
    }
}

export {mapDispatchToProps,mapStateToProps}