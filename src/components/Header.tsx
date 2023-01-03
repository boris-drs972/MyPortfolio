import React from 'react';
import Navbar from './Navbar';

function Header() {
  return(
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1>test from test to test my test</h1>
        <div className='header-btns'>
          <a href="#" className='cv-btn'>Hire ME</a>
        </div>
      </div>
    </div>
  )
}

export default Header;