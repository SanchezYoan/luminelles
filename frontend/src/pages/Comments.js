import React, { useEffect } from "react";
import NewPost from "../components/NewPost";
import Thread from "../components/Thread";

import { useDispatch } from "react-redux";
import { getUser } from "../feature/user.slice";
import { usePseudo } from "../context/pseudoContext";

const Comments = () => {
  const { pseudo } = usePseudo();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(pseudo));
    // error missing dispatch
  }, [pseudo]);
  return (
    <div className="comments-container">
      <div className="login">
        <h3>{pseudo}</h3>
      </div>
      <NewPost />
      <Thread />
    </div>
  );
};

export default Comments;
