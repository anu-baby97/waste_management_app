var mongoose=require('mongoose')
mongoose.connect()
var schema=mongoose.Schema
var request_schema=new schema({
    name:String,
    phno:Number,
    type:String,
    quantity:String,
     
});

var request_data=mongoose.model('request_data',request_schema)

module.exports=request_data 
