import slugify from "slugify";
import Hall from "../models/hall.js";
import fs from "fs";
import hallcategory from "../models/hallcategory.js";

export const create = async(req,res) => {
    try{
        // console.log(req.fields);
        // console.log(req.files);
        const {name,description,price,hallcategory,capacity} = req.fields;
        const {photo} = req.files;

        //validation
        switch(true){
            case !name.trim():
                res.json({error:"Name is required"});
            case !description.trim():
                res.json({error:"description is required"});    
            case !price.trim():
                res.json({error:"price is required"});
            case !hallcategory.trim():
                res.json({error:"category is required"});
            case !capacity.trim():
                res.json({error:"capacity is required"});
            case photo && photo.size > 1000000:
                res.json({error:"Image should be less than 1mb"});
                
        }

        //create hall
        const hall = new Hall({...req.fields,slug: slugify(name)});

        if(photo){
            hall.photo.data = fs.readFileSync(photo.path);
            hall.photo.contentType = photo.type;
        }


        await hall.save();
        res.json(hall);
       
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err.message);
    }
};


export const list = async(req,res) => {
    try{
        const halls = await Hall.find({})
            .populate("hallcategory")
            .select("-photo")
            .limit(12)
            .sort({createdAt: -1});

            res.json(halls);
    }catch(err){
        console.log(err);
    }
}

export const read = async(req,res) => {
  try{
       const hall = await Hall.findOne({slug:req.params.slug})
       .select("-photo")
       .populate("category");

       res.json(hall);
  }catch(err){
    console.log("sssss=>",err);
  }
};

export const photo = async (req,res) =>{
    try{
        const hall = await Hall.findById(req.params.hallId).select("photo");
        if(hall.photo.data){
            res.set("Content-type",hall.photo.contentType);
            return res.send(hall.photo.data)
        }
    }catch(err){
        console.log(err);
    }
};

export const remove = async(req,res) => {
    try{
        const hall = await Hall.findByIdAndDelete(
            req.params.hallId
        ).select("-photo");
        res.json(hall);
    }catch(err){
        console.log(err);
    }
};
export const update = async(req,res) => {
    try{
        // console.log(req.fields);
        // console.log(req.files);
        const {name,description,price,hallcategory,capacity} = req.fields;
        const {photo} = req.files;

        //validation
        switch(true){
            case !name.trim():
                res.json({error:"Name is required"});
            case !description.trim():
                res.json({error:"description is required"});    
            case !price.trim():
                res.json({error:"price is required"});
            case !hallcategory.trim():
                res.json({error:"category is required"});
            case !capacity.trim():
                res.json({error:"capacity is required"});
            case photo && photo.size > 1000000:
                res.json({error:"Image should be less than 1mb"});
                
        }

        //update hall
        const hall = await Hall.findByIdAndUpdate(req.params.hallId,{
            ...req.fields,
            slug: slugify(name),
        },
        {new: true}
        );

        if(photo){
            hall.photo.data = fs.readFileSync(photo.path);
            hall.photo.contentType = photo.type;
        }


        await hall.save();
        res.json(hall);
       
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err.message);
    }
};