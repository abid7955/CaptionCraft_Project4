import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/navbar";
import Login1 from "./components/emailLogin";
import Reset from "./components/resetPassword";
import Signup from "./components/signup";
import Phone from "./components/phoneLogin";
import OTP from "./components/phoneOTP";
import Gallery from "./pages/GalleryPage";
import Homepage from "./pages/Homepage";
import Generate from "./pages/GeneratePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login1 />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
