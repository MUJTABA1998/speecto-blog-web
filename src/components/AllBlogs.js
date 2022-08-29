import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { TiPlusOutline } from "react-icons/ti";
import Search from "./Search";

import BlogSkeleton from "./BlogSkeleton";

const AllBlogs = ({ blogs }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setLoading]);

  const getImages = (index) => {
    const block = blogs[index].content.blocks;
    const images = block.filter((bl) => {
      if (bl.type === "image") return bl;
      return null;
    });
    return images[0].data.url;
  };

  const getParaGraphs = (index) => {
    const block = blogs[index].content.blocks;
    const paras = block.filter((bl) => {
      if (bl.type === "paragraph") return bl;
      return null;
    });
    return paras[0].data.text.replace("<br>", "");
  };

  return (
    <div className="main-container">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col-reverse items-start justify-between gap-7 sm:flex-row">
          <Search />

          <Link
            to="/create-blog"
            onClick={() => getImages(0)}
            title="My Saved"
            className=" items-center hidden md:flex tracking-wider justify-center gap-x-2 px-6 py-3 text-white bg-gray-900 rounded-[5px]"
          >
            <TiPlusOutline className="text-[20px]" /> New Blog
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 px-3 mt-2">
          <h1 className="">All Blogs</h1>
          <div className="grid w-full grid-cols-1 items-center lg:grid-cols-2 gap-10 mt-4 ">
            {blogs.map((blog, index) => (
              <div>
                {loading ? (
                  <BlogSkeleton />
                ) : (
                  <div
                    key={index}
                    className="grid w-full max-w-[700px] h-auto sm:h-[200px]  relative  grid-cols-2 gap-x-7"
                  >
                    <Link to={`/blog/${blog.id}`} className="w-[120%] ">
                      <h2 className="text-[15px] sm:text-[20px]">
                        {blog.title}
                      </h2>
                      <div className="mt-3 ">
                        <p className="text-[12px] sm:text-[16px] mb-10 sm:mb-0 tracking-wider text-gray-700 font-[300]">
                          {getParaGraphs(index).slice(0, 200)}{" "}
                          <Link
                            className="text-indigo-600 text-sm"
                            to={`/blog/${blog.id}`}
                          >
                            Read more
                          </Link>
                        </p>
                      </div>
                      <div className="absolute flex items-center gap-4 bottom-2">
                        <h6 className="text-xs text-gray-400 font-main">
                          Posted on {blog.postedOn}
                        </h6>
                        <BsBookmarkPlus className="text-gray-400" />
                        <FaShare className="text-gray-400" />
                      </div>
                    </Link>
                    <div className="w-[100%] flex justify-end items-start">
                      <img
                        src={getImages(index)}
                        alt={index}
                        key={index}
                        className="max-w-[140px] h-[80px] sm:max-w-[200px] sm:h-[130px] object-cover rounded-md w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
