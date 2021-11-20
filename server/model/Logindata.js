var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Anu:LTCgaj379@librarydb.xu7w1.mongodb.net/Waste_Management_DB?retryWrites=true&w=majority')
var Schema=mongoose.Schema
var login_schema=new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        required:true,
    }

});

var login=mongoose.model('login_data',login_schema)

module.exports=login 
