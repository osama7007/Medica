import FollowDoctor from "../../components/followDoctor";
import Posts from "../../components/posts";
import styles from "./home.module.css";
import Search from "../../components/search";

const Home = () => {
  return (
    <>
      <section className={`${styles.container}  py-5 w-100`}>
        <div className="container d-flex w-100  justify-content-around">
          <Posts />
          <div className="mx-1">
            <FollowDoctor />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
