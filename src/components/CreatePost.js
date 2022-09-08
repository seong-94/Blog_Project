import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { DB, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  let navigate = useNavigate();

  const postCollectionRef = collection(DB, "posts");
  const createpost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>CreatePost</h1>
        <div className="inputGp">
          <lable>Title : </lable>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <lable>Post :</lable>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
          <button onClick={createpost}>Submit Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
