

export const Feedback = () => {
  
  return (
    <div className="flex px-4 md:px-8 py-8 justify-center items-center">
      <div className="md:w-3/4 rounded-2xl p-8  grid justify-center items-center bg-white">
        <strong className="text-4xl font-serif">Rate your Experience</strong>
        <div className="md:w-5/6 mt-5 w-11/12 text-center md:flex md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <img
            src="https://static.toiimg.com/thumb/54734028.cms?imgsize=73275&width=800&height=800"
            className="md:w-1/4"
          />
          <div className="flex ml-4 md:text-start flex-col">
            <div className="md:flex justify-between">
              <div>
                <strong className="text-2xl">Grilled Chicken Sandwhich</strong>
              </div>
            </div>
            <p className="text-xl text-slate-800">
              Calories: 400 calories per Sandwhich
            </p>

            <p className="text-2xl font-bold text-red-900">Price: 350</p>
            <textarea className="rounded-2xl mt-4 ml-3 p-2" placeholder="Your thoughts"></textarea>
            <button className="bg-[#208856] mx-4 p-2 mt-4 text-white hover:bg-[#27a567] h-full rounded-2xl">
              Submit
            </button>
          </div>
        </div>
        <div className="md:w-5/6 mt-5 w-11/12 text-center md:flex md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <img
            src="https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg"
            className="md:w-1/4"
          />
          <div className="flex ml-4 md:text-start flex-col">
            <div className="md:flex justify-between">
              <div>
                <strong className="text-2xl">Tom Yum Soup</strong>
              </div>
            </div>
            <p className="text-xl text-slate-800">
              Calories: 180 calories per bowl
            </p>

            <p className="text-2xl font-bold text-red-900">Price: 300</p>
            <textarea className="rounded-2xl mt-4 ml-3 p-2" placeholder="Your thoughts"></textarea>
            <button className="bg-[#208856] mx-4 p-2 mt-4 text-white hover:bg-[#27a567] h-full rounded-2xl">
              Submit
            </button>
          </div>
        </div>
        <div className="md:w-5/6 mt-5 w-11/12 text-center md:flex md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <img
            src="https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
            className="md:w-1/4"
          />
          <div className="flex ml-4 md:text-start flex-col">
            <div className="md:flex justify-between">
              <div>
                <strong className="text-2xl">Margarita Pizza</strong>
              </div>
            </div>
            <p className="text-xl text-slate-800">
              Calories: 280 calories per slice
            </p>

            <p className="text-2xl font-bold text-red-900">Price: 500</p>
            <textarea className="rounded-2xl mt-4 ml-3 p-2" placeholder="Your thoughts"></textarea>
            <button className="bg-[#208856] mx-4 p-2 mt-4 text-white hover:bg-[#27a567] h-full rounded-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
