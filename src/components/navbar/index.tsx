import { Link, useLocation } from "react-router-dom";
import { Drawer, DrawerProps } from "antd";
import { useState } from "react";

import { useReduxDispatch } from "../../hooks/useRedux";
import { setModalAuthVisibility } from "../../redux/modalSlice";

import logo from "../../assets/icons/logo.svg";
import login from "../../assets/icons/login.svg";
import shop from "../../assets/icons/shop.svg";
import logoIcon from "../../../public/logo-icon.svg";

import { BiSearch } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawer2 = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  const dispatch = useReduxDispatch();
  const { pathname } = useLocation();

  const user = JSON.parse(localStorage.getItem("user") as string);
  return (
    <div className="container2 flex items-center justify-between border-b border-primary max-[600px]:py-3">
      <Link to={"/"}>
        <img className="max-[390px]:hidden" src={logo} alt="" />
        <img className=" hidden max-[390px]:block" src={logoIcon} alt="" />
      </Link>
      <div className="flex items-center gap-5 py-5 max-[600px]:hidden">
        <h3
          className={`cursor-pointer  relative pb-1 after:content-[''] font-medium after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full ${
            pathname === "/" && "text-primary text-[16px]"
          }`}
        >
          Home
        </h3>
        <h3
          className={`cursor-pointer  relative pb-1 after:content-[''] font-medium after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full ${
            pathname === "/blogs" && "text-primary text-[16px]"
          }`}
        >
          Blogs
        </h3>
      </div>
      <div className="flex items-center gap-5">
        <BiSearch className="w-[25px] h-[25px] max-[390px]:w-[20px]" />
        <img
          className="w-[25px] h-[25px] max-[390px]:w-[20px]"
          src={shop}
          alt=""
        />
        <button
          onClick={() => dispatch(setModalAuthVisibility())}
          className="bg-primary text-white font-medium flex items-center gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary max-[600px]:hidden"
        >
          {user ? user.name : "Login"}
        </button>
        <button onClick={() => dispatch(setModalAuthVisibility())}>
          <img
            className="w-[25px] h-[25px] max-[390px]:w-[20px] hidden max-[600px]:block"
            src={login}
            alt=""
          />
        </button>
        <button
          onClick={showDrawer}
          className="bg-primary text-white font-medium  gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary hidden max-[600px]:block"
        >
          <CgMenuRightAlt />
        </button>
      </div>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="flex items-center justify-between">
          <img src={logo} alt="" />
          <button
            onClick={showDrawer2}
            className="bg-primary text-white font-medium  gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary hidden max-[600px]:block"
          >
            <FaXmark />
          </button>
        </div>
        <div className="flex items-center gap-5 py-5 flex-col">
          <h3
            className="cursor-pointer  relative pb-1 after:content-[''] font-medium after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full 
          
          "
          >
            Home
          </h3>
          <h3
            className="cursor-pointer  relative pb-1 after:content-[''] font-medium after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full 
          "
          >
            Blogs
          </h3>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
