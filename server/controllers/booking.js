import Booking from "../models/booking.js";
import slugify  from "slugify";

export const create = async(req, res) => {
    try{

        const { name} =  req.body;
        if(!name.trim()) {

            return res.json({ error: "Name is required"});

        }
        const BookingCategory = await Booking.findOne({name});
        if(BookingCategory){

            return res.json({error: "Already Booked"});

        }

       const booking = await new Booking({ name, slug: slugify(name)}).save();
       res.json(booking);

    }catch(err){
        console.log(err)
        return res.status(400).json(err);
    }
};
export const update = async( req, res) =>{
     
    try{

        const {name} = req.body;
        const {bookingId}  = req.params;
        const booking = await Booking.findByIdAndUpdate(bookingId,{
            name,
            slug:slugify(name),

        },
        {new:true}
        );
        res.json(booking);

    }catch(err){
        console.log(err);
        return res.status(400).json(err.message);
    }

};

export const remove = async( req, res) =>{
 
try{
    const removed = await Booking.findByIdAndDelete(req.params.bookingId);
    res.json(removed);


}catch(err){
    console.log(err);
    return res.status(400).json(err.message);
}

};

export const list = async( req, res) =>{
 
try{
    const all = await Booking.find({});
    res.json(all);



}catch(err){
    console.log(err);
    return res.status(400).json(err.message);
}

};
export const read = async( req, res) =>{
     
    try{
        const booking =  await Booking.findOne({ slug: req.params.slug });
        res.json(booking);

    }catch(err){
        console.log(err);
        return res.status(400).json(err.message);
    }

};