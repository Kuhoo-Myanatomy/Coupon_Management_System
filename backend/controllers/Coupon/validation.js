const {check}=require('express-validator');

const couponValidation=[
    check('couponCode').isAlphanumeric().not().isEmpty().trim().withMessage("Can't be blank"),
    check('discount').isNumeric().custom((value)=>{
        // console.log(typeof (value));
        if(value>0){
            return true;
        }
        throw new Error("Enter some positive discount value");
    }),
    // check('issueDate').isDate(),
    check('issueDate').custom((value,{req})=>{
        if(value=="")
            throw new Error("Can't be blank");
        const enteredDate=new Date(value);
        let today=new Date();
        if(enteredDate>today){
            return true;
        }
        throw new Error("Issue Date can't be of back date.");
    }),

    check('expiryDate').custom((value,{req})=>{
        if(value=="")
            throw new Error("Can't be blank");
        const enteredDate=new Date(value);
        let today=new Date();
        if(enteredDate>today){
            return true;
        }
        throw new Error("Expiry Date should be after issue date");
    })
]

module.exports=couponValidation;