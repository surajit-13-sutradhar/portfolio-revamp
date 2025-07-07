import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import BlogList from "./pages/blogs/BlogList";
import BlogPage from "./pages/blogs/BlogPage";
import ProjectList from "./pages/projects/ProjectList";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:slug" element={<BlogPage />} />
            <Route path="/projects" element={<ProjectList />} />
        </Routes>
    )
}

export default App
