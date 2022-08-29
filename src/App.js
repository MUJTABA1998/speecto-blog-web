import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllBlogs from "./components/AllBlogs";
import BlogPreview from "./components/BlogPreview";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { data } from "./utillities/data";

function App() {
  const [blogs, setBlogs] = useState(data);

  return (
    <>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route path="/blogs" element={<AllBlogs blogs={blogs} />} />
          <Route path="/blog/:id" element={<BlogPreview blogs={blogs} />} />
          <Route
            path="/create-blog"
            element={<CreateBlog setBlogs={setBlogs} blogs={blogs} />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
