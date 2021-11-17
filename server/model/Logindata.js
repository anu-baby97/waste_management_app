var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/WasteManagementDB')
var schema=mongoose.Schema
var login_schema=new schema({
    uname:String,
    pass:String,

});

var login=mongoose.model('login',login_schema)

module.exports=login 
