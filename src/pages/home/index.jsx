import FollowDoctor from "../../components/followDoctor";
import Posts from "../../components/posts";
import Articles from "./Articles";

const Home = () => {
  return (
    <section className="row pt-5">
      <div className="col-md-2"></div>
      <div className="col-md-7">
        {/* <Articles /> */}
        <Posts />
      </div>
      <div className="col-md-3">
        <FollowDoctor />
      </div>
    </section>
  );
};
export default Home;
