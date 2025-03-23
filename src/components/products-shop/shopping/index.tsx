import { Empty } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./card";
import { useNavigate } from "react-router-dom";

const Shopping = () => {
  const { data } = useReduxSelector((state) => state.shopSlice);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center gap-2 pb-3">
        <h2 className="cursor-pointer" onClick={()=>navigate("/")}>Home </h2>
        <h2 className="font-bold cursor-pointer"> / Shopping Cart </h2>
      </div>
      <div className=" items-center grid grid-cols-[2fr_1fr_1fr_1fr_1fr]  text-start border-b border-primary pb-3 max-[600px]:hidden">
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Products
        </h2>
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Price
        </h2>
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Quantity
        </h2>
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Total
        </h2>
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Delete
        </h2>
      </div>
      {data.length ? (
        data.map((value) => <Card key={value._id} {...value} />)
      ) : (
        <div className="py-4 flex flex-col items-center gap-3">
          <Empty />
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-white font-medium  gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary"
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;
