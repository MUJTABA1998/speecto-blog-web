import React, { useRef, useState } from "react";
import EditorJs from "@natterstefan/react-editor-js";
import { EDITOR_JS_TOOLS } from "../utillities/editor-constants";
import { useGlobalContext } from "../AppContext";
import { v4 as uid } from "uuid";
import { motion } from "framer-motion";

let editordata = null;

export const CreateBlog = () => {
  const { blogs, setBlogs } = useGlobalContext();
  const editorRef = useRef();

  const [title, setTitle] = useState("");

  const save = async () => {
    try {
      const content = await editordata.save();
      if (content) {
        console.log("Content.....\n", content);
        return content;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editordata === null || title === "") {
      alert("All Fields required");
      return;
    }
    let cont = await save();
    if (cont) {
      console.log("running........");
      const newBlog = {
        id: uid(),
        writtenBy: "robert roy britt",
        postedOn: "12 May, 2022",
        follower: 234,
        profile:
          "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
        title,
        content: cont,
      };
      setBlogs([...blogs, newBlog]);
      setTitle("");
      editordata.clear();
    } else {
      console.log("not runngin ...........");
    }
  };

  const container = {
    hidden: { opacity: 1, y: 300 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="main-container">
      <div className="flex flex-col items-center justify-center w-full h-auto max-w-2xl gap-4 py-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <input
            type="text"
            placeholder="Blog title"
            value={title}
            onChange={handleChange}
            className="w-full h-[70px] -mb-4 text-gray-800  rounded-[5px] px-5  outline-none text-[20px] first-letter:capitalize md:text-[40px] font-[900] placeholder:text-[20px] placeholder:md:text-[40px] placeholder:font-[900] placeholder:text-gray-800 font-main placeholder:capitalize "
          />
        </motion.div>
        <div className="self-start max-w-5xl" ref={editorRef}>
          <EditorJs
            placeholder="Start Write Your Blog"
            tools={EDITOR_JS_TOOLS}
            editorInstance={(instance) => {
              editordata = instance;
            }}
            className=""
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            y: 500,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
          className="flex items-start justify-start w-full gap-6"
        >
          <button
            className="px-5 py-2 ml-3 bg-gray-800 tracking-wider text-white font-main rounded-[5px]"
            onClick={handleSubmit}
          >
            Submit Blog
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateBlog;

// code
