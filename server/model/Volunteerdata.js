var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/WasteManagementDB')
var schema=mongoose.Schema
var volunteer_schema=new schema({
    address:String,
    phno:Number,
    type:String,
    quantity:String,
     
});

var volunteer_data=mongoose.model('volunteer_data',volunteer_schema)

module.exports=volunteer_data 
