import { NavLink } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="rounded-2xl p-8 md:flex grid justify-center items-center bg-white h-2/6 w-full">
      <div className="flex items-center justify-center md:w-1/3 w-full rounded-xl">
        <img
          src="https://www.mrdewsis.com/assets/images/section/about.jpg"
          className="w-full rounded-lg"
        />
      </div>
      <div className="md:w-3/5 text-black text-center items-center flex flex-col justify-center">
        <strong className="text-[#208856] mt-5 md:mt-0 text-center text-4xl font-serif">
          About Mr. Dewsis
        </strong>
        <p className="text-[#2ea86c] mt-5 text-3xl font-serif">
          Deliciously Crafted Meals
        </p>
        <div className="md:w-3/5">
          <p className="text-xl mt-4 text-black">
            Mr. Dewsis is renowned for delivering exquisite culinary
            experiences, ensuring that quality remains uncompromised while
            providing exceptional service. Our journey began in 2011 with the
            launch of our first establishment, Platinum Inn & Mr. Dewsis,
            located on the bustling M.G. Road in Allahabad. Over the past 13
            years, we have expanded significantly, now boasting 12 food outlets
            that reflect our commitment to excellence.
          </p>
          <p className="text-xl mt-4 text-black">
            With over a decade of experience in the Food and Beverage industry,
            we have successfully catered to a diverse range of needs, including
            corporate events, restaurants, cafes, catering services, and
            partnerships with food aggregators. Our outlets are strategically
            located in prominent areas around Allahabad, such as the High Court,
            airports, and esteemed colleges.
          </p>
        </div>
        <button className="bg-[#208856] mt-5 mx-4 p-4 text-white hover:bg-[#27a567] h-full rounded-2xl">
            <NavLink to={"/about"}>
              Read More
              </NavLink>
            </button>
      </div>
    </div>
  );
};
