'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

import { FaBars } from 'react-icons/fa';

import NavBar from '../Navigation/NavBar';
import MobileMenu from '../Navigation/MobileMenu';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  const portalElement = document.getElementById('portal');
  

  const menuLinks = (
    <>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/projects'>Projects</Link>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>
    </>
  );

  return (
    <>
      <header>
        <div className='flex w-full justify-between text-3xl bg-transparent pb-8 md:pb-0 mt-8 md:justify-center md:text-2xl'>
          <span className='mx-8'>DBHaslund</span>
          <button
            onClick={mobileMenuHandler}
            className='md:invisible md:mx-0 mx-8'
          >
            <FaBars />
          </button>
        </div>
        <NavBar menuLinks={menuLinks} />
      </header>
      {mobileMenu && portalElement ? createPortal(
        <MobileMenu menuLinks={menuLinks} menuButton={mobileMenuHandler} />, portalElement
      ) : null}
    </>
  );
};

export default Header;
