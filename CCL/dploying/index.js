const express=require("express");
const app=express();

app.use(express.static("public"))

app.listen(4001,()=>{
    console.log("chal rha hai")
})