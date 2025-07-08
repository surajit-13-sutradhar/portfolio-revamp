import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getBlogList, setBlogList, setBlog } from "./BlogCache";

const BlogList = () => {
    const [blogs, setBlogs] = useState(() => getBlogList() || []);

    useEffect(() => {
        if (getBlogList()) return;
        fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs`)
            .then(res => res.json())
            .then(data => {
                setBlogList(data);
                setBlogs(data);
            });
    }, []);

    return (
        <div>
            <h2>Blogs</h2>
            <ul>
                {blogs.map(blog => (
                <li key={blog.slug}>
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogList