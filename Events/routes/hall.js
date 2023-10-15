import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//middlewares
import{requireSignin, isAdmin} from "../middlewares/auth.js"

//controllers
import {
    create,
    list,
    read,
    photo,
    remove,
    update,
} from "../controllers/hall.js"

router.post("/hall",requireSignin,isAdmin,formidable(),create);
router.get("/halls",list);
router.get("/hall/:slug",read);
router.get("/hall/photo/:hallId",photo);
router.delete("/hall/:hallId",requireSignin,isAdmin,remove);
router.put("/hall/:hallId",requireSignin,isAdmin,formidable(),update);




export default router;