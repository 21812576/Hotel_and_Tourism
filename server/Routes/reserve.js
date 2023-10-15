import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//middlewares 
import {requireSignin} from "../middlewares/auth.js";

//controllers
import {create, list,read,remove,update } from "../controllers/reserve.js";

router.post("/reserve",requireSignin,formidable(),create);
router.get("/reserve",list);
router.get("/reserve/:slug", read);
router.delete("/reserve/:reserveId",requireSignin,remove);
router.put("/reserve/:reserveId",requireSignin,formidable(),update);




export default router;