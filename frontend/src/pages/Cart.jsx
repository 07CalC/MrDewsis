export const Cart = () => {
  return (
    <div className="md:flex p-4 w-full">
      <div className="md:w-3/4 rounded-2xl p-8  grid justify-center items-center bg-white">
        <strong className="text-4xl font-serif">Shopping Cart</strong>
        <div className="md:w-5/6 mt-5 w-11/12 text-center md:flex md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <img src="https://static.toiimg.com/thumb/54734028.cms?imgsize=73275&width=800&height=800" className="md:w-1/4" />
          <div className="flex ml-4 md:text-start flex-col">
          <div className="md:flex justify-between">
            <div>
          <strong className="text-2xl">Grilled Chicken Sandwhich</strong>
          </div>
          <div>
          <select className="p-1 md:ml-8 rounded-2xl bg-[#208856] text-white text-lg">
            <option >Qty</option>
            <option selected>1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
          </select>
          </div>
          </div>
          <p className="text-xl text-slate-800">Calories: 400 calories per Sandwhich</p>
          <p className="text-lg text-slate-600">American</p>
          <p className="text-lg text-slate-600">Main Course</p>
          <p className="text-lg text-slate-600">Lunch</p>
          <p className="text-2xl font-bold text-red-900">Price: 350</p>
          </div>
        </div>
        <div className="md:w-5/6 mt-5 w-11/12 text-center md:flex md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <img src="https://static.toiimg.com/thumb/54734028.cms?imgsize=73275&width=800&height=800" className="md:w-1/4" />
          <div className="flex ml-4 md:text-start flex-col">
          <div className="md:flex justify-between">
            <div>
          <strong className="text-2xl">Grilled Chicken Sandwhich</strong>
          </div>
          <div>
          <select className="p-1 md:ml-8 rounded-2xl bg-[#208856] text-white text-lg">
            <option >Qty</option>
            <option selected>1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
          </select>
          </div>
          </div>
          <p className="text-xl text-slate-800">Calories: 400 calories per Sandwhich</p>
          <p className="text-lg text-slate-600">American</p>
          <p className="text-lg text-slate-600">Main Course</p>
          <p className="text-lg text-slate-600">Lunch</p>
          <p className="text-2xl font-bold text-red-900">Price: 350</p>
          </div>
        </div>
        <div className="md:w-5/6 mt-5 w-11/12 text-center md:flex md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <img src="https://static.toiimg.com/thumb/54734028.cms?imgsize=73275&width=800&height=800" className="md:w-1/4" />
          <div className="flex ml-4 md:text-start flex-col">
          <div className="md:flex justify-between">
            <div>
          <strong className="text-2xl">Grilled Chicken Sandwhich</strong>
          </div>
          <div>
          <select className="p-1 md:ml-8 rounded-2xl bg-[#208856] text-white text-lg">
            <option >Qty</option>
            <option selected>1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
          </select>
          </div>
          </div>
          <p className="text-xl text-slate-800">Calories: 400 calories per Sandwhich</p>
          <p className="text-lg text-slate-600">American</p>
          <p className="text-lg text-slate-600">Main Course</p>
          <p className="text-lg text-slate-600">Lunch</p>
          <p className="text-2xl font-bold text-red-900">Price: 350</p>
          </div>
        </div>
        <div className="md:w-5/6 mt-5 w-11/12 text-center md:flex md:justify-start items-start p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
          <img src="https://static.toiimg.com/thumb/54734028.cms?imgsize=73275&width=800&height=800" className="md:w-1/4" />
          <div className="flex ml-4 md:text-start flex-col">
          <div className="md:flex justify-between">
            <div>
          <strong className="text-2xl">Grilled Chicken Sandwhich</strong>
          </div>
          <div>
          <select className="p-1 md:ml-8 rounded-2xl bg-[#208856] text-white text-lg">
            <option >Qty</option>
            <option selected>1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
          </select>
          </div>
          </div>
          <p className="text-xl text-slate-800">Calories: 400 calories per Sandwhich</p>
          <p className="text-lg text-slate-600">American</p>
          <p className="text-lg text-slate-600">Main Course</p>
          <p className="text-lg text-slate-600">Lunch</p>
          <p className="text-2xl font-bold text-red-900">Price: 350</p>
          </div>
        </div>
      </div>
      <div className="flex mt-4 md:mt-0 md:ml-4 md:w-1/4  flex-col">
      <div className=" w-full rounded-2xl p-8 grid items-center justify-center bg-white">
      <strong className="text-2xl font-serif">Order Summary</strong>
      <p className="text-xl mt-5 font-bold">Total Price: 1400</p>
      <p className="text-xl  font-semibold">Total Calorie: 1600</p>
      <p className="text-lg mt-2 text-green-900">Eligible for free delivery</p>
      <button className="p-3 mt-5 w-11/12 hover:bg-[#27a567] text-white bg-[#208856] rounded-full text-xl">Proceed to Pay</button>

      </div>
      
      </div>

    </div>
  );
};
