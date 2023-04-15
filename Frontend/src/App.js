import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOME from "./pages/HOME";
import DETAILS from "./pages/DETAILS";
import REGISTER from "./pages/REGISTER";
import VOLUNTEERLOGIN from "./pages/VOLUNTEERLOGIN";
import CREATEFORUM from "./pages/CREATEFORUM";
import ORGANISEANEVENT from "./pages/ORGANISEANEVENT";
import ORGANISERLOGIN from "./pages/ORGANISERLOGIN";
import SIGNUP from "./pages/SIGNUP";
import LOGIN from "./pages/LOGIN";
import TEAM from "./pages/TEAM";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/details":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/volunteer-login":
        title = "";
        metaDescription = "";
        break;
      case "/create-forum":
        title = "";
        metaDescription = "";
        break;
      case "/organise-an-event":
        title = "";
        metaDescription = "";
        break;
      case "/organiserlogin":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/team":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/details" element={<DETAILS />} />
      <Route path="/register" element={<REGISTER />} />
      <Route path="/volunteer-login" element={<VOLUNTEERLOGIN />} />
      <Route path="/create-forum" element={<CREATEFORUM />} />
      <Route path="/organise-an-event" element={<ORGANISEANEVENT />} />
      <Route path="/organiserlogin" element={<ORGANISERLOGIN />} />
      <Route path="/signup" element={<SIGNUP />} />
      <Route path="/login" element={<LOGIN />} />
      <Route path="/team" element={<TEAM />} />
    </Routes>
  );
}
export default App;
