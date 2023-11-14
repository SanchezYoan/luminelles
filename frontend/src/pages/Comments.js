import React, { useEffect } from "react";
import NewPost from "../components/NewPost";
import Thread from "../components/Thread";

import { useDispatch } from "react-redux";
import { getUser } from "../feature/user.slice";
import { usePseudo } from "../context/pseudoContext";

const Comments = () => {
  const { pseudo } = usePseudo();
  const dispatch = useDispatch();
  const random = Math.floor(Math.random() * 12345);

  useEffect(() => {
    dispatch(getUser(pseudo));
  }, []);
  return (
    <div className="comments-container">
      <div className="login">
        <h3>{pseudo !== "" ? pseudo : `Anonym ${random}`}</h3>
      </div>
      <NewPost />
      <Thread />
    </div>
  );
};

export default Comments;
