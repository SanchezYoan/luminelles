import React, { useState } from "react";
import NewPost from "./NewPost";
import Thread from "./Thread";

const Comments = () => {
  const [userId, setUserId] = useState("");

  return (
    <div className="comments-container">
      <div className="login">
        <h3>Bonjour</h3>
        <input
          type="text"
          placeholder="Pseudo"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <NewPost userId={userId} />
      <Thread userId={userId} />
    </div>
  );
};

export default Comments;
