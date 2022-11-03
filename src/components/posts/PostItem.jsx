import styles from "./posts.module.css";
import { FaRegHeart } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";


const PostItem = ({
  name,
  timestamp,
  postImg,
  profileImg,
  message,
  deletePostHandler,
  id,
}) => {
  const [heartIcon, setHeartIcon] = useState(false);
  const handleClickIcon = () => {
    setHeartIcon(!heartIcon);
  };

  return (
    <div className={`${styles.itemContainer} shadow-sm rounded-4 p-4 `}>
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
          {heartIcon ? (
            <FaRegHeart
              className={`${styles.icon} me-2 `}
              onClick={handleClickIcon}
            />
          ) : (
            <BsFillHeartFill
              className={`${styles.heart} me-2 `}
              onClick={handleClickIcon}
            />
          )}

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
  );
};

export default PostItem;
