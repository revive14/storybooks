const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('<h1>Hamza Shaikh</h1>')
})




app.listen(port,()=>{
    console.log(`server started at port ${port} `)
});