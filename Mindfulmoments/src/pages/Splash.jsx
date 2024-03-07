import React from "react";
import Lottie from "react-lottie";
import brain_animation from "../lottie/brain_animation.json";
import "../App.css";
function Splash() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: brain_animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <span className=" text-white flex justify-center items-center w-[100%] h-screen bg-zinc-900">
        <div className=" w-[300px] h-[300px] rounded-full white splashcircle overflow-hidden"></div>
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] splashanimation">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </span>
    </div>
  );
}

export default Splash;
