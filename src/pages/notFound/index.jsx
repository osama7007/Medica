import notfound from "../../assets/images/notFound/notFound.svg";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <section className="container my-5 w-50 text-center mx-auto">
      <div>
        <img src={notfound} alt="not found" className="w-75" />
      </div>

      <p class="text-primary fs-1 mb-3">Oops! Something is wrong.</p>
      <PrimaryBtn
        class="shadow p-2 fs-4 fw-bold text-decoration-none text-primary"
        title="Go To Home"
        action={navigateHome}
      />
    </section>
  );
};

export default NotFound;
