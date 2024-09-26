
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




export const AdminLogin = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className="md:p-8 py-8 px-0 flex items-center justify-center">
    <div className="rounded-2xl p-8 md:flex grid justify-center items-center bg-white h-2/6 w-5/6" >
      <div className=" mx-auto mb-10 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center align-middle">
        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-4xl font-bold leading-9 tracking-tight text-[#208856]">
            Admin Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block leading-6 text-black text-xl"
              >
                Admin Id
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  
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
            Probelm logging in?{" "}
            Contact Manager
          </p>
              </div>
             
            </div>
            
            <div>
              <button
                type="none"
                
                className="flex w-full justify-center rounded-md bg-accent hover:bg-accent/75 text-white hover:bg-[#27a567] px-3 py-1.5 text-sm font-semibold leading-6 bg-[#208856]"
              >
                Sign In
              </button>
            </div>
           
          </form>
          

          
        </div>
      </div>
    </div>
    </div>
    )
}