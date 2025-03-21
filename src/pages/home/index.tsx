import Blog from "../../components/blog";
import DoubleCard from "../../components/double-card";
import Showcase from "../../components/showcase";
import StoreProducts from "../../components/store-products";

const Home = () => {
  return (
    <div>
     
      <Showcase />
      <main className="container2">
        <StoreProducts />
        <DoubleCard />
        <Blog />
      </main>
 
    </div>
  );
};

export default Home;
