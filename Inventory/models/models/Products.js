const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const productsSchema = new Schema({

    item_code:{
        type:String,
        required:true
    },
    
    product_name:{
        type:String,
        required:true
    },
    remaining_quantity:{
        type:Number,
        required:true
    },
    item_type:{
        type:String,
        required:true
    }
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;

