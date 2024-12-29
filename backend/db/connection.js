const mongoose=require('mongoose');
require('dotenv').config();

const connectDb=mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log('connection established');
})
.catch((err)=>{
    console.log(err)
})
module.exports=connectDb;


