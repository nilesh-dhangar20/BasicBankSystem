const mongoose=require('mongoose');
const userSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        last:{
           type:String,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        balance:{
            type:Number,
            require:true,
        }
    }
);
const Customer=mongoose.model("Customer",userSchema);
module.exports=Customer;
