const jwt=require("jsonwebtoken");
const secret="secret@123";


const verifyLogin=async(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization){
        console.log("Token not found");
        res.status(400).json({message:"Token not found...Unauthorised Access"});
    }
    const split=authorization.split(" ");
    if(split.length!=2){
        console.log("Invalid Token");
        res.status(400).json({message:"Invalid Token"});
    }
    const token=split[1];
    // console.log(req.body);
    // console.log(authorization,split,token);
    try{
        jwt.verify(token,secret);
        console.log("Authenticated User Logged In.......");
        // res.status(200).json({status:"success",message:"Welcome ...."});
        next();
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:"Unauthorised Access"});
    }
    // next();
}

module.exports={verifyLogin};