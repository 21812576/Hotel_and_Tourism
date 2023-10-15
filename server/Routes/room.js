import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//middlewares 
import {requireSignin, isAdmin} from "../middlewares/auth.js";

//controllers
import {create, list,read,photo,remove,update } from "../controllers/room.js";

router.post("/room",requireSignin, isAdmin,formidable(),create);
router.get("/room",list);
router.get("/room/:slug", read);
router.get("/room/photo/:roomId", photo);
router.delete("/room/:roomId",requireSignin, isAdmin,remove);
router.put("/room/:roomId",requireSignin, isAdmin,formidable(),update);




export default router;