const mongoose=require('mongoose'); 

const uri="mongodb://127.0.0.1:27017/couponDB";

const connectDB=()=>{
    console.log("connecting to db ... ");
    return mongoose.connect(uri);
};

module.exports=connectDB;