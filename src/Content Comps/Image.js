import React from "react";

const Image = ({ content }) => {
  return (
    <div className="max-w-7xl -mt-24 sm:mt-5 h-[500px]  flex items-center justify-center">
      <img
        src={content.data.url}
        alt={content.data.id}
        className="object-contain w-full h-full rounded-[4px]"
      />
    </div>
  );
};

export default Image;
