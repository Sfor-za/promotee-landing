import React from "react";

export default function Footer() {
  return (
    <div className="bg-prom dark:bg-gray-900 pt-24">
      <div className="text-gray-200 dark:text-gray-400 flex justify-center">
        <div className="w-1/6 lg:order-1">
          <p className="text-left dark:text-gray-300 text-white flex">
            <img src="/logo.png" className="h-6 mr-3 sm:h-9" alt="" />
            <span className="my-auto"><strong>  Promotee</strong></span>
          </p>
          <p className="pt-8">
            A Reddit marketing tool that helps you generate quality leads and
            optimize your Reddit marketing efforts.
          </p>
        </div>
        <div className="w-1/6 lg:order-3">
          <p className="text-right dark:text-gray-300 text-white">
            <strong> Company</strong>
          </p>
          <ul className="pt-8 text-right">
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                Releases
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                About Us
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                Our Mission
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/6 text-right lg:order-2">
          <p className="dark:text-gray-300 text-white">
            <strong> Resources</strong>
          </p>
          <ul className="pt-8 text-right">
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                {" "}
                Blogs
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                {" "}
                Why Reddit?
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                {" "}
                Public Roadmap
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                {" "}
                Reddit Marketing
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                {" "}
                Request A Feature
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                {" "}
                Join Our Community
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/6 lg:order-4">
          <p className=" text-right  dark:text-gray-300 text-white">
            <strong>Support</strong>
          </p>
          <ul className="pt-8 text-right">
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                Email
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                Chat with Us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/6 lg:order-5">
          <p className="text-right  dark:text-gray-300 text-white">
            <strong> Comparisons</strong>
          </p>
          <ul className="pt-8 text-right">
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                Promotee vs. Howitzer
              </a>
            </li>
            <li className="p-1">
              <a href="" className=" hover:text-white hover:dark:text-white">
                Promotee vs. Apollo.io{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-5/6 mt-6 bg-blue-800 dark:bg-gray-400 mx-auto" />
      <div className="w-3/5 b text-white text-center mt-12 pb-12 flex justify-around mx-auto">
        <p className="flex justify-start dark:text-gray-300 p-2">
          <strong>
            {" "}
            © 2023 all rights reserved{" "}
            <a href="https://www.promotee.co/">Promotee.co</a>
          </strong>
        </p>
        <ul className="text-center w-100 dark:text-gray-400 flex justify-around">
          <li className="p-2">
            <a href="">
              <img src="" alt="" />
              Instagram
            </a>
          </li>
          <li className="p-2">
            <a href="">
              <img src="" alt="" />
              Facebook
            </a>
          </li>
          <li className="p-2">
            <a href="">
              <img src="" alt="" />
              Youtube
            </a>
          </li>
          <li className="p-2">
            <a href="">
              <img src="" alt="" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
