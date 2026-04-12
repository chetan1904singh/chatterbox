import mongoose from "mongoose"
const chatModel=new mongoose.Schema({
   chatName:{
    type:String,
    trim:true
   },
   isGroup:{
        type:Boolean,
        default:false
   },
   users:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Users",
   }],
   latestMsg:{
    type:mongoose.Schema.Types.ObjectId,
      ref:"Message",
   },
   grpAdmin:{
     type:mongoose.Schema.Types.ObjectId,
      ref:"User",
   }

},{timeStamps:true})

export const usermodel=mongoose.model("usermodel",chatModel);