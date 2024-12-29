const express=require('express');
const mongoose=require('mongoose')
const feedbackModel=require('../modules/feedbackModel')
const router=express.Router();
router.use(express.json());



router.get('/',async(req,res)=>{
    try {
        var data=await feedbackModel.find();
       return res.status(200).json({message:"data displayed",data})
    } catch (error) {
      console.log(error)  
      return res.status(500).json({error})
    }

})

router.post('/add',async(req,res)=>{

    try {
        const newFeedback = new feedbackModel(req.body);
        await newFeedback.save();
        return res.status(200).json({ message: "Data added", data: newFeedback });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
})

router.put('/edit/:_id',async(req,res)=>{
    try {
      await feedbackModel.findByIdAndUpdate(req.params._id,req.body) 
      return res.status(200).json({message:"Updated successfully"})  
    } catch (error) {
        console.log(error)  
        return res.status(500).json({error})     
    }
})

router.delete('/delete/:_id',async(req,res)=>{
    try {
      await feedbackModel.findByIdAndDelete(req.params._id) 
      return res.status(200).json({message:"Deleted successfully"}) 
    } catch (error) {
        console.log(error)  
        return res.status(500).json({error})     
    }
})








module.exports=router;