import React from "react";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-white group hover:shadow-xl">
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="Pizza"
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>
      <h4 className="font-bold my-3 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm font-semibold mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolor,
      </p>
      <button className="bg-primary text-white rounded-full px-4 py-2 hover:text-pretty font-bold group-hover:shadow-lg group-hover:bg-slate-400 transition duration-300 ease-in-out">
        Add to cart $12
      </button>
    </div>
  );
}
