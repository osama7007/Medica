import { FcLike } from "react-icons/fc";
import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { useState } from "react";
import styles from "./posts.module.css";

const Comment = ({ likes, comments, updateLikes, id }) => {
  const [liked, setLiked] = useState(false);

  console.log(comments)

  return (
    <section className="px-4">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <FcLike className="fs-4" />
          <small className="ms-1  text-black-50">{likes}</small>
        </div>
        <small className=" text-black-50">{comments} Comments</small>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between px-5">
        <div className={` ${styles.iconWrapper} ${liked ? styles.liked : ""}`}>
          <SlLike
            onClick={() => {
              setLiked(true);
              updateLikes(id);
            }}
            className={styles.likeIcon}
          />
          <small className="ms-2">Like</small>
        </div>

        <div className={styles.iconWrapper}>
          <FaRegCommentAlt />
          <small className="ms-2">Comment</small>
        </div>
      </div>
      <hr className=" pb-3" />
    </section>
  );
};

export default Comment;
