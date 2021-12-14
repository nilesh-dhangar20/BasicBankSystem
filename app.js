const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
require("./conn/connection");
app.use(express.json());

app.use(require('./Router/router'));
const customer=require('./dbs/customers');
const transaction=require('./dbs/transaction');
const port= process.env.PORT || 5000;
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client",'build','index.html'));
    })
}
app.listen(port,()=>{
console.log("listening");
})