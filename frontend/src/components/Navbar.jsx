import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../assets/context";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  
  const context = useContext(Context)
  const [showNav, setShowNav] = useState(false)
  return (
    <>
    {/* <div className="flex bg-slate-300 bg-opacity-40 justify-center items-center"> */}
      <nav class="bg-white border-b-2 border-black w-lvw rounded-b-3xl">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqS71-yY0eGFtOG-SEyPfsuODJHNN4sEl1y7-f_gowAm1S_YWMkXlPdLR2pmnkugDxx-w&usqp=CAU"
              className="h-20 w-20 rounded-full"
              alt="LOGO"
            />
            
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#/menu"
                  class="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                >
                  Menu
                </a>
              </li>
              <li  className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]">
              <a href="#/about">
                About Us
              </a>
              </li>
              <li>
                <a
                  href="#/contact"
                  className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                >
                  Contact Us
                </a>
              </li>
              {!context.isLoggedIn && <> <li>
                <a
                  href="#/login"
                  className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#/adminlogin"
                  className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                >
                  Admin Login
                </a>
              </li> </>}
              {context.isLoggedIn && <>
              <li>
                <a
                href="#/feedback"
                className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                >Feedback</a>
              </li>
              <li>
                <a
                href="#/orderstatus"
                className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                >Orders</a>
              </li>
                <li>
                <a
                  href="#/cart"
                  className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                >
                  <FaShoppingCart className="text-2xl"/>
                </a>
              </li>
              
              </>}
            </ul>
          </div>
          <div className="md:hidden flex items-center mr-4 self-center">
            {context.isLoggedIn && <a href="#/cart"><FaShoppingCart className="text-3xl mr-4"/></a>}
            <TiThMenu className="text-3xl" onClick={()=>setShowNav(!showNav)}/>
          </div>
          <div className={`${showNav ? "" : "hidden"} w-svw h-full  cursor-pointer bg-white bg-opacity-60 justify-end items-end lg:hidden`}>
          <div className="flex flex-col p-5 justify-center items-center">
          <p className="font-bold text-2xl border-b border-[#208856]  text-black"><a onClick={()=>setShowNav(!showNav)} href="#" className="mx-5 ">Home</a></p>
            <p  className="font-bold text-2xl border-b border-[#208856]  text-black"><a onClick={()=>setShowNav(!showNav)} href="#/menu" className="mx-5">Menu</a></p>
            <p className="font-bold text-2xl border-b border-[#208856]  text-black"><a onClick={()=>setShowNav(!showNav)} href="#/about" className="mx-5">About Us</a></p>
            <p className="font-bold text-2xl border-b border-[#208856] text-center text-black"><a onClick={()=>setShowNav(!showNav)} href="#/contact" className="mx-5">Contact Us</a></p>
            <p className="font-bold text-2xl border-b border-[#208856] text-center text-black"><a onClick={()=>setShowNav(!showNav)} href="#/feedback" className="mx-5">Feedback</a></p>
            <p className="font-bold text-2xl border-b border-[#208856] text-center text-black"><a onClick={()=>setShowNav(!showNav)} href="#/orderstatus" className="mx-5">Orders</a></p>
            {!context.isLoggedIn && <><p className="font-bold text-2xl border-b border-[#208856]  text-black"><a onClick={()=>setShowNav(!showNav)} href="#/login" className="mx-5">Login</a></p>
            <p className="font-bold text-2xl border-b border-[#208856]  text-black"><a onClick={()=>setShowNav(!showNav)} href="#/adminlogin" className="mx-5">Admin Login</a></p> </>}
          </div>
        </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
};
