import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h1 className="logo">restaurant</h1>
      </div>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      {/* nav links later */}
    </nav>
  );
};

export default Navbar;
