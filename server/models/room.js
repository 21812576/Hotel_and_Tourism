import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;

const roomSchema = new mongoose.Schema({

    name:{

        type:String,
        trim:true,
        required:true,
        maxlength: 160,

    },
    slug: {

        type:String,
        lowercase:true,
    },
    description :{

        type:String,
        required:true,
        maxlength:2000,

    },
    price:{

        type:Number,
        trim:true,
        required:true,
    },
    category:{

        type:ObjectId,
        ref:"Category",
        required:true,

    },
    quantity:{
       type:Number,

    },
   
    photo:{

        data:Buffer,
        contentType:String,

    },
   
  },
    {timestamps:true}
  );

  export default mongoose.model('room',roomSchema);
  mongoose.model('Category', roomSchema);
