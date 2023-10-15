const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const financeSchema = new Schema({
    
    item_code:{
        type:String,
        required:true
    },

    product_name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    item_type:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
})

const Finance = mongoose.model("Finance", financeSchema);

module.exports = Finance;
