import styles from "./posts.module.css";
import { BsTrash } from "react-icons/bs";
import Comment from "./Comment";
import { motion } from "framer-motion";

const PostItem = ({
  name,
  timestamp,
  postImg,
  profileImg,
  message,
  deletePostHandler,
  addingCommentHandler,
  addingLikeHandler,
  setComment,
  comment,
  allComment,
  allLikes,
  id,
}) => {
  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
  };

  return (
    <motion.div
      {...animations}
      className={`${styles.itemContainer} shadow-sm rounded-4  `}
    >
      <div className="p-4">
        <div className="d-flex align-items-center mb-3 justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src={profileImg}
              alt={name}
              className={`${styles.profileImg} me-3`}
            />
            <div>
              <h4 className="mb-0">Mohamed Gamal</h4>
              <small className="text-black-50">
                {new Date(timestamp?.toDate()).toUTCString()}
              </small>
            </div>
          </div>
          <div>
            <BsTrash
              className={`${styles.icon} text-danger `}
              onClick={() => deletePostHandler(id)}
            />
          </div>
        </div>

        <div>
          <p className="m-3 fs-5">{message}</p>
          {postImg && <img src={postImg} className="w-100" alt="post image" />}
        </div>
      </div>
      <Comment
        setComment={setComment}
        addingCommentHandler={addingCommentHandler}
        comment={comment}
        id={id}
        allComment={allComment}
        allLikes={allLikes}
        addingLikeHandler={addingLikeHandler}
      />
    </motion.div>
  );
};

export default PostItem;
