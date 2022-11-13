import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast , ToastContainer } from "react-toastify";
import PrimaryBtn from "../buttons/PrimaryBtn";
import styles from "./review.module.css";

const Review = () => {
  const [starRating, setStartRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [textArea, setTextArea] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (textArea || starRating) {
      toast.success("Review Added Successfully ");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label className="mb-4">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setStartRating(ratingValue)}
            />
            <FaStar
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={styles.star}
              size={40}
              color={
                ratingValue <= (hover || starRating) ? "#ffc107" : "#e4e5e9"
              }
            />
          </label>
        );
      })}

      <div className="mb-2">
        <textarea
          className="p-2 rounded-4"
          placeholder="Leave your Review"
          name="review"
          rows="4"
          cols="50"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
      </div>

      <PrimaryBtn title="submit" />

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </form>
  );
};

export default Review;
