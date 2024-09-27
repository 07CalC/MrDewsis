export const OrderStatus = () => {
  return (
    <div className="flex  md:px-8 py-8 justify-center items-center">
      <div className="md:w-3/4 rounded-2xl py-8 md:p-8  grid justify-center items-center bg-white">
        <strong className="text-4xl font-serif">Order Status</strong>
        <div className="mt-5 w-full text-center md:flex md:flex-col md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <div className="md:flex">
            <img
              src="https://static.toiimg.com/thumb/54734028.cms?imgsize=73275&width=800&height=800"
              className="md:w-1/4"
            />
            <div className="flex ml-4 md:text-start flex-col">
              <div className="md:flex justify-between">
                <div>
                  <strong className="text-2xl">
                    Grilled Chicken Sandwhich
                  </strong>
                </div>
              </div>
              <p className="text-xl text-slate-800">
                Calories: 400 calories per Sandwhich
              </p>

              <p className="text-2xl font-bold text-red-900">Price: 350</p>
            </div>
          </div>
          <div className="w-full mt-5 flex flex-col  rounded-2xl">
            <div className="w-full h-4 bg-white rounded-2xl">
              <div className="w-2/5 bg-[#208856] h-4 rounded-2xl"></div>
            </div>
            <div className="w-full text-black flex justify-between">
              <p className="text-sm md:text-lg mx-2">Order accepted</p>
              <p className="text-sm md:text-lg mx-2">preparing</p>
              <p className="text-sm md:text-lg mx-2">packaging</p>
              <p className="text-sm md:text-lg mx-2">out for delivery</p>
              <p className="text-sm md:text-lg mx-2">delivered</p>
            </div>
          </div>
        </div>
        <div className=" mt-5 w-full text-center md:flex md:flex-col md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <div className="md:flex">
            <img
              src="https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg"
              className="md:w-1/4"
            />
            <div className="flex ml-4 md:text-start flex-col">
              <div className="md:flex justify-between">
                <div>
                  <strong className="text-2xl">
                    Tom Yum Soup
                  </strong>
                </div>
              </div>
              <p className="text-xl text-slate-800">
                Calories: 180 calories per bowl
              </p>

              <p className="text-2xl font-bold text-red-900">Price: 300</p>
            </div>
          </div>
          <div className="w-full mt-5 flex flex-col  rounded-2xl">
            <div className="w-full h-4 bg-white rounded-2xl">
              <div className="w-1/5 bg-[#208856] h-4 rounded-2xl"></div>
            </div>
            <div className="w-full text-black flex justify-between">
              <p className="text-sm md:text-lg mx-2">Order accepted</p>
              <p className="text-sm md:text-lg mx-2">preparing</p>
              <p className="text-sm md:text-lg mx-2">packaging</p>
              <p className="text-sm md:text-lg mx-2">out for delivery</p>
              <p className="text-sm md:text-lg mx-2">delivered</p>
            </div>
            </div>
          </div>
        
        <div className=" mt-5 w-full text-center md:flex md:flex-col md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <div className="md:flex">
            <img
              src="https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
              className="md:w-1/4"
            />
            <div className="flex ml-4 md:text-start flex-col">
              <div className="md:flex justify-between">
                <div>
                  <strong className="text-2xl">
                    Margarita Pizza
                  </strong>
                </div>
              </div>
              <p className="text-xl text-slate-800">
                Calories: 200 calories per Slice
              </p>

              <p className="text-2xl font-bold text-red-900">Price: 500</p>
            </div>
          </div>
          <div className="w-full mt-5 flex flex-col  rounded-2xl">
            <div className="w-full h-4 bg-white rounded-2xl">
              <div className="w-4/5 bg-[#208856] h-4 rounded-2xl"></div>
            </div>
            <div className="w-full text-black flex justify-between">
            <p className="text-sm md:text-lg mx-2">Order accepted</p>
              <p className="text-sm md:text-lg mx-2">preparing</p>
              <p className="text-sm md:text-lg mx-2">packaging</p>
              <p className="text-sm md:text-lg mx-2">out for delivery</p>
              <p className="text-sm md:text-lg mx-2">delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
