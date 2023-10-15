import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

//controllers
import {
  create,
  list,
  read,
  photo,
  remove,
  update,
} from "../controllers/event.js"; // Change 'hall.js' to 'event.js'

router.post("/event", requireSignin, isAdmin, formidable(), create); // Change '/hall' to '/event'
router.get("/events", list); // Change '/halls' to '/events'
router.get("/event/:slug", read); // Change '/hall/:slug' to '/event/:slug'
router.get("/event/photo/:eventId", photo); // Change '/hall/photo/:hallId' to '/event/photo/:eventId'
router.delete("/event/:eventId", requireSignin, isAdmin, remove); // Change '/hall/:hallId' to '/event/:eventId'
router.put("/event/:eventId", requireSignin, isAdmin, formidable(), update); // Change '/hall/:hallId' to '/event/:eventId'

export default router;
