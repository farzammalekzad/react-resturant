import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);

  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> خانه </Link>
          <Link to="/menu"> منوی غذا </Link>
          <a href="http://mohammad-malekzad.ir/" target="_blank">در مورد من</a>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> خانه </Link>
        <Link to="/menu"> منوی غذا </Link>
        <a href="http://mohammad-malekzad.ir/" target="_blank">در مورد من</a>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
