import React from "react";
import { Link } from "react-scroll";
import "../App.css";

function Nav() {
  return (
    <div className="fixed top-0 w-[100%] px-16 flex bg-[#0f053560] backdrop-blur blur-bg  z-40">
      <ul className=" flex gap-16 text-white p-4 m-auto text-lg">
        <li className=" cursor-pointer">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>About</li>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Team</li>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
