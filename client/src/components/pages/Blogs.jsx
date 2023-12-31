
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "./Blog.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:`+ import.meta.env.REACT_APP_PORT +`/api/blogs`,
          {
            headers: { serv: import.meta.env.REACT_APP_SERV },
          }
        );
        if (!response.ok) {
          throw new Error("Unauthorized");
        }
        else{
          
    console.log(`Server is healthy and connected.`);
        }

        const data = await response.json();

        const currentDate = new Date();
        const filteredBlogs = data
          .filter(
            (blog) =>
              !!Date.parse(blog.publishDate) &&
              new Date(blog.publishDate) <= currentDate
          )
          .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

        setBlogs(filteredBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-1 cmain sc" id="stylr-4">
      <p className="display-4 w-100 text-center">Latest Blogs</p>
      <div className="row bol">
        {blogs.map((blog) => (
          <div  className="col-md-5">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;         