import { LogoutOutlined } from "@ant-design/icons";
import { path_profile } from "../../../utils";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const activeStyle: string = "border-l-4 border-primary bg-white text-primary";
  const { pathname } = useLocation();
  const pathnameSecond = pathname.slice(9);
  const navigate=useNavigate()
  return (
    <div className="bg-[#fbfbfb] p-4">
      <h1 className="font-bold text-xl">My Account</h1>

      <div className="mt-3 space-y-2 text-gray-700">
        {path_profile.map(({ Icon, id, title ,path}) => (
          <div
          onClick={()=>navigate(`/profile/${path}`)}
            key={id}
            className={`${
              path === pathnameSecond && activeStyle
            } flex items-center gap-3 p-3 text-[18px] cursor-pointer rounded-md transition-all`}
          >
            <Icon />
            <h3>{title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-3 border-primary">
        <div className="flex items-center gap-3 text-red-600 cursor-pointer p-2 hover:text-red-700">
          <LogoutOutlined />
          Log out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
