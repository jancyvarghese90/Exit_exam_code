const mongoose=require('mongoose');

const feedbackSchema=mongoose.Schema({
    // courseid:{type:Number},
    coursename:{type:String,unique:true},
    courseduration:{type:String},
    feedbackcomment:{type:String},
    rating:{type:String}

})

const feedbackModel=mongoose.model('feedbackdatas',feedbackSchema);


module.exports=feedbackModel;