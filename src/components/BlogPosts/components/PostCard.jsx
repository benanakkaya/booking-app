import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col justify-end cursor-pointer group hover:-translate-y-3 duration-500">
      <div className="relative">
        <img className="w-full h-[300px] absolute group-hover:opacity-90 transition-all duration-500" src={post.image} />
      </div>
      <div className="p-[20px] text-white z-20 text-dark h-[300px] flex flex-col justify-end gap-[10px]">
        <h4 className="font-bold text-xl">{post.title}</h4>
        <h5 className="leading-[140%] text-grey-200">{post.subtitle}</h5>
      </div>
    </div>
  );
};

export default PostCard;
