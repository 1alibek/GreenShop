import { Slider } from "antd";
import { useState } from "react";

const Price = () => {
    const [price,setPrice]=useState<number[]>([0,1000])
  return (
    <div>
      <Slider
        className="!text-primary"
        range
        defaultValue={price}
        max={1000}
        min={0}
        trackStyle={[{ backgroundColor: "#46A358" }]} /* Track rangi */
        handleStyle={[{ borderColor: "#46A358" }, { borderColor: "#46A358" }]}
        onChange={(value)=>setPrice(value)}
      />
      <div>
        Price <span className="text-primary text-[15px] font-bold ml-2">{price[0]} $ - {price[1]} $</span>
      </div>
      <button           className="bg-primary text-white font-medium flex items-center gap-2 w-[90px] h-[35px] justify-center mt-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary "
      >
        Filter
      </button>
    </div>
  );
};

export default Price;
