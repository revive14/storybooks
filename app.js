const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//Load User Model
require('./models/User');

//Passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');

//load keys 
const keys = require('./config/keys');

//Map global Promises
mongoose.Promise = global.Promise

//Mongoose Connection
mongoose.connect(keys.mongoURI, {
    useMongoClient: true
})
    .then(()=>{ console.log('Mongo DB CONNECTED')})
    .catch(err => console.log(err))

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Hamza Shaikh</h1>')
})

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Set global vars
app.use((req,res,next)=>{
    res.locals.user = req.user || null;
    next();
});

//USE Routes
app.use('/auth', auth);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server started at port ${port} `)
});