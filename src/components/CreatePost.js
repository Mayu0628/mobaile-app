import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

const CreatePost = () => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(""); // エラーメッセージ用の状態
  const id = useParams().eventId;

  const createPost = async (e) => {
    e.preventDefault();
    setError(""); // エラーメッセージをリセット

    try {
      await addDoc(collection(db, "createpost"), {
        nickname: nickname,
        content: content,
        id: id,
      });
      setNickname("");
      setContent("");
      alert("投稿が追加されました"); // または他の通知方法を検討
    } catch (error) {
      setError("投稿の追加に失敗しました: " + error.message);
    }
  };

  return (
    <form onSubmit={createPost} className="create-review">
      {error && <p className="error">{error}</p>}
      <div className="nickname">
        <label htmlFor="nickname">ニックネーム</label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div className="content">
        <label htmlFor="content">内容</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">投稿</button>
    </form>
  );
};

export default CreatePost;
