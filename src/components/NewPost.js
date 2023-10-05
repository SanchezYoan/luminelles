import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";

const NewPost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    const data = {
      message,
      author: userId,
    };
    e.preventDefault();

    dispatch(createPost(data));
    // getPost for get Id created by MongoDB
    dispatch(getPosts());
    setMessage("");
  };

  return (
    <div>
      <form
        action=""
        className="new-post-container"
        onSubmit={(e) => handleForm(e)}
      >
        <textarea
          placeholder="Quoi de neuf ?"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default NewPost;
