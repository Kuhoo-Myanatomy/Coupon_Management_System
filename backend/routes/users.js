const express = require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');

const{
    userLogin,
    userSignUp,
    getAllUsers,
    welcomeUser
}=require("../controllers/Admin/users")

const{verifyLogin}=require("../middleware/verifyLogin");
const userValidation=require("../controllers/Admin/validation");

// User

router.route("/").get(getAllUsers);
// router.route("/").get(verifyLogin,getAllUsers);
router.route("/login").post(userLogin);
router.route("/signup").post(userValidation,userSignUp);
router.route("/userWelcome").post(welcomeUser);

module.exports=router;