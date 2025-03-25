import { FC } from "react";

import { CardDataType } from "../../../../@types";

const Card: FC<CardDataType> = (props) => {
  const { main_image, title, _id,  userPrice, counter } = props;

  return (
    <div className=" relative my-5 bg-[#eee] p-2  rounded-lg grid grid-cols-[2fr_1fr_1fr] items-center  ">
      <div className="flex items-center gap-4">
        <img className="w-[70px] h-[70px]" src={main_image} alt="" />
        <div>
          <h3 className="text-[16px] font-medium">{title}</h3>
          <p className="text-[14px] font-normal pt-[10px]">
            <span className="text-[#a5a5a5] ">
              SKU: {_id}
            </span>
          </p>

        </div>
      </div>
      <div className="text-[#727272] text-[16px] font-medium mx-auto">
        (x {counter})
      </div>

      <h3 className="mx-auto font-bold text-primary">$ {Number(userPrice).toFixed(2)}</h3>

    </div>
  );
};

export default Card;
