import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx'
// import ReactMarkdown from "react-markdown";

export default function BlogPage() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/blogs/${slug}`)
        .then(res => res.json())
        .then(setBlog);
    }, [slug]);

    if (!blog) return <div style={{ padding: "2rem" }}>Loading...</div>;

    const markdown = blog.content

    return (
        <div className="bg-green-100">
        <h2 className="text-2xl font-bold">{blog.title}</h2>
        <Markdown class="prose lg:prose-xl">
            {markdown}
        </Markdown>
        {blog.image && (
            <img
            src={blog.image}
            alt={blog.title}
            style={{ width: "100%", maxHeight: 400, objectFit: "cover", marginBottom: "1rem" }}
            />
        )}
        </div>
    );
}
