var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Anu:LTCgaj379@librarydb.xu7w1.mongodb.net/Waste_Management_DB?retryWrites=true&w=majority'
, () => console.log("Database Connected"))
var schema=mongoose.Schema
var request_schema=new schema({
    login_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'login_data',
        required:true
    },
    type:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        required:true
    }
     
});

var waste_data=mongoose.model('waste_data',request_schema)

module.exports=waste_data; 
