import React from "react";
import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Homepage from "@/app/Homepage/page"
export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage/>
      {/* <div className="Bg relative hidden sm:block">
        <img
          src="../img/Bg-1.svg"
          alt="Background Image"
          className="bg1 w-full h-auto object-cover"
        />
        <h1 className="absolute left-10 top-20 text-white text-2xl md:text-4xl lg:text-5xl font-bold">
          Ready to elevate your call center operations to new heights?
        </h1>
        <h2 className="absolute left-10 top-40 md:top-60 text-white text-lg md:text-2xl lg:text-3xl">
          Our AI Dialer Pro is the professional solution you've been seeking.
        </h2>
        <div className="start-button absolute left-10 top-60 md:top-80">
          <button className="text bg-white text-purple-600 py-2 px-4 rounded-full">
            <a href="/pages">Get Started</a>
          </button>
        </div>
        <div className="girl-image absolute top-10 right-10 hidden md:block">
          <img
            src="../img/call-center-girl.svg"
            alt="girl"
            className="w-32 h-auto md:w-48 lg:w-[50rem]"
          />
        </div>
      </div>
      <div className="sm:hidden">
        <div className=" flex flex-col justify-center items-center">
          <div className="bg-color h-[80rem] w-full">
            <h1 className="text-white font-bold text-4xl text-center  py-20 px-5">
              Ready to elevate your call center operations to new heights?
            </h1>

            <img src="../img/call-center-girl.svg" />
            <h1 className="text-white font-bold text-2xl text-center  py-20 px-5">
              Our AI Dialer Pro is the professional solution you've been
              seeking.
            </h1>
            <div className="flex items-center justify-center">
            <button className="bg-white px-6 py-3  rounded-full">
              Get Started

            </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
