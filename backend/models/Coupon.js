const mongoose=require('mongoose');
const moment=require('moment');
// var add=30*24*60*60*1000;
var date = new Date().getTime(); // Now
// date.setDate(date.getDate() + 30); // Set now + 30 days as the new date
// console.log(date);
// db.coupons.find({staus:"active"},{coupontype:1})_id
// date=date.getTime()
var dateformat=moment(date,'DD-MM-YYYY');
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
    // status:{
    //     type:String,
    //     default:"Active",
    // },
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
        // default:Date.now
        default:dateformat
    },
    expiryDate:{
        type:Date,
        required:true,
        // default:date,
        default:dateformat
        
        // default:Date.today().add(30).days()
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
// CouponSchema.pre('save',function(next){
//     console.log("pre..");
//     console.log(this.expiryDate);
//     var date = new Date();
//     date.setDate(date.getDate() + 30);
//     this.expiryDate=date;
//     next();
    
// });
module.exports=mongoose.model("Coupon",CouponSchema);