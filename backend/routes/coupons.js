const express = require('express');
const router=express.Router();
const {body}=require('express-validator');

const{
    getAllCoupons,
    getCouponById,
    addCoupon,
    deleteById,
    updateCoupon,
    isActive

}=require("../controllers/coupons");

const{verifyLogin}=require("../middleware/verifyLogin");

// Coupons

router.route("/").get(verifyLogin,getAllCoupons);
router.route("/getCoupon/:id").get(verifyLogin,getCouponById);
router.route("/isActive").get(verifyLogin,isActive);

router.route("/add/:id").post(verifyLogin,addCoupon);
router.route("/delete/:id").delete(verifyLogin,deleteById);
router.route("/edit/:id").put(verifyLogin,updateCoupon);

module.exports=router;