import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx'
// import ReactMarkdown from "react-markdown";
import { getBlog, setBlog } from "./BlogCache";

export default function BlogPage() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(() => getBlog(slug));

    useEffect(() => {
        // if the blog exists in cache, directly return from there
        const cached = getBlog(slug);
        if (cached) {
            setBlog(cached);
            return;
        }
        // else, fetch from database
        fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs/${slug}`)
        .then(res => res.json())
        .then(setBlog);
    }, [slug]);

    if (!blog) return <div>Loading...</div>;

    const markdown = blog.content

    return (
        <div className="bg-green-100">
        <h2 className="text-2xl font-bold">{blog.title}</h2>
        <Markdown class="prose lg:prose-xl">
            {markdown}
        </Markdown>
        {blog.bannerImage && (
            <img
            src={blog.bannerImage}
            alt={blog.title}
            style={{ width: "80%", maxHeight: 400, objectFit: "cover", marginBottom: "1rem" }}
            />
        )}
        </div>
    );
}
