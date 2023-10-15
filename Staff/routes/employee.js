import express from 'express';
import formidable from "express-formidable";

const router = express.Router();

//middlewares
import { requireSignin, isAdmin } from '../middleware/auth.js';

//controllers
import {create,list,read,photo,update} from "../controllers/employee.js";

router.post('/employee',requireSignin,isAdmin,formidable(),create);
router.get('/employee',list);
router.get('/employee/:name',read);
router.get('/employee/:photo/:empid',photo);
router.delete('/employee/:empid',photo);
router.put('/employee/:empid',requireSignin,isAdmin,formidable(),update);



export default router;