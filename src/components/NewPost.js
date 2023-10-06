import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";
import axios from "axios";

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

    axios.post("http://localhost:5000/post/", data);
    dispatch(createPost(data));
    // GetPost car il faut aller chercher l'ID créé par MongoDB
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
