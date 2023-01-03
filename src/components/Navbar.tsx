import React, {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
import "../styles/main.css"


function Navbar() {

  const navRef = useRef<HTMLInputElement | null>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  }

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}> 
        <a href="/#"><Link to='main' className='active'>HOME</Link></a>
        <a href="/#"><Link to='main' className='active'>ABOUT</Link></a>
        <a href="/#"><Link to='main' className='active'>WORK</Link></a>
        <a href="/#"><Link to='main' className='active'>CONTACT</Link></a>
        <a href="/#"><Link to='main' className='active'>BLOG</Link></a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
  </header>
  );
}

export default Navbar;