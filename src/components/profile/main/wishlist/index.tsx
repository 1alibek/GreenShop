import { CardType, QueryType } from "../../../../@types";
import UseQueryHandler from "../../../../hooks/useQueryHandler";
import Loader from "../../../../generic/loader";
import Card from "../../../store-products/products/card";

const Wishlist = () => {
  const { data, isLoading, isError }: QueryType<CardType[]> = UseQueryHandler({
    url: "user/wishlist",
    pathname: "wishlist",
  });

  const { card_loader } = Loader();

  return (
    <div className="grid grid-cols-3 gap-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1">
      {isLoading || isError
        ? card_loader()
        : data
            ?.slice(3)
            .map((value) =>
              value ? <Card key={value._id} {...value} /> : null
            )}
    </div>
  );
};

export default Wishlist;
