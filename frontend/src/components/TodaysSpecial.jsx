import "@fontsource/dancing-script";

export const TodaysSpecial = () => {
  return (
    <div className="rounded-2xl items-center py-4 flex flex-col bg-white h-2/6 w-full">
      <strong
        className="text-7xl text-center text-[#208856]"
        style={{ fontStyle: "italic", fontFamily: "dancing-script" }}
      >
        Todays Special
      </strong>
      <div className="w-full grid md:flex justify-center items-center">
        <div className="md:w-2/5 w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/627/223/non_2x/ai-generated-savory-dal-makhani-delight-on-transparent-background-png.png"
            className="w-full"
          />
        </div>
        <div className="flex flex-col w-full md:w-2/5 p-8 bg-[#cbf5dd]/50 rounded-2xl">
          <strong className="font-serif font-extrabold text-5xl text-center my-3 text-pink-950">
            Dal Makhani
          </strong>
          <p className="text-pink-950 my-3 text-2xl">
            <strong>Ingredients:</strong> Whole Black Lentils, Red Kidney Beans,
            Onions, Heavy Cream
          </p>
          <p className="text-pink-950 my-3 text-2xl">
            <strong>Calories:</strong> 300 calories per 250gm
          </p>
          <p className="text-red-500 my-3 text-xl">
            Note: Contains legumes, Milk, Chilies
          </p>
          <p className="text-black my-3 text-4xl font-extrabold text-center">
            Price: 350
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-[#208856] mx-4 p-4 text-white hover:bg-[#27a567] h-full rounded-2xl">
              Order Now
            </button>
            <button className="bg-white mx-4 p-4 text-black hover:bg-slate-100 h-full rounded-2xl">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid md:flex justify-center items-center">
      <div className="md:w-2/5 w-full md:hidden">
          <img
            src="https://static.vecteezy.com/system/resources/previews/029/107/695/non_2x/chocolate-milkshake-with-toppings-on-a-transparent-background-ai-generative-free-png.png"
            className="w-full h-1/3 md:hidden"
          />
        </div>
        <div className="flex flex-col w-full md:w-2/5 p-8 bg-[#cbf5dd]/50 rounded-2xl">
          <strong className="font-serif font-extrabold text-5xl text-center my-3 text-pink-950">
            Chocolate Smoothie
          </strong>
          <p className="text-pink-950 my-3 text-2xl">
            <strong>Ingredients:</strong>Banana, Almond Milk, Cocoa Powder, Honey, Vanilla Extract, Peanut Butter
          </p>
          <p className="text-pink-950 my-3 text-2xl">
            <strong>Calories:</strong> 307 calories per one smoothie
          </p>
          <p className="text-red-500 my-3 text-xl">
            Note: Peanut, Almond Milk, Vanilla Extract
          </p>
          <p className="text-black my-3 text-4xl font-extrabold text-center">
            Price: 200
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-[#208856] mx-4 p-4 text-white hover:bg-[#27a567] h-full rounded-2xl">
              Order Now
            </button>
            <button className="bg-white mx-4 p-4 text-black hover:bg-slate-100 h-full rounded-2xl">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="md:w-2/5 w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/029/107/695/non_2x/chocolate-milkshake-with-toppings-on-a-transparent-background-ai-generative-free-png.png"
            className="w-full h-1/3 hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};
