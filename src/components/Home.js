import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { DB, auth } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postCollectionRef = collection(DB, "posts");

  const deleteButton = async (id) => {
    const userDoc = doc(DB, "posts", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deleteButton]);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deleteButton">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => {
                      deleteButton(post.id);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
