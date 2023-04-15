import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/tech.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5 id='home'> Hello I'm</h5>
        <h1>Olamide Olufade</h1>
        <h5 className='text-light'> Web Developer / IT Consultant / Business Manager</h5>
        <CTA />
        
        <HeaderSocials />
        
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header