import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quote from "../Content Comps/Quote";
import Paragraph from "../Content Comps/Paragraph";
import Heading from "../Content Comps/Heading";
import Code from "../Content Comps/Code";
import Image from "../Content Comps/Image";
import List from "../Content Comps/List";
import LinkTag from "../Content Comps/Link";
import {
  ImTwitter,
  ImFacebook2,
  ImLinkedin,
  ImShare2,
  ImLink,
} from "react-icons/im";
import { Link } from "react-router-dom";

const BlogPreview = ({ blogs }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(blogs.find((bl) => bl.id === id));
  }, [setBlog, blogs, id]);

  function getData(content) {
    switch (content.type) {
      case "paragraph":
        return <Paragraph content={content.data.text} />;
      case "header":
        return (
          <Heading content={content.data.text} level={content.data.level} />
        );
      case "quote":
        return <Quote content={content} />;
      case "code":
        let code = content.data.html.split("\n");
        return (
          <div className="max-w-7xl  h-[200px] pt-7 px-5 bg-gray-800 rounded-[3px] text-xs text-gray-400  ">
            {code.map((c, index) => (
              <Code key={index} content={c} />
            ))}
          </div>
        );
      case "image":
        return <Image content={content} />;
      case "Link":
        return <LinkTag link={content.data.link} />;
      case "list":
        return (
          <ul
            className={`ml-10 ${
              content.data.style === "unordered" ? "list-disc" : "list-decimal"
            }`}
          >
            {content.data.items.map((item, index) => (
              <List item={item} key={index} />
            ))}
          </ul>
        );
      default:
        break;
    }
  }

  return (
    <div className="px-10 py-20 mx-auto max-w-7xl md:px-20">
      {blog !== null ? (
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="flex flex-wrap items-center justify-between w-full gap-6">
            <div className="flex items-start justify-start gap-3">
              <div className="w-[70px] h-[70px] drop-shadow-sm">
                <img
                  src={blog.profile}
                  alt="profile"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="self-start text-gray-700 text-[16px] capitalize mt-2 font-[700]">
                  {blog.writtenBy}
                </h4>
                <div className="flex items-start justify-start gap-3">
                  <h5 className="text-xs text-gray-400">{blog.postedOn}</h5>
                  <h5 className="text-xs text-indigo-500">
                    {blog.follower} followers
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4 ml-1 sm:ml-0">
              <Link to="/" className="text-gray-700">
                <ImTwitter />
              </Link>
              <Link to="/" className="text-gray-700">
                <ImFacebook2 />
              </Link>
              <Link to="/" className="text-gray-700">
                <ImLinkedin />
              </Link>
              <Link to="/" className="text-gray-700">
                <ImLink />
              </Link>
              <Link to="/" className="ml-3 text-indigo-500">
                <ImShare2 />
              </Link>
            </div>
          </div>
          <div className="self-start">
            <h1 className="text-[25px] md:text-[40px] text-gray-800 capitalize font-[900] mt-5 -mb-3">
              {blog.title}
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 mt-3 mb-5">
            {blog.content.blocks.map((bl, index) => (
              <div key={index} className="w-full h-auto">
                {getData(bl)}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BlogPreview;
