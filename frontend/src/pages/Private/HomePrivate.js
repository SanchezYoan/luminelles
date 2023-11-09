import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="container p-5">
      <h1 className="display-3 text-black">
        {currentUser ? "Bonjour à toi" : "Rejoins-nous ! "}
      </h1>
    </div>
  );
};

export default Home;
