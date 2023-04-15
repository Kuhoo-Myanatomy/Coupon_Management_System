import React,{Component} from "react";
import Coupon from "../CouponCard/index";
import './show.css'
import PropTypes from 'prop-types'

class Show extends Component{
    constructor(props){
        super(props)
        this.state={
            coupons:[],
            // show:false,
        }
    }
    componentDidMount(){
        this.props.getCoupons();
    }
    // componentDidMount(){
        // axios.get('http://localhost:5000/api/users')
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res=>{
        //     console.log(res)
        //     this.setState({
        //         array:res.data
        //     })
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        // this.props.getCoupons();
    // }
    render(){
        console.log("Props ",this.props);

        return(
            <div>
            {
                this.props.coupons.map((coupon) => {
                    
                    return (
                        <Coupon 
                            // show={false}
                            _id={coupon._id}
                            couponCode={coupon.couponCode} 
                            discount={coupon.discount} 
                            issueDate={coupon.issueDate} 
                            expiryDate={coupon.expiryDate}>
                        </Coupon>
                    )}
                )
            }
            </div>
        )
    }
}
// const mapStateToProps=(state)=>{
//     return{
//         coupons:state.coupons,
//     }
// }

Show.propTypes={
    getCoupons:PropTypes.func,
    coupons:PropTypes.array
}

export default Show
// export default connect (mapStateToProps,{getCoupons})(Show)