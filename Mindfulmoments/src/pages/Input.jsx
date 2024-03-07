import React, { useState}  from "react";
import Nav from "../components/Nav";
import "../App.css";
import { Link } from "react-router-dom";

function Input() {
  const [username, setUsername] = useState('');

  return (
    <div className="  bg-[rgb(12,16,46)]  w-screen h-screen">
      <Link to="/">
        <h2 className="fixed  z-50 p-3 text-white  font-bold text-2xl">LOGO</h2>
      </Link>
      <div className=" absolute  top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[60%] h-[400px] flex justify-center items-center">
        <img
          className=" rounded-2xl blur-[1px] absolute -z-10 "
          src="assets\hands.gif"
          alt=""
        />
        <div className="w-[60%] h-[60px] rounded-lg flex bg-white">
          <input
            type="text"
            className="w-[100%] h-[100%] bg-transparent p-2 text-2xl outline-none"
            placeholder="Enter your thread's username" 
            value={username}
            onChange={(event) => {setUsername(event.target.value)}}
          />
          <Link to="/result">
            <button className=" h-[100%] px-2 bg-[#3b6af8] text-white border-[5px] rounded-xl" onClick={()=>localStorage.setItem('username',username)}>
              CHECK
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Input;
