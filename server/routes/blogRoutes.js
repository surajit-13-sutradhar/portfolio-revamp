import { Router } from "express";
import Blog from "../models/Blog.js";
const router = Router();

router.get("/", async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
});

router.get("/:slug", async (req, res) => {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Not found" });
    res.json(blog);
});

router.post("/", async (req, res) => {
    const { title, slug, content } = req.body;
    const newBlog = new Blog({ title, slug, content });
    await newBlog.save();
    res.status(201).json(newBlog);
});

export default router;
