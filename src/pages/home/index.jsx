import Slider from "../../components/carousel";
import Category from "./Category";

const Home = () => {
  return (
    <section className="row pt-5">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <Slider />
        <Category />
      </div>
      <div className="col-md-3"></div>
    </section>
  );
};

export default Home;
