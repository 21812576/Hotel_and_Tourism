const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const ordersSchema = new Schema({
    
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
    }
})

const Order = mongoose.model("Order", ordersSchema);

module.exports = Order;
