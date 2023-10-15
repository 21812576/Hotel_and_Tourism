import express from 'express';

const router = express.Router();

//middlewares
import { requireSignin, isAdmin } from '../middleware/auth.js';

//controllers
import {create,update,remove,list,read} from "../controllers/category.js";

router.post("/category",requireSignin,isAdmin, create);

router.put("/category/:did",requireSignin,isAdmin, update);

router.delete("/category/:did",requireSignin,isAdmin,remove);

router.get("/categories", list );

router.get("/category/:name",read);



export default router;