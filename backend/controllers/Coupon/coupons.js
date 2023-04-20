const Coupon = require("../../models/Coupon");
const User=require("../../models/Admin");
const { body, validationResult } = require('express-validator');
// var startDate;
const getAllCoupons=async(req,res)=>{
    try{
        console.log("get all coupons ...");
        const coupons=await Coupon.find({}).populate("user");
        if(coupons.length==0){
            res.status(200).json({message:"No Coupon Record Found"});
        }
        res.status(200).json({coupons});
    }
    catch(err){
        console.log(err);
    } 
};

const getCouponById=async(req,res)=>{
    const id=req.params.id;
    try{
        console.log("get coupon by id ...");
        const coupon=await Coupon.findOne({_id:id});
        if(!coupon){
            res.status(200).json({message:"No Coupon Found"});
        }
        else{
            console.log(coupon);
            res.status(200).json({coupon});
        }
    }catch(error){
        console.log(error);
    }
};

const isActive=async(req,res)=>{
    try{
        console.log("get all active coupons ...");
        coupon=await Coupon.find({status:"Active"});
        console.log(coupon);
        res.status(200).json({coupon});
    }catch(error){
        console.log("error",error);
        res.status(400).json(error);
    }
};

const addCoupon=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        console.log("add new coupon ...");
        const user=req.params.id;
        console.log(req.body);
        const { couponCode,discount,issueDate,expiryDate}=req.body;
        
        const existingUser=await User.findOne({_id:user});
        if(!existingUser){
            res.status(400).json({message:"No Admin Found"});
        }
        else{
            const coupon=new Coupon({
                couponCode,discount,
                issueDate,expiryDate,
                user
            });
           
            await coupon.save();
            existingUser.coupons.push(coupon._id);
            await existingUser.save();
            res.status(200).json({coupon});
        }
    }
    catch(error){    
        console.log(error);
        res.status(500).json({message:error});
    }
};

const deleteById=async(req,res)=>{

    try{
        console.log("delete a coupon ...");
        
        const id=req.params.id;
        const coupon=await Coupon.findOne({_id:id});
        console.log(coupon);
        // coupon=await Coupon.findByIdAndRemove(id);
        if(!coupon){
            return res.status(500).json({message:"Unable to Delete....not found"});
        }
        else{
            await Coupon.findByIdAndRemove(id);
            // Coupon.deleteOne({_id:id});
            
            return res.status(200).json({message:"Successfully Deleted. "});
            location.reload();
        }
    }
    catch(error){
        return console.log(error);
    }
    
};

const updateCoupon=async(req,res)=>{
    try{
        console.log("update coupon ...");
        const {couponCode,discount,issueDate,expiryDate}=req.body;
        const id=req.params.id;
        // console.log(discount);
        let coupon=await Coupon.findOne({_id:id});
        if(!coupon){
            console.log("No such Coupon Found");
            return res.status(400).json({message:"Unable to Update....No such Coupon Found"});
        }
        else{
            console.log("coupon exist");
            // coupon=await Coupon.updateOne({_id:id},{$set:{couponCode:couponcode,discount:dis,issueDate:issueDate,expiryDate:expiryDate}});
            let coupon;
            coupon=await Coupon.findByIdAndUpdate(id,{
            couponCode,discount,issueDate,expiryDate});
            console.log("coupon value set");
            return res.status(200).json({coupon});
        }
        // let coupon;
        // coupon=await Coupon.findByIdAndUpdate(id,{
        // couponCode,status,discount,expiryDate
        // });
    }
    catch(error){
        return console.log(error);
    }
   
};

module.exports={getAllCoupons,getCouponById,addCoupon,deleteById,updateCoupon,isActive};