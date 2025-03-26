import { useParams } from "react-router-dom";
import UseQueryHandler from "../../../hooks/useQueryHandler";
import { AuthUser, BlogType, QueryType } from "../../../@types";
import {
  CommentOutlined,
  EyeOutlined,
  HeartOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Loader from "../../../generic/loader";

const Rendering = () => {
  const { created_by, id } = useParams();

  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  }: QueryType<AuthUser> = UseQueryHandler({
    url: `/user/by_id/${created_by}`,
    pathname: `user-${created_by}`,
  });

  const { data, isLoading, isError }: QueryType<BlogType> = UseQueryHandler({
    url: `user/blog/${id}`,
    pathname: `blog-${id}`,
  });
  const usersLoading: boolean = userError || userLoading;
  const dataLoading: boolean = isError || isLoading;
  const { blog_id_Rending } = Loader();
  return (
    <section className="w-[80%] m-auto">
      {usersLoading || dataLoading ? (
        blog_id_Rending()
      ) : (
        <div>
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-4">
              <img
                src={user?.profile_photo}
                className="w-[50px] h-[50px] rounded-full"
                alt="Profile"
              />
              <div>
                <h1 className="font-semibold">
                  {`${user?.name} ${user?.surname}`}{" "}
                </h1>
                <p>Followers {user?.followers?.length}</p>
              </div>
            </div>
            <button className="bg-primary text-white font-medium flex items-center gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
              <PlusCircleOutlined /> Follow
            </button>
          </div>
          <div>
            <h1 className="text-2xl my-4 font-bold">{data?.title}</h1>

            <div
              dangerouslySetInnerHTML={{ __html: data?.content as string }}
            ></div>

            <div className="flex items-center gap-4">
              <div>
                <EyeOutlined className="pr-1" />
                200
              </div>
              <div>
                <CommentOutlined className="pr-1" />0
              </div>
              <div>
                <HeartOutlined className="pr-1" />0
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rendering;
