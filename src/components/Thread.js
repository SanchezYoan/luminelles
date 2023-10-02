import axios from "axios";
import React, { useEffect } from "react";

const Thread = () => {
  useEffect(() => {
    axios.get("http://localhost:5000/post/").then((res) => console.log(res));
  }, []);
  return <div className="thread-container">{}</div>;
};

export default Thread;
