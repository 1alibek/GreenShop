import { FC } from "react";
import { CardType } from "../../../../@types";
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Card: FC<CardType> = (props) => {
  const navigate=useNavigate()
  const style_icons: string =
    "bg-[#ffffff] w-[35px] h-[35px] flex rounded-lg  justify-center items-center cursor-pointer text-[20px]";
  return (
    <div className="cursor-pointer border-t-2 hover:border-primary">
      <div className="group h-[320px] bg-[#f5f5f5] flex items-center justify-center relative max-[400px]:h-[250px] max-[600px]:h-[280px]">
        <img
          src={props.main_image}
          className="w-4/5 h-4/5  "
          alt={props.title}
        />
        <div className="hidden items-center absolute bottom-4 gap-5 group-hover:flex transition-all duration-300">
          <div className={style_icons}>
            <ShoppingCartOutlined className="text-[22px]" />
          </div>
          <div className={style_icons}>
            <HeartOutlined className="text-[22px]" />
          </div>
          <div onClick={()=>navigate(`/shop/${props.category}/${props._id}`)} className={style_icons}>
            <SearchOutlined className="text-[22px]" />
          </div>
        </div>
      </div>
      <h3 className="mt-1 font-medium">{props.title}</h3>
      <div className="flex items-center gap-2">
        <h3 className="text-primary text-[18px] font-bold">{props.price}</h3>
        <h3 className="font-light text-[#a5a5a5] line-through">
          {props.discount_price} $
        </h3>
      </div>
    </div>
  );
};

export default Card;
