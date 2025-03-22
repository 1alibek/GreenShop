import CardTotal from "./card-total"
import Shopping from "./shopping"

const ProductsShopComponent = () => {
  return (
    <div className="container2 grid grid-cols-[3fr_1fr] py-5 gap-5">
      <Shopping/>
      <CardTotal/>
    </div>
  )
}

export default ProductsShopComponent