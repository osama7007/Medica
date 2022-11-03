import Slider from "../../components/carousel";
import Category from "./Category";
import FollowDoctor from "../../components/followDoctor";

import Search from "../../components/search";


const Home = () => {
  return (
    <section className="row pt-4 w-100 mt-1">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        {/* <Search className="m-auto"/> */}
        <Slider />
        <Category />
      </div>
      <div className="col-md-3">
        <FollowDoctor />
      </div>
    </section>
  );
};
export default Home;
