var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Anu:LTCgaj379@librarydb.xu7w1.mongodb.net/Waste_Management_DB?retryWrites=true&w=majority')
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
