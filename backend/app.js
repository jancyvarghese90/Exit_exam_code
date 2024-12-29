const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
require('dotenv').config();
const connectDb=require('./db/connection')
const feedbackModel=require('./modules/feedbackModel')
const feedbackRouter=require('./routers/feedbackRouter')

const app=express();
app.use(express.json());
app.use(cors());


app.use('/feedback',feedbackRouter)
PORT=process.env.port;
app.listen(PORT,()=>{
    console.log(`server is running in the port  ${PORT}`)
})
