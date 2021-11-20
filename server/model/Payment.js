var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Anu:LTCgaj379@librarydb.xu7w1.mongodb.net/Waste_Management_DB?retryWrites=true&w=majority')
var Schema=mongoose.Schema
const paymentschema=new Schema({
    login_id:{
        type:Schema.Types.ObjectId,
        ref:"login_data",
        required:true
    },
    waste_id:{
        type:Schema.Types.ObjectId,
        ref:"waste_data",
        required:true
    },
    amount:{
        type:String,
        required:true
    }
})
var payment_data=mongoose.model('payment_data',paymentschema)
module.exports=payment_data;