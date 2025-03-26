import { useState } from "react";
import { ProfileOutlined, ShoppingOutlined, EnvironmentOutlined, HeartOutlined, ClockCircleOutlined, LogoutOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const [active, setActive] = useState("Account Details");

 
  const menuItems = [
    { name: "Account Details", icon: <ProfileOutlined /> },
    { name: "My Products", icon: <ShoppingOutlined /> },
    { name: "Address", icon: <EnvironmentOutlined /> },
    { name: "Wishlist", icon: <HeartOutlined /> },
    { name: "Track Order", icon: <ClockCircleOutlined /> },
  ];

  return (
    <div className="bg-[#fbfbfb] p-4">
     
      <h1 className="font-bold text-xl">My Account</h1>

 
      <div className="mt-3 space-y-2 text-gray-700">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 p-3 cursor-pointer rounded-md transition-all ${
              active === item.name ? "text-primary border-l-4 border-primary bg-green-50" : "hover:text-primary"
            }`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            {item.name}
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
