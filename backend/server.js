import express from 'express'
import dotenv from 'dotenv'
const app=express();

dotenv.config()
app.get('/',(req,res)=>{
      res.send("app running");
})
app.get('/api/chats',(req,res)=>{
      res.send("CHATS LOADED FROM BACKEND");
})
const PORT= process.env.PORT || 5000;
app.listen(PORT,console.log("Server started on PORT 5000"))