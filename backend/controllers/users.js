const User = require("../models/Admin");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const secret="secret@123";


const userSignUp=async(req,res)=>{
    try{
        console.log("Sign Up Here...");
        const {username,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(500).json({message:"User Already Exists with this email"});
        }

        const hashedPassword=bcrypt.hashSync(password);

        const user=new User({
            username,email,
            password:hashedPassword,
            coupons:[]
        });
        await user.save();
        console.log("User registered Successfully...")
        res.status(200).json({user});
    }
    catch(error){
        return console.log(error);
    }
}

const userLogin=async(req,res)=>{
    try{
        console.log("Login Here...");
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(500).json({message:"User does not exist"});
        }
        const isPasswordCorrect=bcrypt.compareSync(password,user.password);
        if(!isPasswordCorrect){
            return res.status(300).json({message:"Incorrect Password "});
        }
        if(user && isPasswordCorrect){
            
            const payload={name:user.username,email:user.email};
            const token=jwt.sign(payload,secret);
            console.log(token);
            res.cookie('login',token,{httpOnly:true});
            return res.status(200).json({message:"Login Succuessful",token,type:"Bearer"});
        }
    }
    catch(error){
        console.log(error);
    }   
};

const getAllUsers=async(req,res)=>{
    const Users=await User.find({}).populate("coupons");
    res.status(200).json({Users});
};

const welcomeUser=async(req,res)=>{
    // console.log(req.headers);
    const {authorization}=req.headers;
    const splitt=authorization.split(" ");
    const token=splitt[1];
    // console.log(req.body);
    // console.log(authorization,splitt,token);
    try{
        jwt.verify(token,secret);
        console.log("Authenticated");
        res.status(200).json({status:"success",message:"Welcome ...."});
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:"Unauthorised Access"});
    }
    // jwt.verify(req.body.token,secret,function(err,decoded){
    //     if(err){
    //         console.log(err);
    //         res.json({status:"failure"})
    //     }
    //     else
    //         res.status(200).json({status:"success",message:"Welcome ...."});
    // })
    // res.send("Hello")
};

module.exports={userSignUp,userLogin,getAllUsers,welcomeUser}