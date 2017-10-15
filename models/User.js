const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    googleID:{
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    LastName: {
        type: String
    },
    image:{
        type: String
    }
})

//create collection and add schema
mongoose.model('users',UserSchema)