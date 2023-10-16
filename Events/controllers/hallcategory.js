import Hallcategory from "../models/hallcategory.js";
import slugify from "slugify";

export const create = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name.trim()) {
            return res.json({ error: "Name is required" });
        }
        const existingHallcategory = await Hallcategory.findOne({ name });
        if (existingHallcategory) {
            return res.json({ error: "Already exists" });
        }

        const hallcategory = await new Hallcategory({ name, slug: slugify(name) }).save();
        res.json(hallcategory);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};

export const update = async (req, res) => {
    try {
        const { name } = req.body;
        const { categoryId } = req.params;
        const hallcategory = await Hallcategory.findByIdAndUpdate(
            categoryId,
            {
                name,
                slug: slugify(name),
            },
            { new: true }
        );
        res.json(hallcategory);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};

export const remove = async (req, res) => {
    try {
        const removed = await Hallcategory.findByIdAndDelete(req.params.categoryId);
        res.json(removed);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};

export const list = async (req, res) => {
    try {
        const all = await Hallcategory.find({});
        res.json(all);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};

export const read = async (req, res) => {
    try {
        const hallcategory = await Hallcategory.findOne({ slug: req.params.slug });
        res.json(hallcategory);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};
