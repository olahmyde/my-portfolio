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
      <a className={usedbtn === 'nav--inactive' ?  'nav-active' : 'nav--inactive'} href='#home'> <AiOutlineHome/></a>
      <a className={setUsedbtn} href='#about'> <AiOutlineUser/></a>
      <a className={setUsedbtn} href='#experience'> <ImBooks/></a>
      <a className={setUsedbtn} href='#services'> <MdMiscellaneousServices/></a>
      <a className={setUsedbtn} href='#contact'> <MdOutlineContacts/></a>
    </nav>
  )
}

export default Nav