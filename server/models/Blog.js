import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    slug: { type: String, unique: true },
    content: String,
    createdAt: { type: Date, default: Date.now },
    bannerImage: { type: String },
});

export default mongoose.model("Blog", blogSchema);
