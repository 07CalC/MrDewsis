import { FaFlag, FaPhoneAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="w-full md:mt-0 md:p-10 py-10 flex flex-col items-center justify-center">
      <div className="rounded-2xl p-4 md:flex grid justify-center items-center bg-white h-2/6 w-full">
        <div className="flex flex-col text-center md:border-r-2 p-5 border-black mx-10 items-center">
          <FaPhoneAlt className="text-[2rem] w-[3rem] text-white h-[3rem] bg-[#208856] rounded-full p-2" />
          <strong className="text-2xl font-sans mt-3">Contact Us</strong>
          <p className="text-xl mt-3">+91 9984 555 888</p>
          <p className="text-xl">contact@mrdewsis.com </p>
        </div>
        <div className="flex flex-col text-center p-5 border-black mx-10 items-center">
          <FaMap className="text-[2rem] w-[3rem] text-white h-[3rem] bg-[#208856] rounded-full p-2" />
          <strong className="text-2xl mt-3 font-sans">
            Registered Office:
          </strong>
          <p className="text-xl mt-3">2, Mahatma Gandhi Marg,</p>
          <p className="text-xl">Opposite High Court Hanuman Mandir,</p>
          <p className="text-xl">Prayagraj 211001 </p>
        </div>
        <div className="flex flex-col text-center p-5 md:border-l-2 border-black mx-10 items-center">
          <MdOutlinePhoneInTalk className="text-[2rem] w-[3rem] text-white h-[3rem] bg-[#208856] rounded-full p-2" />
          <strong className="text-2xl mt-3 font-sans">Our Presence</strong>
          <p className="text-xl mt-3">Allahabad High Court, </p>
          <p className="text-xl">Mediation Center, Allahabad </p>
          <p className="text-xl">Airport, MNNIT, IIIT-A, </p>
          <p className="text-xl"> Cantonment Board, Schools,</p>
          <p className="text-xl">Hospital, Platinum Inn, Sarovar Palace</p>
        </div>
      </div>
      <div className="rounded-2xl p-8 md:flex md:justify-between grid mt-12 justify-center items-center bg-white h-2/6 w-full">
        <div>
          <img src="https://www.mrdewsis.com/assets/images/section/about.jpg" />
        </div>
        <div></div>
        <div className=" justify-center items-center flex flex-col">
          <strong className="text-5xl text-center text-[#208856] font-serif">
            Just drop a line!
          </strong>
          <p className="text-xl w-4/5 text-center ">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.{" "}
          </p>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block leading-6 text-black text-xl"
                >
                  Name
                </label>
                <div className="mt-1">
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
                <label
                  htmlFor="email"
                  className="block leading-6 text-black text-xl"
                >
                  Email address
                </label>
                <div className="mt-1">
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
                    htmlFor="phone"
                    className="block font-medium leading-6 text-black text-xl"
                  >
                    phone
                  </label>
                </div>
                <div className="mt-1">
                  <label className="input border rounded-md border-slate-300 input-bordered bg-primary flex items-center gap-2">
                    <input
                      name="phone"
                      className="block bg-primary rounded-md text-center w-full border-0 py-1.5 text-black shadow-sm  placeholder:text-gray-400 placeholder:text-2xl  text-2xl sm:leading-6"
                    />
                  </label>
                </div>
                <div>
                <label
                  htmlFor="email"
                  className="block leading-6 mt-4 text-black text-xl"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    required
                    className="block bg-primary text-center w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:ring-inset  text-2xl sm:leading-6"
                  />
                </div>
              </div>
              </div>

              <div>
                <button
                  type="none"
                  className="flex w-full justify-center rounded-md bg-accent hover:bg-accent/75 text-white hover:bg-[#27a567] px-3 py-1.5 text-sm font-semibold leading-6 bg-[#208856]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div>

        </div> */}
      </div>
    </div>
  );
};
