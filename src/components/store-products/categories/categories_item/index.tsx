import { FC } from "react";
import { CategoryType } from "../../../../@types";

const CategoriesItem: FC<CategoryType> = (props) => {
  return (
    <div
      key={props._id}
      className="flex items-center justify-between mt-2 transition-all duration-300 hover:font-semibold hover:text-primary hover:scale-105 hover:opacity-80"
    >
      <h3>{props.title}</h3>
      <h3>{Math.abs(props?.count)}</h3>
    </div>
  );
};

export default CategoriesItem;
