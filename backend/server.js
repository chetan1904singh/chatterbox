import express from 'express'
const app=express();

app.get('/',(req,res)=>{
      res.send("app running");
})

app.listen(5000,console.log("Server started on PORT 5000"))