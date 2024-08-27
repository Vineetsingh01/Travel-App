import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  //function to toggle navBar//
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //function to close navBar//
  const removeNavbar = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            {/* <div className="navItem">

                        <li className='navLink'><Link to='./' >Home</Link></li>
                        </div>
                        <div className="navItem">
                        
                        <li className='navLink'><Link to='./Main' >Packages</Link></li>
                        <li className='navLink'><Link to='./Footer' >Contact</Link></li>

                        </div> */}
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>

            {/* <li className='navLink1'><Link to='./Footer' >About</Link></li> */}

            <li className="navItem">
              <Link to="/Main" className="navLink">
                Packages
              </Link>
            </li>

            {/* <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li> */}

            {/* <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li> */}

            {/* <li className="navItem">
                            <a href="Main" className="navLink">Pages</a>
                        </li> */}

            {/* <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li> */}

            <li className="navItem">
            <Link to="/Contact" className="navLink">
                Contact
              </Link>
            </li>

            <button className="btn">
              <a>Book Now</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
