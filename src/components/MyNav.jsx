import React, { useState } from 'react'
import { Discord, Instagram, Twitter } from './Icon'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const MyNav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  if (showNavbar) {
    document.body.classList.remove('overflow-hidden');
  } else {
    document.body.classList.add('overflow-hidden')
  }
  return (
    <header>
      <div className='my_container'>
        <nav className='d-flex align-items-center justify-content-between py-4'>
          <ul className='d-flex gap-3 ps-0 mb-0'>
            <li><a className='d-inline-block' href="https://www.instagram.com/" target='_blank'><Instagram /></a></li>
            <li><a className='d-inline-block' href="https://discord.com/" target='_blank'><Discord /></a></li>
            <li><a className='d-inline-block' href="https://twitter.com/" target='_blank'><Twitter /></a></li>
          </ul>
          <ul className={`${ showNavbar ? 'd-flex align-items-center mb-0 nav_sm p-0 ' : ' d-flex align-items-center mb-0 nav_sm nav_show p-0'} `}>
            <li><Link onClick={() => setShowNavbar(true)} className="ff_Fontspring_regular nav_hover position-relative color_black font_sm d-inline-block" >HOME</Link></li>
            <li><Link onClick={() => setShowNavbar(true)} className="ff_Fontspring_regular nav_hover position-relative color_black font_sm ms_lg_30 mt-4 mt-lg-0 d-inline-block" >OUR STORY</Link></li>
            <li><Link onClick={() => setShowNavbar(true)} className="ff_Fontspring_regular nav_hover position-relative color_black font_sm ms_lg_30 mt-4 mt-lg-0 d-inline-block" >ROADMAP</Link></li>
            <li><Link onClick={() => setShowNavbar(true)} className="ff_Fontspring_regular nav_hover position-relative color_black font_sm ms_lg_30 mt-4 mt-lg-0 d-inline-block" >TRAITS</Link></li>
            <li><Link onClick={() => setShowNavbar(true)} className="ff_Fontspring_regular nav_hover position-relative color_black font_sm ms_lg_30 mt-4 mt-lg-0 d-inline-block" >TEAM</Link></li>
            <li><Link onClick={() => setShowNavbar(true)} className="ff_Fontspring_regular nav_hover position-relative font_sm ms_lg_30 mt-4 mt-lg-0 d-inline-block GENESIS" >GENESIS</Link></li>
            <li><Link onClick={() => setShowNavbar(true)} className="ff_Fontspring_regular nav_hover position-relative color_black font_sm ms_lg_30 mt-4 mt-lg-0 d-inline-block" >FAQS</Link></li>
            <span title="close" className="ms-4 close_nav text-white fw-bold d-lg-none" onClick={() => setShowNavbar(true)}><RxCross2 fontSize={40} color='black' /></span>
          </ul>
          <span title="open"
            className="d-inline d-lg-none fw-bold text-white"
            onClick={() => setShowNavbar(false)}>
            <RxHamburgerMenu fontSize={40} color='#2E5492'/></span>
        </nav>
      </div >
    </header >
  )
}

export default MyNav
