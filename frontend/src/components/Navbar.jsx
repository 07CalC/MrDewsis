import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    {/* <div className="flex bg-slate-300 bg-opacity-40 justify-center items-center"> */}
      <nav class="bg-white border-b-2 border-black w-lvw rounded-b-3xl">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqS71-yY0eGFtOG-SEyPfsuODJHNN4sEl1y7-f_gowAm1S_YWMkXlPdLR2pmnkugDxx-w&usqp=CAU"
              className="h-20 w-20"
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
                  href="#"
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
                  href="#"
                  className="block py-2 px-1 text-xl text-black font-bold hover:text-[#208856]"
                >
                  Contact Us
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center mr-4 self-center">
            <FaSearch className="text-3xl mx-2"/>
            <TiThMenu className="text-3xl"/>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
};
