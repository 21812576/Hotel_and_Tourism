import Reserve from "../models/reserve.js";
import Slugify from "slugify";


export const create = async(req, res)  => {

    try{

       //console.log(req.fields);
        //console.log(req.files);
       const {name, checkIn,checkOut,count} = req.fields;
      
     
      
        //validation
    switch(true){

        case !name.trim():
            res.json({error:"Name is required"});
        case !checkIn.trim():
            res.json({error:"checkIn is required"});
        case !checkOut.trim():
            res.json({error:"checkout is required"});
        case !count.trim():
            res.json({error:"Category is required"});
      

    }
     //make reservation
     const reserve = new Reserve({...req.fields,flug: Slugify(name)});   
    
     await reserve.save();
     res.json(reserve);


  }  catch (err){

        console.log(err);
        return res.status(400).json(err.message);
    }
};
export const list = async (req, res) => {

    try {

        const reserve=  await Reserve.find({})
        .populate("booking")
        .limit(12)
        .sort({createdAt: -1});

        res.json(reserve);

    } catch (err){

        console.log(err);
    }
};

export const read = async(req,res) => {

    try{
        const reserve = await Reserve.findOne({flug:req.params.flug})
        .select("-photo")
        .populate("booking");
        res.json(reserve);

    }catch(err){

        console.log(err);
    }
};

export const remove = async(req, res) => {
    try{
        const reserve = await Reserve.findByIdAndDelete(req.params.reserveId).select("-photo");
        res.json(reserve);

    }catch(err){

        console.log(err);
    }
};

export const update = async(req, res)  => {

    try{

       //console.log(req.fields);
        //console.log(req.files);
       const {name, checkIn,checkOut,count} = req.fields;
    
       
      
        //validation
    switch(true){

        case !name.trim():
            res.json({error:"Name is required"});
        case !checkIn.trim():
            res.json({error:"checkin is required"});
        case !checkOut.trim():
            res.json({error:"checkout is required"});
        case !count.trim():
            res.json({error:"count is required"});
      
    }
     //update room
     const reserve = await Reserve.findByIdAndUpdate(req.params.reserveId,{
        ...req.fields,
        flug: SVGAElementlugify(name),
             
     },
      {new: true}
     );   
    
     

     await reserve.save();
     res.json(reserve);


  }  catch (err){

        console.log(err);
        return res.status(400).json(err.message);
    }
};