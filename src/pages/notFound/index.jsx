import { Link } from "react-router-dom";
import notfound from "../../assets/images/notFound/notFound.svg";

const NotFound = () => {
  return (
    <>
      <section className="container my-5 w-50 text-center mx-auto">
        <div>
          <img src={notfound} alt="not found" className="w-75" />
        </div>

        <p class="text-primary fs-1 mb-3">Oops! Something is wrong.</p>
        <Link
          class="shadow p-2 fs-4 fw-bold text-decoration-none text-primary"
          to="/"
        >
          Go To Home
        </Link>
      </section>
    </>
  );
};

export default NotFound;