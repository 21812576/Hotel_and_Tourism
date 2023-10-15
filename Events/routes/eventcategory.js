import express from "express";

const router = express.Router();

// Middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

// Controllers
import { create, update, remove, list, read } from "../controllers/eventcategory.js"; // Changed the import path and controller name

router.post('/eventcategory', requireSignin, isAdmin, create); // Changed '/category' to '/eventcategory'
router.put('/eventcategory/:categoryId', requireSignin, isAdmin, update); // Changed '/category' to '/eventcategory'
router.delete('/eventcategory/:categoryId', requireSignin, isAdmin, remove); // Changed '/category' to '/eventcategory'
router.get('/eventcategories', list); // Changed '/categories' to '/eventcategories'
router.get('/eventcategory/:slug', read); // Changed '/category/:slug' to '/eventcategory/:slug'

export default router;
