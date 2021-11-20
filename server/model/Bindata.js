var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/WasteManagementDB')
var schema=mongoose.Schema
var binstatus_schema=new schema({
    bin_name:String,
    latitude:String,
    longtitude:String,
    place:String
     
},
{timestamps:true}
);

var binstatus_data=mongoose.model('binstatus_data',binstatus_schema)

module.exports=binstatus_data 
