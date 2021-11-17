var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/WasteManagementDB')
var schema=mongoose.Schema
var register_schema=new schema({
    name:String,
    address:String,
    phno:Number,
    uname:String,
    pass:String, 
    role:String
});

var register=mongoose.model('register',register_schema)

module.exports=register; 
