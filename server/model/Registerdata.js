var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Anu:LTCgaj379@librarydb.xu7w1.mongodb.net/Waste_Management_DB?retryWrites=true&w=majority'
, () => console.log("Database Connected"))
var Schema = mongoose.Schema
var register_schema = new Schema({
    login_id: {
        type:Schema.Types.ObjectId,
        ref:"login_data",
        required:true
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
    //username and password not saved in register_data table and it will be saved in login_data table at the time of registration
});

var register = mongoose.model('register_data', register_schema)

module.exports = register;
