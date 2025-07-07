import { Router } from "express";
import Project from "../models/Project.js";
const router = Router();

router.get("/", async (req, res) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
});

router.post("/", async (req, res) => {
    const { name, description, link } = req.body;
    const newProject = new Project({ name, description, link });
    await newProject.save();
    res.status(201).json(newProject);
});

export default router;
