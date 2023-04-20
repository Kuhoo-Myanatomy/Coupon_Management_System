import React, {Component} from "react";
import './card.css'
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { Dialog, DialogTitle, DialogActions,DialogContent } from "@mui/material";
class Coupon extends Component{
    constructor(props){
        super(props)      
        this.state={
            couponCode:'',
            discount:'',
            issueDate:'',
            expiryDate:'',
            showMyComponent: false,
            update:false,
            isDialogOpen:false,
            showDialog:false,
        }
    }
    handleShowDialog = () => {
        this.setState({ showDialog: true });
    }
    
    handleCloseDialog = () => {
        this.setState({ showDialog: false });
    }
    handleEditButton=(val)=>{
        this.setState({update:true})    
    }
    handleDelete=()=>{
        this.setState({ showDialog: false });
        console.log("Delete",this.props);
        console.log(this.props._id);
        this.props.deleteCoupon(this.props._id);
        toast.success("Coupon Deleted Successfully");
    }
    
    render(){
        const{_id,couponCode,discount}=this.props;
        const show=false,update=true;

        
        return(
            <div className="card-box" >
            <ToastContainer />
                <div className="container">
                    <h3>    {couponCode}</h3>
                    {/* <h3>Couponcode:   <pre>  {couponCode}</pre></h3> */}
                    <h4><span> &#8377; {discount}</span></h4>

                <div className="btn">
                <Link to={`/coupon/${_id}?update=${show}`}><button style={{width: "50px"}} title="Show"><i class="fa fa-eye"></i>  </button></Link>
                <Link to={`/coupon/${_id}?update=${update}`}><button style={{width: "50px"}} title="Update"><i class="fa fa-pencil"></i>  </button></Link>

                <button title="Delete" style={{width: "50px"}} onClick={this.handleShowDialog}><i class="fa fa-trash" ></i></button>
                <Dialog open={this.state.showDialog} onClose={this.handleCloseDialog}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>Are you sure you want to delete?</DialogContent>
                <DialogActions>
                    <button onClick={this.handleCloseDialog}>Cancel</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </DialogActions>
                </Dialog>
                </div>
            </div>
            </div>
        )
    }
}
Coupon.propTypes={
    deleteCoupon:PropTypes.func,
}

export default Coupon

  