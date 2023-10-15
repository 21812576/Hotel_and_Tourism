import express from "express";


const router = express.Router();

//middlewares 
import {requireSignin} from "../middlewares/auth.js";

//controllers
import {create,update, remove,list,read} from "../controllers/booking.js";

router.post('/booking',requireSignin,create);
router.put("/booking/:bookingId", requireSignin, update);
router.delete("/booking/:bookingId", requireSignin, remove);
router.get("/booking",list);
router.get("/booking/:slug", read);

export default router;