import Room from "../models/room.js";
import fs from "fs";
import slugify from "slugify";

export const create = async(req, res)  => {

    try{

       //console.log(req.fields);
        //console.log(req.files);
       const {name, description, price, category, quantity} = req.fields;
       const {photo} = req.files;
      
        //validation
    switch(true){

        case !name.trim():
            res.json({error:"Name is required"});
        case !description.trim():
            res.json({error:"Description is required"});
        case !price.trim():
            res.json({error:"Price is required"});
        case !category.trim():
            res.json({error:"Category is required"});
        case !quantity.trim():
            res.json({error:"Quantity is required"});
        case photo && photo.size > 3000000:
            res.json({error:"  Image should be less than 1mb "}); 


    }
     //create room
     const room = new Room({...req.fields,slug: slugify(name)});   
    
     if(photo){

        room.photo.data = fs.readFileSync(photo.path);
        room.photo.contentType = photo.type;

     }

     await room.save();
     res.json(room);


  }  catch (err){

        console.log(err);
        return res.status(400).json(err.message);
    }
};


export const list = async (req, res) => {

    try {

        const room=  await Room.find({})
        .populate("category")
        .select("-photo")
        .limit(12)
        .sort({createdAt: -1});

        res.json(room);

    } catch (err){

        console.log(err);
    }
};

export const read = async(req,res) => {

    try{
        const room = await Room.findOne({slug:req.params.slug})
        .select("-photo")
        .populate("category");


        res.json(room);

    }catch(err){

        console.log(err);
    }
};

export const photo = async(req, res) => {
    
       try{
            const room = await Room.findById(req.params.roomId).select("photo");
            if(room.photo.data){

                res.set("Content-Type", room.photo.contentType);
                return res.send(room.photo.data);
            }

                    
       }catch(err){
              
         console.log(err);

       }
};

export const remove = async(req, res) => {
    try{
        const room = await Room.findByIdAndDelete(req.params.roomId).select("-photo");
        res.json(room);

    }catch(err){

        console.log(err);
    }
};

export const update = async(req, res)  => {

    try{

       //console.log(req.fields);
        //console.log(req.files);
       const {name, description, price, category, quantity, shipping} = req.fields;
       const {photo} = req.files;
      
        //validation
    switch(true){

        case !name.trim():
            res.json({error:"Name is required"});
        case !description.trim():
            res.json({error:"Description is required"});
        case !price.trim():
            res.json({error:"Price is required"});
        case !category.trim():
            res.json({error:"Category is required"});
        case !quantity.trim():
            res.json({error:"Quantity is required"});
        case photo && photo.size > 1000000:
            res.json({error:"  Image should be less than 1mb "}); 


    }
     //update room
     const room = await Room.findByIdAndUpdate(req.params.roomId,{
        ...req.fields,
        slug: slugify(name),
             
     },
      {new: true}
     );   
    
     if(photo){

        room.photo.data = fs.readFileSync(photo.path);
        room.photo.contentType = photo.type;

     }

     await room.save();
     res.json(room);


  }  catch (err){

        console.log(err);
        return res.status(400).json(err.message);
    }
};