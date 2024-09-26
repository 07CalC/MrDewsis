import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroPage } from "./pages/Hero";
import { AboutUs } from "./components/AboutUs";
import { About } from "./pages/About";
import { Subscription } from "./pages/Subscription";

import { Login } from "./pages/UserLogin";
import { SignUp } from "./pages/UserSignUp";
import { AdminLogin } from "./pages/AdminLogin";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#208856]">
      <div className="fixed flex w-full bg-opacity-40">
      <Navbar />
      </div>
      <div className="h-20"></div>
      <HashRouter>
          <Routes>
            <Route path="/" element={<HeroPage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/pro" element={<Subscription />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
          </Routes>
      </HashRouter>
      <div className="bg-[#0d3f27] h-80 w-full rounded-t-2xl">
        <Footer />
      </div>
      </div>
      
    
  );
}

export default App;
