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

const Posts = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [posts, setPosts] = useState([]);

  const imgPickerRef = useRef();

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
        image: url,
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
        toast.success("post deleted");
      });
  };

  return (
    <section className={`${styles.wrapper}`}>
      <div
        className={`${styles.inputContainer} shadow-sm d-flex align-items-center justify-content-center gap-4`}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="avatar"
          className={styles.profileImg}
        />
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
            <FcGallery className="fs-5" />
          </label>
          <PrimaryBtn title="Post" />
        </form>
      </div>

      {url && (
        <div className={styles.imgUploaded}>
          <img src={url} className="img-fluid" />
        </div>
      )}

      {!posts.length && (
        <>
          <div className="shadow-sm p-5 rounded-4 mx-auto my-5 w-50">
            <Skeleton active />
          </div>

          <div className="shadow-sm p-5 rounded-4   mx-auto w-50">
            <Skeleton active />
          </div>
        </>
      )}

      {posts.map((post) => (
        <PostItem
          id={post.id}
          key={post.id}
          name={post.data.userName}
          timestamp={post.data.timestamp}
          postImg={post.data.image}
          profileImg={post.data.profileImg}
          message={post.data.message}
          deletePostHandler={deletePostHandler}
        />
      ))}
      <ToastContainer className={styles.toastContainer} />
    </section>
  );
};

export default Posts;
