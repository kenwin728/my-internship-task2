import React from "react";

function Header() {
  return (
    <div className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-2xl">InnoVantage Tech</h1>
      <div className="flex justify-end">
        <div className="flex justify-around">
          <button className="w-full mx-2 ring-white text-white bg-slate-500 hover:bg-slate-600 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-1 py-1 text-center">
            Home
          </button>
          <button className="w-full mx-2 ring-white text-white bg-slate-500 hover:bg-slate-600 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-1 py-1 text-center">
            Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
