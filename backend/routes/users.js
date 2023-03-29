const express = require('express');
const router=express.Router();

const{
    userLogin,
    userSignUp,
    getAllUsers,
    welcomeUser
}=require("../controllers/users")

const{verifyLogin}=require("../middleware/verifyLogin");

// User

router.route("/").get(verifyLogin,getAllUsers);

router.route("/login").post(userLogin);
router.route("/signup").post(userSignUp);
router.route("/userWelcome").post(welcomeUser);
module.exports=router;