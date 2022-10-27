import { useNavigate } from "react-router-dom";

const SecondaryBtn = ({ title }) => {
  const navigate = useNavigate();

  const signUpNavigate = () => {
    navigate("/signup");
  };

  return (
    <button
      className="secondaryBtn  border-0
         text-uppercase  fw-bold
          shadow my-4 me-4
          rounded-pill
          px-5 py-2 "
      onClick={signUpNavigate}
    >
      {title}
    </button>
  );
};

export default SecondaryBtn;
