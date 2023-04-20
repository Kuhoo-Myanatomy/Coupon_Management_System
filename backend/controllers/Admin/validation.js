const {check}=require('express-validator');

const userValidation=[
    check('username').not().isEmpty().trim().withMessage("Username can't be blank"),
    check('email').isEmail().normalizeEmail({"gmail_remove_dots":false}).withMessage("Valid Email required"),
    check('password').isLength({min:8}).isAlphanumeric().withMessage("alphanumeric of min 8 characters"),
]

module.exports=userValidation;