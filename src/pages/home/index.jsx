import Ads from "../../components/Ads";
import FollowDoctor from "../../components/followDoctor";
import Posts from "../../components/posts";

const Home = () => {
  return (
    <section
      className='d-flex container w-100'
    >
      <Posts />
      <FollowDoctor />
    </section>
  );
};
export default Home;
