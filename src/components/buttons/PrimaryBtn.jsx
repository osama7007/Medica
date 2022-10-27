import { useNavigate } from "react-router-dom";

const PrimaryBtn = ({ title }) => {
  const navigate = useNavigate();

  const signInNavigate = () => {
    navigate("/signin");
  };

  return (
    <button
      onClick={signInNavigate}
      className="primaryBtn  border-0 text-uppercase 
      fw-bold shadow my-4 me-4 shadow
      rounded-pill
        px-5 py-2 text-light"
    >
      {title}
    </button>
  );
};

export default PrimaryBtn;
