import Main from "./main";
import Sidebar from "./sidebar";

const ProfileComponent = () => {
  return (
    <div className="grid grid-cols-[1fr_4fr] container2">
      <div>
        <Sidebar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default ProfileComponent;
