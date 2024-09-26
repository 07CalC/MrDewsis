
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Context } from "../assets/context";


export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const context = useContext(Context)
    return (
        <div className="md:p-8 py-8 px-0 items-center justify-center">
      <div className="mx-auto p-0 md:p-10 bg-white rounded-2xl flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 w-5/6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-4xl font-bold leading-9 tracking-tight text-[#208856]">
            Create a new account
          </h2>
        </div>

        <div className="mt-5 justify-center flex flex-col  sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 justify-center flex flex-col ">
            
            <div>
              <label
                htmlFor="firstName"
                className="block font-medium leading-6 text-black text-xl"
              >
                 Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  
                  autoComplete=""
                  className="block bg-primary text-center w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:ring-inset  text-2xl sm:leading-6"
                />
              </div>
             
            </div>

        

            <div>
              <label
                htmlFor="userName"
                className="block font-medium leading-6 text-black text-xl"
              >
                Number
              </label>
              <div className="mt-2">
                <input
                  id="Number"
                  name="Number"
                  type="Number"
                  required
                  
                  autoComplete="none"
                  className="block bg-primary text-center w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:ring-inset  text-2xl sm:leading-6"
                />
              </div>
              
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium leading-6 text-black text-xl"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  
                  autoComplete="email"
                  className="block bg-primary text-center w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:ring-inset  text-2xl sm:leading-6"
                />
              </div>
              
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block font-medium leading-6 text-black text-xl"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
              <label className="input border rounded-md border-slate-300 input-bordered bg-primary flex items-center gap-2">
              <input type={showPassword ? "text" : "password"} name="password" className="block bg-primary rounded-md text-center w-full border-0 py-1.5 text-black shadow-sm  placeholder:text-gray-400 placeholder:text-2xl  text-2xl sm:leading-6" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 mr-3 w-6 opacity-70"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl"/>}
              </svg>
            </label>
            <p className="text-start text-sm text-blue-500">
            Already have an account {" "}
            <a
              href="#/login"
              className="font-semibold leading-6 text-blue-500 hover:text-blue-700 cursor-pointer text-accent hover:text-accent/75"
            >
              Sign In
            </a>
          </p>
              </div>
              
              
            </div>
            <div>
              <button
                type="none"
                onClick={() => context.setIsLoggedIn(true)}
                className="flex w-full justify-center rounded-md bg-accent hover:bg-accent/75 text-white hover:bg-[#27a567] px-3 py-1.5 text-sm font-semibold leading-6 bg-[#208856]"
              >
                <a href="#">
                Sign Up
                </a>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
    )
}