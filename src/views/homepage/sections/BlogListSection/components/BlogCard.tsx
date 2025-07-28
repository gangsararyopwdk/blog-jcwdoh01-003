import { FC } from "react";
import { Blog } from "../types";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="w-full max-w-[360px]">
      <div className="relative w-full h-[260px] mb-[16px]">
        <div className="absolute z-[1] w-full h-full top-0 left-0 bg-black opacity-[0.25]" />

        <Image
          src={blog.image}
          alt={blog.title}
          fill
          style={{ zIndex: 0, objectFit: "cover" }}
        />
      </div>

      <h2 className="text-2xl font-semibold text-black mb-[8px]">
        {blog.title}
      </h2>

      <p className="p-0 text-sm text-[#6C757D] mb-[8px]">{blog.date}</p>

      <p className="p-0 text-sm text-[#6C757D]">{blog.description}</p>
    </div>
  );
};

export default BlogCard;
