import { FcLike } from "react-icons/fc";
import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { useState } from "react";
import styles from "./posts.module.css";


const Comment = ({
  addingCommentHandler,
  addingLikeHandler,
  id,
  setComment,
  allComment,
  allLikes,
  userProfile
}) => {
  const [liked, setLiked] = useState(false);
  const [showComment, setShowComment] = useState(false);



  return (
    <section className="px-4">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <FcLike className="fs-4" />
          <small className="ms-1  text-black-50">{allLikes.length}</small>
        </div>
        <small className=" text-black-50">{allComment.length} Comments</small>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between px-5">
        <div className={` ${styles.iconWrapper} ${liked ? styles.liked : ""}`}>
          <SlLike
            onClick={() => {
              setLiked(true);
              addingLikeHandler(id);
            }}
            className={styles.likeIcon}
          />
          <small className="ms-2">Like</small>
        </div>

        <div
          className={styles.iconWrapper}
          onClick={() => setShowComment(!showComment)}
        >
          <FaRegCommentAlt />
          <small className="ms-2">Comment</small>
        </div>
      </div>
      <hr className=" pb-3" />

      {showComment && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addingCommentHandler(id);
          }}
          className={`${styles.commentForm} d-flex align-items-center gap-2 pb-3`}
        >
          <img
            src={userProfile}
            alt="avatar"
            className={styles.profileImg}
          />
          <input
            id={id}
            type="text"
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
      )}
      {allComment &&
        allComment.map((comment) => (
          <div key={id} className="d-flex align-items-center gap-2">
            <img
              src={comment.commentProfile}
              alt="avatar"
              className={styles.profileImg}
            />

            <div className={styles.commentContainer}>
              <h6 className="m-0 p-0 fw-bold text-capitalize">
                {comment.userName}
              </h6>
              <p className="m-0 p-0">{comment.comment}</p>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Comment;
