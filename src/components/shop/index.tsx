import { useParams } from "react-router-dom";

import UseQueryHandler from "../../hooks/useQueryHandler";
import ShopSwiper from "./shop-swiper";
import { CardType, QueryType } from "../../@types";
import ShopInfo from "./shop-info";

const ShopComponent = () => {
  const { category, id }: { category?: string; id?: string } = useParams();
  const { data, isError, isLoading }: QueryType<CardType> = UseQueryHandler({
    pathname: "product-id",
    url: `flower/category/${category}/${id}`,
  });
 
  

  return (
    <div className="py-8">
        <div className="grid grid-cols-2 gap-10 container2">

      <ShopSwiper data={data}  isError={isError} isLoading={isLoading} />
      <ShopInfo data={data}  isError={isError} isLoading={isLoading} />
        </div>
    </div>
  );
};

export default ShopComponent;
