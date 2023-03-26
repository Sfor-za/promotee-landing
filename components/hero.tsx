import React from "react";

export default function Hero() {
  return (
    <div className="pt-[88px]  md:pt-[150px] w-4/5 text-center m-auto">
        <div className=" mb-[44px]  block">
        <p className="text-3xl sm:text-5xl lg:text-6xl  text-black dark:text-gray-200"> Send AI automated DMs on Reddit.</p>
        </div>
        <div className="text-center flex justify-center m-auto mb-[44px]  ">
          <p className="text-lg sm:text-2xl lg:text-3xl dark:text-gray-400 w-100">A Reddit Marketing tool that finds, connects and manages<br/> new leads for You.</p>
        </div>
        <div className="w-100 sm:w-3/4 md:w-1/2 flex justify-center m-auto shadow-2xl shadow-prom/70">
            <img src="/product-image.png" alt="promotee main" />
        </div>
        <div>
         <a href=""> <button type="button" className="mt-[60px] sm:mt-[50px] md:mt-[80px] text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-1.5 py-2 sm:px-2 sm:py-2.5 text-center mr-3 md:mr-0 dark:bg-indigo-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Increase Leads</button></a>
        </div>
    </div>
  );
}
