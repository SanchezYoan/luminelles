import axios from "axios";
import React, { useState } from "react";

const NewPost = ({ userId }) => {
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/post/", {
        message,
        author: userId,
      })
      .then((res) => console.log(res));
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
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default NewPost;
