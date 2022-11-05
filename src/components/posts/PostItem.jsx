import styles from "./posts.module.css";
import { BsTrash } from "react-icons/bs";
import Comment from "./Comment";

const PostItem = ({
  name,
  timestamp,
  postImg,
  profileImg,
  message,
  deletePostHandler,
  likes,
  comments,
  updateLikes,
  id,
}) => {
  return (
    <div className={`${styles.itemContainer} shadow-sm rounded-4  `} >
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
      <Comment likes={likes} comments={comments} updateLikes={updateLikes} id={id} />
    </div>
  );
};

export default PostItem;
