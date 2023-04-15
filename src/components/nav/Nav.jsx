import React from 'react';
import { useState } from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'; 
import {AiOutlineUser} from 'react-icons/ai';
import {ImBooks} from 'react-icons/im'; 
import {MdMiscellaneousServices} from 'react-icons/md'; 
import {MdOutlineContacts} from 'react-icons/md';

const Nav = () => {
  const [usedbtn, setUsedbtn] = useState('nav--inactive');
  return (
    <nav>
      <a onClick={()=> setUsedbtn('#home')} href='#home' className={usedbtn === '#home' ?  'nav--active' : 'nav--inactive'}> <AiOutlineHome/></a>
      <a onClick={()=> setUsedbtn('#about')} href='#about' className={usedbtn === '#about' ?  'nav--active' : 'nav--inactive'}> <AiOutlineUser/></a>
      <a onClick={()=> setUsedbtn('#experience')} href='#experience' className={usedbtn === '#experience' ?  'nav--active' : 'nav--inactive'}> <ImBooks/></a>
      <a onClick={()=> setUsedbtn('#services')} href='#services' className={usedbtn === '#services' ?  'nav--active' : 'nav--inactive'}> <MdMiscellaneousServices/></a>
      <a onClick={()=> setUsedbtn('#contact')} href='#contact' className={usedbtn === '#contact' ?  'nav--active' : 'nav--inactive'}> <MdOutlineContacts/></a>
    </nav>
  )
}

export default Nav