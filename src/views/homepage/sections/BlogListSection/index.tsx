import BlogCard from "./components/BlogCard";
import { blogs } from "./static/data";

const BlogListSection = () => {
  return (
    <div className="w-full max-w-[1440px] h-full mx-auto px-16">
      <div className="flex flex-row flex-wrap items-center justify-between gap-[40px]">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogListSection;
