import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;

const reserveSchema= new mongoose.Schema({

    name:{

        type:String,
        trim:true,
        required:true,
        maxlength: 160,

    },
    flug: {

        type:String,
        lowercase:true,
    },
    checkIn:{

        type:Date,
        required:true,
        
    },
    checkOut:{

        type:Date,
        required:true,
        

    },
    count:{

        type:Number,
        trim:true,
        required:true,
    },
    photo:{

        data:Buffer,
        contentType:String,

    },
    booking:{

        type:ObjectId,
        ref:"Booking",
        required:true,

    },
  
  },
    {timestamps:true}
  );

  export default mongoose.model('Reserve',reserveSchema);
  mongoose.model('Booking', reserveSchema);
