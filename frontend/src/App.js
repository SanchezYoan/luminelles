import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeekEnd from "./pages/WeekEnd";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Day from "./pages/Day";
import Comments from "./pages/Comments";
import SignUpModal from "./components/SignUpModal";
import Private from "./pages/Private/Private";
import PrivateProfil from "./pages/Private/PrivateProfil/PrivateProfil";
import SignInModal from "./components/SignInModal";
import NavConnexion from "./components/NavConnexion";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <NavConnexion />
      <SignUpModal />
      <SignInModal />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/weekend" element={<WeekEnd />}></Route>
        <Route path="/day" element={<Day />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/comments" element={<Comments />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateProfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
