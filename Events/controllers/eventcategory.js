import EventCategory from "../models/eventcategory.js";
import slugify from "slugify";

export const create = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name.trim()) {
            return res.json({ error: "Name is required" });
        }
        const existingEventCategory = await EventCategory.findOne({ name });
        if (existingEventCategory) {
            return res.json({ error: "Already exists" });
        }

        const eventCategory = await new EventCategory({ name, slug: slugify(name) }).save();
        res.json(eventCategory);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};

export const update = async (req, res) => {
    try {
        const { name } = req.body;
        const { categoryId } = req.params;
        const eventCategory = await EventCategory.findByIdAndUpdate(
            categoryId,
            {
                name,
                slug: slugify(name),
            },
            { new: true }
        );
        res.json(eventCategory);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};

export const remove = async (req, res) => {
    try {
        const removed = await EventCategory.findByIdAndDelete(req.params.categoryId);
        res.json(removed);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};

export const list = async (req, res) => {
    try {
        const all = await EventCategory.find({});
        res.json(all);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};

export const read = async (req, res) => {
    try {
        const eventCategory = await EventCategory.findOne({ slug: req.params.slug });
        res.json(eventCategory);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};
