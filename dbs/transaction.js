const mongoose=require('mongoose');
const transactionTable=mongoose.Schema(
    {
        sender:{
            type:String,
        },
        reciever:{
            type:String,
        },
        amount:{
            type:Number,
        },
        date: {
            type: Date,
            default: Date.now(),
          },
        
        
    }
);
const transaction=mongoose.model("transaction",transactionTable);
module.exports=transaction;