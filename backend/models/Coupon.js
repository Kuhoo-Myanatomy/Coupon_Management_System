const mongoose=require('mongoose');
var add=30*24*60*60*1000;

const CouponSchema=new mongoose.Schema({
    couponCode:{
        type:String,
        required:true
    },
    // coupontype:{
    //     // for fixed price or percentage
    //     type:String,
    //     required:true
    // },
    status:{
        type:String,
        default:"Active",
    },
    // minamount:{
    //     type:Number,
    //     default:1000,
    // },
    // maxusage:{
    //     type:Number,
    //     default:50,
    // },
    discount:{
        type:Number,
        required:true,
        // default:0
    },
    issueDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    expiryDate:{
        type:Date,
        required:true,
        default:Date.now
        // $dateAdd:
        //     {
        //         startDate: "$issueDate",
        //         unit: "day",
        //         amount: 30
        //     }
    },
    // _id:{
        // type:String
    // },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    }
});

module.exports=mongoose.model("Coupon",CouponSchema);