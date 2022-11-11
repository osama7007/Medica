import styles from "./posts.module.css";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { useEffect } from "react";
import firebase from "../../../node_modules/firebase/compat";
import PostItem from "./PostItem";
import { FcGallery } from "react-icons/fc";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Skeleton } from "antd";
import { useSelector } from "react-redux";


const Posts = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState([]);
  const [url, setUrl] = useState("");
  const [posts, setPosts] = useState([]);
  const imgPickerRef = useRef();

  const userId = useSelector((state) => state.auth.id);
  const { profileImg, userName } = useSelector((state) => state.auth);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
      });
  }, []);




  const handleSubmit = (e) => {
    e.preventDefault();
    if (input || url) {
      db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        userName : userName,
        userProfile: profileImg || '',
        image: url,
        comments: [],
        likes: [],
        userId: userId,
      });
      setInput("");
      setUrl("");
    } else {
      return;
    }
  };

  const handleImg = (e) => {
    e.preventDefault();
    let pickedimg;
    if (e.target.files && e.target.files.length > 0) {
      pickedimg = e.target.files[0];
      setImage(pickedimg);
      imgPickerRef.current.click();
    }
  };

  useEffect(() => {
    if (!image) {
      return;
    }
    const imgReader = new FileReader();
    imgReader.onload = () => {
      setUrl(imgReader.result);
    };
    imgReader.readAsDataURL(image);
  }, [image]);

  const deletePostHandler = (id) => {
    db.collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        toast.success("post Deleted");
      });
  };

  const addingCommentHandler = (id) => {
    if (comment) {
      db.collection("posts")
        .doc(id)
        .update({
          comments: firebase.firestore.FieldValue.arrayUnion({
            commentProfile : profileImg,
            userName: userName,
            comment: comment,
            createdAt: new Date(),
          }),
        });
    } else return;
  };



  const addingLikeHandler = (id) => {
    db.collection("posts")
      .doc(id)
      .update({
        likes: firebase.firestore.FieldValue.arrayUnion(userId),
      });
  };

  return (
    <section className={`${styles.wrapper} w-100 ms-auto`}>
      <div
        className={`${styles.inputContainer} shadow-sm d-flex align-items-center justify-content-center gap-4`}
      >
        <img src={profileImg} alt="avatar" className={styles.profileImg} />
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's in your mind?"
          />

          <label className={styles.label}>
            <input
              type="file"
              className="d-none"
              ref={imgPickerRef}
              onChange={handleImg}
              accept=".jpg,.png,.jpeg"
            />
            <FcGallery className="fs-3 mt-2 pe-2" />
          </label>
          <PrimaryBtn title="Post" />
        </form>
      </div>

      {url && (
        <div className={`${styles.imgUploaded}`}>
          <img src={url} className="img-fluid" />
        </div>
      )}

      {!posts.length && (
        <div className="shadow-sm p-5 rounded-4 mx-auto my-5 w-50">
          <Skeleton active />
        </div>
      )}

      {posts.map((post) => (
        <PostItem
          id={post.id}
          key={post.id}
          name={post.data.userName}
          userProfile = {post.data.userProfile}
          timestamp={post.data.timestamp}
          postImg={post.data.image}
          userID={post.data.userId}
          message={post.data.message}
          likes={post.data.likes}
          deletePostHandler={deletePostHandler}
          addingCommentHandler={addingCommentHandler}
          addingLikeHandler={addingLikeHandler}
          allComment={post.data.comments}
          allLikes={post.data.likes}
          setComment={setComment}
          comment={comment}
        />
      ))}

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
    </section>
  );
};

export default Posts;
