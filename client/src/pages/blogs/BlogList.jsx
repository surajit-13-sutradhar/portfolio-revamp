import { useEffect, useState } from "react";
import { Link } from "react-router";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/blogs")
            .then(res => res.json())
            .then(setBlogs);
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