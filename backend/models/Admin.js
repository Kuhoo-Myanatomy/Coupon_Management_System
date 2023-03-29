const mongoose=require('mongoose');
const validator=require('validator');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username Required"]
    },
    email:{
        type:String,
        required:[true,"Email id is mandatory to proceed"],
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is inValid");
            }
        }
    },
    password:{
        type:String,
        required:[true,"Please enter ypur password"],
        minlength:8
    },
    coupons:[{
        type:mongoose.Types.ObjectId,
        ref:"Coupon",
        required:true
    }]
});

module.exports=mongoose.model("User",UserSchema);

// export default mongoose.model("User", UserSchema);