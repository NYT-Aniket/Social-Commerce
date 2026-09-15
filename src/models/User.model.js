const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3,
        maxlength : 30, 
    },
    email : {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password : {
        type:String,
        required:true,
        select:false,
    },
    avatar : {
        type:String,
        default:null,
    },
    bio:{
        type:String,
        maxlength:150,
        default:"",
    },
    role:{
        type:String,
        enum:["customer","creator","seller","admin"],
        default:"customer",
    },
    isVerified :{
        type:Boolean,
        default:false,
    },
    isDeleted :{
        type:Boolean,
        default:false,
        select:false,
    },
},{
    timestamps:true
});

module.exports = mongoose.model("User",UserSchema)