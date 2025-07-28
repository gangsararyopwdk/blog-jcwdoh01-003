import BlogListSection from "./sections/BlogListSection";
import JumbotronSection from "./sections/JumbotronSection";

const HomepageView = () => {
  return (
    <div className="pb-24">
      <JumbotronSection />

      <div className="w-full max-w-[1440px] mx-auto px-16">
        <BlogListSection />
      </div>
    </div>
  );
};

export default HomepageView;
