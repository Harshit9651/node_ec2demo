const express = require('express');
const app = express();
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log(`app listing on port number ${process.env.PORT}`)
})
app.get('/',(req,res)=>{
    res.send("hii this is new node_demo project for testing purpose ")
})
app.get('/hello',(req,res)=>{
    res.send("you are in newxt Route")
})