import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;

const empSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    
        },
    
        email:{
            type: String,
            trim: true,
            required: true,
            unique: true,
        
            },
    
        password:{
            type: String,
            required: false,
            min:6,
            max:64,
            
        },
        about:{
            type: String,
            trim: true,
            },
    
        address:{
        type: String,
         trim: true,
       
            
                },  

         category:{
            type: ObjectId,
            ref:"Category",
            required:true,

         },

         photo:{
            data:Buffer,
            contentType: String,

         },

         Attendance:{
            required:false,
            type:Boolean,
         },         
         
},{timestamps:true}
);

export default mongoose.model('Employee',empSchema);