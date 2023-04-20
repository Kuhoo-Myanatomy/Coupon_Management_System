const express=require('express');
const connectDB = require('./db/connect');
const app=express();
const port=5000;
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }))
const coupons_routes=require("./routes/coupons");
const users_routes=require("./routes/users");

app.use(express.json());
app.use("/api/coupons",coupons_routes);
app.use("/api/users",users_routes);

app.get("/",(req,res)=>{
    res.send("Server");
});

const start=async ()=>{
    try{
        await connectDB().then(()=>{
            console.log("database connected");
        }).catch((error)=>{
            console.log(error);
        });
        app.listen(port,()=>{
            console.log(`server running on ${port}`)
        });
    }
    catch(error){
        console.log(error);
    }
};
start();