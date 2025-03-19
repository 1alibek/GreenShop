import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import StoreProducts from "../../components/store-products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <main className="container2">
        <StoreProducts />
      </main>
    </div>
  );
};

export default Home;
