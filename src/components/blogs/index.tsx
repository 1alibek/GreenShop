import CookieUserInfo from "../../generic/cookies";
import BlogHeader from "./blog-header";
import BlogAuthHeader from "./blog-auth-header";
import BlogCard from "./card";
import useQueryHandler from "../../hooks/useQueryHandler";
import type { BlogType, QueryType } from "../../@types";
import Loader from "../../generic/loader";

const BlogsComponent = () => {
  const { isAuthorization } = CookieUserInfo();
  const { blog_card_loader } = Loader();
  const { data, isError, isLoading }: QueryType<BlogType[]> = useQueryHandler({
    url: "user/blog",
    pathname: "blog",
    params: {
      search: "",
    },
  });

  return (
    <section className="w-[90%] m-auto">
      {isAuthorization ? <BlogAuthHeader /> : <BlogHeader />}

      <div className="grid grid-cols-3 gap-5 py-5">
        {isLoading || isError
          ? blog_card_loader()
          : data?.map((value) => {
              return <BlogCard key={value._id} {...value} />;
            })}
      </div>
    </section>
  );
};

export default BlogsComponent;
