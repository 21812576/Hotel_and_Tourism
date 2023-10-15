import express from "express";

const router = express.Router();

// Middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

// Controllers
import { create, update, remove, list, read } from "../controllers/hallcategory.js"; // Changed the import path and controller name

router.post('/hallcategory', requireSignin, isAdmin, create); // Changed '/eventcategory' to '/hallcategory'
router.put('/hallcategory/:categoryId', requireSignin, isAdmin, update); // Changed '/eventcategory' to '/hallcategory'
router.delete('/hallcategory/:categoryId', requireSignin, isAdmin, remove); // Changed '/eventcategory' to '/hallcategory'
router.get('/hallcategories', list); // Changed '/eventcategories' to '/hallcategories'
router.get('/hallcategory/:slug', read); // Changed '/eventcategory/:slug' to '/hallcategory/:slug'

export default router;
