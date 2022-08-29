import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <div className="w-[250px] h-[35px] md:w-[400px]   md:h-[50px] rounded-full bg-gray-50 text-gray-900 flex gap-5 items-center px-8">
      <input
        type="text"
        placeholder="Search here..."
        className="w-full text-gray-900 bg-transparent outline-none placeholder:font-[400] font-main placeholder:text-gray-900 placeholder:italic text-[13px]"
      />
      <BiSearchAlt className="text-[23px]  cursor-pointer" />
    </div>
  );
};

export default Search;
