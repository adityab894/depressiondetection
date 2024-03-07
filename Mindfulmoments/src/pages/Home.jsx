import React from "react";
import Nav from "../components/Nav";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/">
        <h2 className=" fixed  z-50 p-3 text-white  font-bold text-2xl">
          LOGO
        </h2>
      </Link>

      <Nav />
      <div
        id="home"
        className=" bg-[rgb(18,24,67)] w-[100%] h-screen flex justify-center items-center"
      >
        {/* <div className="gr1 w-[200px] h-[200px] rounded-full bg-[#381b7c] blur-[50px] absolute  "></div> */}

        <div className=" w-[200px] h-[200px] bg-[#5235d790] blur-[80px] absolute left-[80%] top-[40%] an1"></div>
        <div className=" w-[200px] h-[200px] bg-[#b013f394] blur-[80px] absolute left-[70%] top-[40%] an2"></div>
        <div className=" w-[40%] aspect-square max-w-[800px] absolute top-0 left-0 transform translate-x-[-20%] translate-y-[-50%] rounded-full bg-gradient-to-r from-[#6d24ea45] to-[#32065e00]"></div>
        <section className=" w-[100%] p-[16%] h-[50vh] flex items-center gap-10">
          <div className=" flex flex-col gap-20">
            <div className=" flex flex-col gap-4">
              <h1 className=" hero-text text-8xl font-bold">Mindful Moments</h1>
              <p className=" text-zinc-200 text-xl">
                Nurturing Mental Well-being and Depression Detection
              </p>
              <p className=" text-blue-500 text-xl">
                Unveiling Emotional Patterns for Personal Growth and Depression
                Detection
              </p>
            </div>

            <Link to="/input">
            <button className=" max-w-[200px] bg-gradient-to-r from-[#5b10f0] to-[#a200ff]  p-3 rounded-3xl text-lg font-semibold text-white">
              Available Now
            </button>
            </Link>
          </div>
          <div className=" w-[60%] rounded-3xl h-[00px] flex justify-center items-center">
            <img className=" w-[100%] z-30" src="assets\Group19.png" alt="" />
          </div>
        </section>
      </div>
      <div className="bg-[rgb(18,24,67)] px-[16%] flex flex-col gap-24">
        <section className=" flex">
          <div className=" flex-1">
            <h2 className=" text-6xl text-white py-14 font-semibold">
              How It Works
            </h2>
            <p className=" text-white text-xl w-[60%]">
              Our platform utilizes advanced artificial intelligence algorithms
              to analyze patterns in user interactions, providing valuable
              insights into emotional well-being. By considering various
              factors, including language, sentiment, and behavioral cues, our
              system aims to detect potential signs of depression early on.
            </p>
          </div>
          <div className=" w-[50%]">
            <img className="" src="assets\work.png" alt="" />
          </div>
        </section>
        <section className=" flex flex-row-reverse justify-end">
          <div className=" flex-1 text-right">
            <h2 className=" text-6xl text-white py-14 font-semibold">
              Our Vision
            </h2>
            <p className=" text-white text-xl">
              At Depression Detection Using AI, we envision a world where mental
              health is prioritized, and individuals have access to timely
              support. We believe in the power of technology to complement
              traditional mental health practices, creating a seamless and
              efficient approach to depression detection.
            </p>
          </div>
          <div className=" w-[50%]">
            <img className="" src="assets\vision.png" alt="" />
          </div>
        </section>
        <section className=" text-center" id="about">
          <h2 className=" text-6xl text-white py-14 font-semibold">About Us</h2>
          <p className=" text-white text-xl ">
            Welcome to our Depression Detection Using AI platform, where
            cutting-edge technology meets compassionate mental health support.
            In today's fast-paced world, the impact of mental health is more
            significant than ever, and our mission is to provide an innovative
            solution leveraging artificial intelligence to aid in the early
            detection and management of depression.
          </p>
        </section>
        <section id="team" className=" pb-20 ">
          <h2 className=" text-white text-5xl font-semibold text-center m-10">
            Meet our team
          </h2>
          <div className=" w-[100%] py-10 flex justify-between">
            <div className=" flex flex-col p-2 rounded-2xl gap-1 w-[24%] aspect-square bg-[#ffffff] ">
              <div className=" bg-zinc-600 rounded-2xl w-[100%] aspect-square">
                <img
                  src="assets\1.png"
                  alt=""
                  className="w-[100%] aspect-square  object-cover rounded-2xl"
                />
              </div>
              <span className=" text-center font-bold">Priyanka Thorat</span>
              <span className=" text-center">
                Electronics & Telecommunication
              </span>
            </div>
            <div className=" flex flex-col p-2 rounded-2xl gap-1 w-[24%] aspect-square bg-[#ffffff] ">
              <div className=" bg-zinc-600 rounded-2xl w-[100%] aspect-square">
                <img
                  src="assets\2.png"
                  alt=""
                  className="w-[100%] aspect-square  object-cover rounded-2xl"
                />
              </div>
              <span className=" text-center font-bold">Naina Rambad</span>
              <span className=" text-center">
                Electronics & Telecommunication
              </span>
            </div>
            <div className=" flex flex-col p-2 rounded-2xl gap-1 w-[24%] aspect-square bg-[#ffffff] ">
              <div className=" bg-zinc-600 rounded-2xl w-[100%] aspect-square">
                <img
                  src="assets\3.png"
                  alt=""
                  className=" w-[100%] aspect-square object-cover rounded-2xl"
                />
              </div>
              <span className=" text-center font-bold">Shreya Lagad</span>
              <span className=" text-center">
                Electronics & Telecommunication
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
