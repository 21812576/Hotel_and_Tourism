const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerPaymentShema = new Schema({
    //these are a attribute of the students
    name : {
        type : String,
        required : true
    }, 
    age : {
        type : Number,
        required :true  
    },
    gender : {
        type : String,
        required : true
    }
});

//send data to database document
//-- there are two parameters they are document name{Table name} and studentSchema
const CustomerPayment = mongoose.model("customerPayment" , customerPaymentShema);

//at the end we need to export the model document
module.exports = CustomerPayment;