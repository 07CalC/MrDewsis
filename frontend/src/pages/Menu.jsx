import { useState } from "react";
import { MenuItems } from "../assets/menu";

export const Menu = () => {

    const [cuisine, setCuisine] = useState("");
    const [type, setType] = useState("");
    const [time, setTime] = useState("");
    var data = MenuItems
    const getUniqueCuisine = () => {
        let val = MenuItems.map((currElem) => {
            return currElem.cuisine;
        });
        return (val = [...new Set(val)]);
      };

    const UniqueCuisine = getUniqueCuisine()

    const getUniqueType = () => {
        let val = MenuItems.map((currElem) => {
            return currElem.type
        });
        return (val = [...new Set(val)]);
    }
    const uniquiType = getUniqueType()

    const getUniqueTime = () => {
        let val = MenuItems.map((currElem) => {
            return currElem.time
        });
        return (val = [...new Set(val)]);
    }
    const uniqueTime = getUniqueTime()

    if(cuisine){
        data = MenuItems.filter((currElem) => {
            return currElem.cuisine === cuisine
        })
    }
    if(type){
        data = data.filter((currElem) => {
            return currElem.type === type
        }) 
    }
    if(time){
        data = data.filter((currElem) => {
            return currElem.time === time
        })
    }
  return (
    <div className="w-full md:mt-0 md:p-10 py-10 flex flex-col  items-center justify-center">
      <div className="flex flex-col w-full items-center rounded-2xl justify-center md:p-10 bg-white py-10">
        <div className="flex md:5/6">
          <select onChange={(e) => {setCuisine(e.target.value)}} className="bg-[#208856] mx-2 md:mx-10 w-auto border-gray-300 text-white p-3 rounded-full">
            <option value="">All</option>
            {UniqueCuisine.map((cuisine) => (
              <option value={cuisine}>{cuisine}</option>
            ))}
          </select>

          <select onChange={(e) => setType(e.target.value)} className="bg-[#208856] mx-2 md:mx-10 w-auto border-gray-300 text-white p-3 rounded-full">
            <option value="">All</option>
            {uniquiType.map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>

          <select onChange={(e) => setTime(e.target.value)} className="bg-[#208856] mx-2 md:mx-10 w-auto border-gray-300 text-white p-3 rounded-full">
            <option value="">All</option>
            {uniqueTime.map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center md:grid md:grid-cols-3 ">
          {data.map((item) => (
            <div className="md:w-5/6 w-full text-center flex flex-col justify-center items-center p-6 rounded-xl my-4 bg-[#cbf5dd]/50">
              <img src={item.img} />
              <strong className="text-xl">{item.name}</strong>
              <p>
                <strong>Ingredients:</strong> {item.ingredients}
              </p>
              <p>
                <strong>Calories:</strong> {item.calories}
              </p>
              <p>
                <strong className="text-red-500">Note:</strong> {item.contains}
              </p>
              <p className="text-lg text-slate-600">
                {item.cuisine}
              </p>
              <p className="text-lg text-slate-600">
                {item.type}
              </p>
              <p className="text-lg text-slate-600">
                {item.time}
              </p>
              <p>
                <strong className="text-xl">{item.price}</strong>
              </p>
              <div className="flex mt-2 justify-center items-center">
                <button className="bg-[#208856] text-lg mx-4 p-2 text-white hover:bg-[#27a567] h-full rounded-2xl">
                  Order Now
                </button>
                <button className="bg-white text-lg mx-4 p-2 text-black hover:bg-slate-100 h-full rounded-2xl">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
