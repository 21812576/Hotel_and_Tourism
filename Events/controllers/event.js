import slugify from "slugify";
import Event from "../models/event.js"; // Change "Hall" to "Event"
import fs from "fs";

export const create = async (req, res) => {
    try {
        const { name, description, price, eventcategory, capacity } = req.fields; // Change "category" to "eventcategory"
        const { photo } = req.files;

        // Validation
        switch (true) {
            case !name.trim():
                res.json({ error: "Name is required" });
            case !description.trim():
                res.json({ error: "description is required" });
            case !price.trim():
                res.json({ error: "price is required" });
            case !eventcategory.trim(): // Change "category" to "eventcategory"
                res.json({ error: "eventcategory is required" }); // Change "category" to "eventcategory"
            case !capacity.trim():
                res.json({ error: "capacity is required" });
            case photo && photo.size > 1000000:
                res.json({ error: "Image should be less than 1mb" });
        }

        // Create event
        const event = new Event({ ...req.fields, slug: slugify(name) });

        if (photo) {
            event.photo.data = fs.readFileSync(photo.path);
            event.photo.contentType = photo.type;
        }

        await event.save();
        res.json(event);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};

export const list = async (req, res) => {
    try {
        const events = await Event.find({})
            .populate("eventcategory") // Change "category" to "eventcategory"
            .select("-photo")
            .limit(12)
            .sort({ createdAt: -1 });

        res.json(events);
    } catch (err) {
        console.log(err);
    }
};

export const read = async (req, res) => {
    try {
        const event = await Event.findOne({ slug: req.params.slug })
            .select("-photo")
            .populate("eventcategory"); // Change "category" to "eventcategory"

        res.json(event);
    } catch (err) {
        console.log(err);
    }
};

export const photo = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId).select("photo");
        if (event.photo.data) {
            res.set("Content-type", event.photo.contentType);
            return res.send(event.photo.data);
        }
    } catch (err) {
        console.log(err);
    }
};

export const remove = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(
            req.params.eventId
        ).select("-photo");
        res.json(event);
    } catch (err) {
        console.log(err);
    }
};

export const update = async (req, res) => {
    try {
        const { name, description, price, eventcategory, capacity } = req.fields; // Change "category" to "eventcategory"
        const { photo } = req.files;

        // Validation
        switch (true) {
            case !name.trim():
                res.json({ error: "Name is required" });
            case !description.trim():
                res.json({ error: "description is required" });
            case !price.trim():
                res.json({ error: "price is required" });
            case !eventcategory.trim(): // Change "category" to "eventcategory"
                res.json({ error: "eventcategory is required" }); // Change "category" to "eventcategory"
            case !capacity.trim():
                res.json({ error: "capacity is required" });
            case photo && photo.size > 1000000:
                res.json({ error: "Image should be less than 1mb" });
        }

        // Update event
        const event = await Event.findByIdAndUpdate(req.params.eventId, {
            ...req.fields,
            slug: slugify(name),
        }, { new: true });

        if (photo) {
            event.photo.data = fs.readFileSync(photo.path);
            event.photo.contentType = photo.type;
        }

        await event.save();
        res.json(event);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};
