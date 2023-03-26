import React from "react";

export default function Features() {
  return (
    <div className="lg:w-4/5 mx-auto py-24">
      <div className="mb-24 lg:flex lg:w-3/4 lg:mx-auto lg:my-auto lg:py-24">
        <div className="my-auto lg:w-4/5">
          <div>
            <p className="ml-0 mr-auto p-3 dark:text-gray-200 text-center text-2xl sm:text-3xl lg:text-3xl lg:text-left lg:w-3/4">
              Generate leads by searching keywords
            </p>
          </div>
          <div className="ml-0 mr-auto">
            <p className="mx-auto p-3 w-1/2 dark:text-gray-400 text-md sm:text-xl lg:ml-0 lg:mr-auto lg:text-xl text-center lg:text-left lg:w-3/4">
              Keywords to leads in just a few clicks. Our powerful algorithm
              tracks and bring leads that our active, engaging and relevant to
              you.
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-2/3 lg:w-100 mx-auto mt-3 lg:my-auto shadow-2xl shadow-prom">
          <img src="/f1.png" alt="feature 1" />
        </div>
      </div>
      <div className="mb-24 lg:flex lg:w-3/4 lg:mx-auto lg:my-auto lg:py-24">
        <div className="my-auto lg:order-2 lg:w-4/5">
          <div>
            <p className="ml-auto mr-0 p-3 dark:text-gray-200 text-center text-2xl sm:text-3xl lg:text-3xl lg:text-right lg:w-3/4">
              Send AI crafted messages to leads
            </p>
          </div>
          <div className="mr-0 ml-auto">
            <p className="mx-auto p-3 w-1/2 dark:text-gray-400 text-md sm:text-xl lg:ml-auto lg:mr-0 lg:text-xl text-center lg:text-right lg:w-3/4">
              Your process of outreaching and connecting with leads goes to
              autopilot with our AI generated and managed conversations.{" "}
            </p>
          </div>
        </div>
        <div className="w-4/6 sm:w-2/3 lg:w-100 mx-auto mt-3 lg:my-auto shadow-2xl shadow-prom lg:order-1">
          <img src="/f1.png" alt="feature 1" />
        </div>
      </div>
      <div className="mb-24 lg:flex lg:w-3/4 lg:mx-auto lg:my-auto lg:py-24">
        <div className="my-auto lg:w-4/5">
          <div>
            <p className="ml-0 mr-auto p-3 dark:text-gray-200 text-center text-2xl sm:text-3xl lg:text-3xl lg:text-left lg:w-3/4">
              Chats with your leads centralized in one place
            </p>
          </div>
          <div className="ml-0 mr-auto">
            <p className="mx-auto p-3 w-1/2 dark:text-gray-400 text-md sm:text-xl lg:ml-0 lg:mr-auto lg:text-xl text-center lg:text-left lg:w-3/4">
              You free yourself with the boring, non-intuitive and confusing UI
              of Reddit. Our modern inbox brings all you conversations in one
              place.
            </p>
          </div>
        </div>
        <div className="w-4/6 sm:w-2/3 lg:w-100 mx-auto mt-3 lg:my-auto shadow-2xl shadow-prom ">
          <img src="/f1.png" alt="feature 1" />
        </div>
      </div>
    </div>
  );
}
