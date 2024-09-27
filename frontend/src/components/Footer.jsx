import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-[#0d3f27] rounded-t-2xl md:h-[25rem]">
      <div className="md:flex md:p-5 items-center  w-full ">
        <div className="md:w-4/5  md:mx-10 h-full flex justify-center items-center">
          <img
          alt="img"
            src="https://res.cloudinary.com/dkhymc3li/image/upload/v1727367441/images-removebg-preview_1_hizbr2.png"
            className="w-full "
          />
        </div>
        
        <div className="1/5 md:border-l md:border-r mr-8 border-white h-full text-center flex flex-col justify-center items-center">
          <strong className="text-xl md:text-2xl text-center text-white">
            Mr. Dewsis
          </strong>
          <p className="md:text-xl text-lg md:w-3/5 text-white">
            Mr. Dewsis is renowned for delivering exquisite culinary
            experiences, ensuring that quality remains uncompromised while
            providing exceptional service. Our journey began in 2011 with the
            launch of our first establishment, Platinum Inn & Mr. Dewsis,
            located on the bustling M.G. Road in Allahabad. Over the past 13
            years, we have expanded significantly, now boasting 12 food outlets
            that reflect our commitment to excellence.
          </p>
        </div>
        <div className="2/5 h-full mr-4 text-center">
          <strong className="text-center text-xl md:text-2xl text-white">
            Our Presence:
          </strong>
          <p className="md:text-xl text-lg  md:mt-5 text-white">
            Allahabad High Court, Mediation Center, Allahabad Airport, MNNIT,
            IIIT-A, Cantonment Board, Schools, Hospital, Platinum Inn, Hotel
            Sarovar Palace
          </p>
        </div>
      
      </div>
      <div className="md:flex mt-5 text-center justify-between">
        <strong className="text-white w-1/3 text-center mx-10">
          2011 © Copyright Dewsis India Services Pvt. Ltd. All Rights Reserved.
          Powered by Genetic Web Technologies Pvt. Ltd
        </strong>
        <div className="mx-10 items-center justify-center mt-2 md:mt-0 flex">
          <a
            href="https://www.instagram.com/mrdewsisofficial"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-[2.5rem] mt-2 md:mt-0 hover:text-[#6ecc9f] cursor-pointer mx-5 text-white" />
          </a>
          <a
            href="https://www.facebook.com/Mrdewsisofficial/ "
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-[2.5rem] mt-2 md:mt-0 hover:text-[#6ecc9f] cursor-pointer text-white" />
          </a>
        </div>
        <div className="mx-10">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#/menu"
                class="block py-2 px-1 text-xl text-white font-bold hover:text-[#6ecc9f]"
              >
                Menu
              </a>
            </li>
            <li className="block py-2 px-1 text-xl text-white font-bold hover:text-[#6ecc9f]">
              <a href="#/about">About Us</a>
            </li>
            <li>
              <a
                href="#/contact"
                className="block py-2 px-1 text-xl text-white font-bold hover:text-[#6ecc9f]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
