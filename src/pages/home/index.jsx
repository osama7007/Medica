import FollowDoctor from "../../components/followDoctor";
import Posts from "../../components/posts";

import Search from "../../components/search";
import TopBar from "../../components/topBar";

const Home = () => {
  return (
    <>
      <TopBar/>

<section className="py-5 w-100 d-flex justify-content-between">
  <Posts />

  <div className="me-4">
    <FollowDoctor />
  </div>
</section>
    </>
  );
};
export default Home;
