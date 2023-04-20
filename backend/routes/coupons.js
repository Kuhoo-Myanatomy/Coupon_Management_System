const express = require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');

const{
    getAllCoupons,
    getCouponById,
    addCoupon,
    deleteById,
    updateCoupon,
    isActive

}=require("../controllers/Coupon/coupons");

const{verifyLogin}=require("../middleware/verifyLogin");
const couponValidation=require("../controllers/Coupon/validation");
// Coupons

router.route("/").get(verifyLogin,getAllCoupons);
router.route("/getCoupon/:id").get(verifyLogin,getCouponById);
// router.route("/delete/:id").delete(verifyLogin,deleteById);
router.route("/edit/:id").put(verifyLogin,updateCoupon);
router.route("/add/:id").post(verifyLogin,couponValidation,addCoupon);


router.route("/delete/:id").delete(deleteById);

// router.route("/").get(getAllCoupons);
// router.route("/getCoupon/:id").get(getCouponById);
router.route("/isActive").get(verifyLogin,isActive);
// router.route("/api/coupons/add").post(addCoupon);
// router.route("/add/:id").post(
    // [
    //     body('couponCode').isAlphanumeric().not().isEmpty().trim().withMessage("Can't be blank"),
    // ],
    // couponValidation,verifyLogin,addCoupon);
    // couponValidation,addCoupon);


// router.route("/edit/:id").put(updateCoupon);

module.exports=router;