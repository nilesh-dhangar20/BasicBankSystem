const expess=require('express');

const transaction =require('../dbs/transaction');
const Customer = require('../dbs/customers');
const route=expess.Router();


route.get('/customers',async(req,res)=>{
    try{
    const data= await  Customer.find(); 
    res.send(data);     
    }
    catch(err){
        console.log(err);
    }
})

route.post('/transfer',async(req,res)=>{
    try{
        const{from,to,amount}=req.body;
        console.log(req.body);
    
        const sender=await Customer.findOne({email:req.body.from}).exec();
        console.log(sender);
        let senderb=parseInt(sender.balance);
        console.log(amount);
        console.log("senderb"+  senderb)
        if(parseInt(amount)>senderb  || amount<=0)
        {
            res.status(401).send();
            return;
        }
       else{
        let senderbalance=(sender.balance)-parseInt(amount);
        await Customer.findByIdAndUpdate({_id:sender._id},{$set:{balance:senderbalance}});
        const reciever=await Customer.findOne({email:req.body.to}).exec();
        console.log(reciever);
        const temp2=reciever.balance
        const recieverbalance= temp2 + parseInt(amount);
        await Customer.findByIdAndUpdate({_id:reciever._id},{$set:{balance:recieverbalance}});
      const transaction_between=  await  new transaction(
            {
                sender:from,
                reciever:to,
                amount:amount,
                date:Date.now()
            }
        );
        await transaction_between.save();
        res.status(200).send();
       }
    }
    catch(err)
    {
        console.log(err);
    }
})


route.get('/transactionhistory',async(req,res)=>{
    try{
        const data=await transaction.find().sort({ date: -1 });

        res.send(data);
    }
    catch(err)
    {
        console.log(err);
    }
})

module.exports=route;