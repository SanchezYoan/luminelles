import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeekEnd from "./pages/WeekEnd";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Day from "./pages/Day";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { getUser } from "./feature/user.slice";

const App = () => {
  // const [userId, setUserId] = useState("");
  // const dispatch = useDispatch();

  // useEffect(() => {}, [userId]);
  // dispatch(getUser(userId));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/weekend" element={<WeekEnd />}></Route>
        <Route path="/day" element={<Day />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
