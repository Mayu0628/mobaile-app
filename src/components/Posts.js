import React, { useEffect, useState } from "react";
import "./css/Post.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

export const Posts = () => {
  const { eventId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const q = query(collection(db, "createpost"), where("id", "==", eventId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
      console.log(data);
    };

    if (eventId) {
      getPosts();
    }
  }, [eventId]);

  if (posts.length === 0) {
    return (
      <div className="no-reviews">
        <h2>口コミはまだありません</h2>
      </div>
    );
  }

  return (
    <div className="user-reviews">
      {posts.map((post) => (
        <div key={post.id} className="review-content">
          <h3>{post.nickname}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
