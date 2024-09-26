export const Cart = () => {
  return (
    <div className="w-full md:mt-0 md:p-10 py-10 flex flex-col  items-center justify-center">
      <div className="grid md:flex">
        <div className="flex flex-col items-center rounded-2xl justify-center p-10 bg-white py-10">
          <div className="mt-10 flex flex-col items-center justify-center md:grid md:grid-cols-3">
            <div className="md:w-5/6 w-11/12 text-center flex flex-col justify-center items-center p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
              <img src="https://static.vecteezy.com/system/resources/previews/036/627/223/non_2x/ai-generated-savory-dal-makhani-delight-on-transparent-background-png.png" />
              <strong className="text-lg">Dal makhani</strong>

              <p>
                <strong>Calories: 300</strong>
              </p>

              <p>
                <strong className="text-xl">350</strong>
              </p>
              <p>
                <strong className="text-xl">qty: 1</strong>
              </p>
            </div>
            <div className="md:w-5/6 w-11/12 text-center flex flex-col justify-center items-center p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
              <img src="https://static.vecteezy.com/system/resources/previews/029/107/695/non_2x/chocolate-milkshake-with-toppings-on-a-transparent-background-ai-generative-free-png.png" />
              <strong className="text-lg">chocolate smoothie</strong>

              <p>
                <strong>Calories: 307</strong>
              </p>

              <p>
                <strong className="text-xl">200</strong>
              </p>
              <p>
                <strong className="text-xl">qty: 2</strong>
              </p>
            </div>
            <div className="md:w-5/6 w-11/12 text-center flex flex-col justify-center items-center p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
              <img src="https://theeburgerdude.com/wp-content/uploads/2024/02/Alfredo-2-scaled.jpg" />
              <strong className="text-lg">Pasta Alfredo</strong>

              <p>
                <strong>Calories: 450</strong>
              </p>

              <p>
                <strong className="text-xl">400</strong>
              </p>
              <p>
                <strong className="text-xl">qty: 1</strong>
              </p>
            </div>
            <div className="md:w-5/6 w-11/12 text-center flex flex-col justify-center items-center p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
              <img src="https://static.toiimg.com/thumb/54734028.cms?imgsize=73275&width=800&height=800" />
              <strong className="text-lg">Grilled Chicken Sandwich</strong>

              <p>
                <strong>Calories: 400</strong>
              </p>

              <p>
                <strong className="text-xl">350</strong>
              </p>
              <p>
                <strong className="text-xl">qty: 1</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center h-auto rounded-2xl p-4 bg-white mt-6 md:mt-0 md:ml-4">
          <strong className="text-2xl"> order summary</strong>
          <p className="text-xl">total price: 1500</p>
          <p className="text-xl">total calories: 1457</p>
          <button className="bg-[#208856] mx-4 p-4 text-white hover:bg-[#27a567] rounded-2xl">
              proceed 
            </button>
        </div>
      </div>
    </div>
  );
};
