import { Modal } from "antd";
import Login from "./login";
import { useState } from "react";
import Register from "./register";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setModalAuthVisibility } from "../../../redux/modalSlice";

const AuthrationModal = () => {
   const{modalAuthVisibility}=useReduxSelector(state=>state.modalSlice)
  const [active, SetActive] = useState(false);4

  const dispatch=useReduxDispatch()
  return (
    <Modal open={modalAuthVisibility} onCancel={()=>dispatch(setModalAuthVisibility())} footer={false}>
      <div>
        <div className="flex items-center justify-center gap-7 mt-7">
          <h3 onClick={()=>SetActive(true)} className={`text-[20px] font-medium cursor-pointer ${active&&"text-primary"}`}>Login</h3>
          <div className="w-[1px] h-[20px] bg-black"></div>
          <h3  onClick={()=>SetActive(false)} className={`text-[20px] font-medium cursor-pointer ${!active&&"text-primary"}`}>Register</h3>
        </div>
        {active ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthrationModal;
