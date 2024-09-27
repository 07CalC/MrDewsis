
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroPage } from "./pages/Hero";

import { About } from "./pages/About";
import { Subscription } from "./pages/Subscription";

import { Login } from "./pages/UserLogin";
import { SignUp } from "./pages/UserSignUp";
import { AdminLogin } from "./pages/AdminLogin";
import { Footer } from "./components/Footer";
import { Contact } from "./pages/ContactUs";
import { ContextProvider } from "./assets/context";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";
import { Feedback } from "./pages/Feedback";

function App() {
  return (
    <div className="bg-[#208856]">
      <ContextProvider>
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
      </HashRouter>
        
        <Footer />
        
        </ContextProvider>
      </div>
      
    
  );
}

export default App;
