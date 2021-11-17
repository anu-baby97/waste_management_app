var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/WasteManagementDB')
var schema=mongoose.Schema
var recycler_schema=new schema({
    
    type:String,
    quantity:String,
     
});

var recycler_data=mongoose.model('recycler_data',recycler_schema)

module.exports=recycler_data 
