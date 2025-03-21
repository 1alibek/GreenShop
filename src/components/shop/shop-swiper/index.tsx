import { type FC, useState } from "react";
import { Image, Skeleton } from "antd";

import { CardType, QueryType } from "../../../@types";

const ShopSwiper: FC<QueryType<CardType>> = ({ data, isError, isLoading }) => {
  const [imgSrc, setImgSrc] = useState<string>("");
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-5 justify-between h-full">
        {data?.detailed_images.map((value, idx) => (
          <div key={idx} onClick={() => setImgSrc(value)}>
            <img
              className="w-[100%] h-[100px] cursor-pointer border-2 hover:border-primary transition-colors"
              src={value}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className=" cursor-pointer flex items-center justify-center w-full order-1">
        {isError || isLoading ? (
          <Skeleton.Image className="w-full h-[300px]" active />
        ) : (
          <div className="border w-full h-screen">
            <Image
              className="w-full h-full"
              src={imgSrc ? imgSrc : data?.main_image}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopSwiper;
