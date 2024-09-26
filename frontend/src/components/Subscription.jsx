import { FaCrown } from "react-icons/fa";


export const Subscription = () => {
  return (
    <div className="rounded-2xl hover:scale-110 items-center p-4 py-4 flex flex-col bg-[#f7d000] shadow-lg shadow-[#ffeb77] h-2/6 w-full">
        <a href="#/pro">
      <strong
        className="text-4xl flex text-center text-[#208856]"
        style={{ fontStyle: "italic", fontFamily: "dancing-script" }}
      >
        Join Dewsis Pro  <FaCrown />
      </strong>
      </a>

    </div>
  );
};
