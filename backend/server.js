import express from 'express'
import dotenv from 'dotenv'
const app=express();

dotenv.config()
app.get('/',(req,res)=>{
      res.send("app running");
})
app.get('/home',(req,res)=>{
      res.send("home");
})
const PORT= process.nextTick.PORT || 5000;
app.listen(PORT,console.log("Server started on PORT 5000"))