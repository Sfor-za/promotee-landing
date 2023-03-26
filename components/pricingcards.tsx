import React from "react";

export default function Pricing() {
  return (
    <div className="pt-[88px] pb-[60px]">
      <p className="text-gray-700 dark:text-gray-200 text-6xl mx-auto text-center p-12 m-12">
        Pricing
      </p>
      <div className="flex justify-evenly">
        <div className="w-1/4 dark:bg-gray-800 dark:text-gray-100 rounded-900">
          <p className="text-center text-4xl pt-16"> <b> Free</b></p>
          <p className="text-center text-4xl my-8 p-8 bg-prom">0$</p>
          <p className="text-center text-2xl ">5 <br /> campaigns/month</p>
          <p className="text-center text-2xl pt-6 pb-10">100<br /> leads/month</p>
        </div>
        <div className="w-1/4 dark:bg-gray-800 dark:text-gray-100 rounded-900">
          <p className="text-center text-4xl pt-16 "> <b>Basic</b></p>
          <p className="text-center text-4xl p-8 my-8 bg-prom">15$</p>
          <p className="text-center text-2xl">5<br /> campaigns/month</p>
          <p className="text-center text-2xl p-6">20<br /> DMs/day</p>
          <p className="text-center text-2xl pt-6 pb-16">3000<br /> leads/month</p>
        </div>
        <div className="w-1/4 dark:bg-gray-800 dark:text-gray-100 rounded-900">
          <p className="text-center text-4xl pt-16"> <b> Premium</b></p>
          <p className="text-center text-4xl p-8 my-8 bg-prom">35$</p>
          <p className="text-center text-2xl">Unlimited <br />campaigns/month</p>
          <p className="text-center text-2xl p-6">Unlimited <br />DMs/day</p>
          <p className="text-center text-2xl pt-6 pb-16">Unlimited <br />leads/month</p>
        </div>     
      </div>
    </div>
  );
}
