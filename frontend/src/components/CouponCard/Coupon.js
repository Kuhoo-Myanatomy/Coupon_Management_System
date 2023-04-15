import React, {Component} from "react";
import './card.css'
import PropTypes from 'prop-types';
import Add from '../Add/index';
import DialogCard from "../DialogCard/DialogCard";

class Coupon extends Component{
    constructor(props){
        super(props)
        
        this.state={
            couponCode:'default',
            discount:0,
            issueDate:'',
            expiryDate:'',
            // showMyComponent: false,
            update:false,
            isDialogOpen:false

        }
    }
    handleDialog=()=>{
        const {isDialogOpen}=this.state;
        this.setState({isDialogOpen:!isDialogOpen});
    }
    // handleShowButton=(val)=>{
    //     this.setState({showMyComponent:val}) 
    // }
    handleEditButton=(val)=>{
        this.setState({update:true})    
    }
    handleDelete=()=>{
        console.log("Delete",this.props);
        console.log(this.props._id);
        this.props.deleteCoupon(this.props._id);
    }
    render(){
        // console.log(this.props);
        
        // const showMyComponent=this.state
        // const{_id,couponCode,discount,issueDate,expiryDate}=this.props;
        const{_id,couponCode,discount,issueDate,expiryDate}=this.props;

        let dateObj = new Date(issueDate);
        let day = dateObj.getUTCDate().toString().padStart(2, "0");
        let month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
        let year = dateObj.getUTCFullYear().toString();
        const formattedissueDate = `${day}/${month}/${year}`;
        // console.log(formattedissueDate);
        
        dateObj = new Date(expiryDate);
        day = dateObj.getUTCDate().toString().padStart(2, "0");
        month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
        year = dateObj.getUTCFullYear().toString();
        const formattedexpiryDate = `${day}/${month}/${year}`;
        // console.log(formattedexpiryDate);
        // if(showMyComponent)
        //     console.log('hell0');
            // console.log(this.props.location.state);
        const {isDialogOpen}=this.state;
        return(
            // key={couponCode.id}
            <div>
            {this.state.update?<Add _id={_id}
            couponCode={couponCode} 
            discount={discount} 
            issueDate={issueDate} 
            expiryDate={expiryDate}
            eupdate={true}
            ></Add>:
            <div className="card-box" >
                <div className="container">
                    <h3>Couponcode:   <pre>  {couponCode}</pre></h3>
                    <h4>Discount: <span>{discount}</span></h4>
                    <h4>Issuedate: <span>{formattedissueDate}</span></h4>
                    <h4>Expirydate: <span>{formattedexpiryDate}</span></h4>
                    

                <div className="btn">
                <button onClick={this.handleShowButton} >Show</button>
                    {/* <button><Link to="/add">Update</Link></button> */}
                    <button onClick={this.handleEditButton} >Update</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
                {/* {isDialogOpen===true?
                <DialogCard ></DialogCard>
                :null} */}
            </div>
            </div>
            }
        </div>
        )
    }
}
Coupon.propTypes={
    deleteCoupon:PropTypes.func,
}

export default Coupon

  