import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeekEnd from "./pages/WeekEnd";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Day from "./pages/Day";

const App = () => {
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
