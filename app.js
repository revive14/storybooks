const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
const auth = require('./routes/auth');

//Passport Config
require('./config/passport')(passport);




const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('<h1>Hamza Shaikh</h1>')
})


//USE Routes
app.use('/auth', auth);

app.listen(port,()=>{
    console.log(`server started at port ${port} `)
});