import React from "react";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegBookmark, FaRegEdit } from "react-icons/fa";
import { IoMdClipboard } from "react-icons/io";

import { RiCoupon4Line } from "react-icons/ri";

const links = [
  { name: "Home", link: "/", icon: AiOutlineHome },
  { name: "All Blogs", link: "/blogs", icon: IoMdClipboard },
  { name: "My Blogs", link: "/my-blogs", icon: RiCoupon4Line },
  { name: "Saved", link: "/saved", icon: FaRegBookmark },
  { name: "Create Blog", link: "/create-blog", icon: FaRegEdit },
  { name: "Settings", link: "/setting", icon: FiSettings, gap: true },
  { name: "Logout", link: "/logout", icon: FiLogOut },
];

const MobileSidebar = ({ showMobileSidebar }) => {
  return (
    <div
      className={`min-h-screen fixed block md:hidden ${
        showMobileSidebar === true ? "translate-x-0 " : "translate-x-[-100%]"
      }  bg-gray-900 px-4 z-[1000]   transition-all duration-500 ease-in-out text-white `}
    >
      <div className={`flex flex-col mt-20 relative gap-3`}>
        {links?.map((link, index) => (
          <NavLink
            to={`${link.link}`}
            key={index}
            className={`flex group items-center gap-3.5 p-3 pl-5 ${
              link?.gap && "mt-12"
            }  hover:bg-white hover:text-gray-900 hover:rounded-md text-white transition-all duration-150 ease-in-out`}
          >
            <div className="text-[22px]">{React.createElement(link?.icon)}</div>
            <h5
              className={`whitespace-pre  text-[17px] duration-100 ease-in-out `}
            >
              {link?.name}
            </h5>
          </NavLink>
        ))}
      </div>
      <div className={`mt-36 flex items-center justify-center`}>
        <img
          src="https://images.pexels.com/photos/13174596/pexels-photo-13174596.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile"
          className="self-center object-cover w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default MobileSidebar;
