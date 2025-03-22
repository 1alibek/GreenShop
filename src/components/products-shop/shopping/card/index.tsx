import { FC } from "react";
import { CardDataType } from "../../../../@types";
import { DeleteFilled } from "@ant-design/icons";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { counterEdited, deletedData } from "../../../../redux/shopSlice";
import { NotificationApi } from "../../../../generic/notifications";

const Card: FC<CardDataType> = (props) => {
  const { main_image, title, _id, price, userPrice, counter } = props;
  const dispatch = useReduxDispatch();
  const notify = NotificationApi();
  const FindData = counter === 0;
  if (FindData) {
    dispatch(deletedData(_id));
  }
  return (
    <div className="my-5 bg-[#eee] p-2  rounded-lg grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center">
      <div className="flex items-center gap-4">
        <img className="w-[70px] h-[70px]" src={main_image} alt="" />
        <div>
          <h3 className="text-[16px] font-medium">{title}</h3>
          <p className="text-[14px] font-normal pt-[10px]">
            <span className="text-[#a5a5a5]">SKU:{_id}</span>
          </p>
        </div>
      </div>
      <div className="text-[#727272] text-[16px] font-medium mx-auto">
        $ {price}
      </div>
      <div className="flex items-center gap-3 mx-auto">
        <button
          onClick={() =>
            dispatch(counterEdited({ type: "decrement", id: _id }))
          }
          className="w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center pb-1"
        >
          -
        </button>
        <span className="text-[17px]">{counter}</span>
        <button
          onClick={() =>
            dispatch(counterEdited({ type: "increment", id: _id }))
          }
          className="w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center pb-1"
        >
          +
        </button>
      </div>
      <h3 className="mx-auto">$ {userPrice}</h3>
      <button
        onClick={() => {
          dispatch(deletedData(_id)), notify("delete-data");
        }}
      >
        <DeleteFilled className="text-[#727272] text-[20px] mx-auto" />
      </button>
    </div>
  );
};

export default Card;
