'use client';
import { useState } from 'react';
import Link from 'next/link';

import { FaBars } from 'react-icons/fa';

import NavBar from '../Navigation/NavBar';
import MobileMenu from '../Navigation/MobileMenu';
import Portal from './Portal';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  const menuLinks = (
    <>
      <Link href='/' onClick={mobileMenuHandler} replace shallow className='hover:text-white'>
        Home
      </Link>
      <Link href='#projects' onClick={mobileMenuHandler} replace shallow className='hover:text-white'>
        Projects
      </Link>
      <Link href='#contact' onClick={mobileMenuHandler} replace shallow className='hover:text-white'>
        Contact
      </Link>
    </>
  );

  return (
    <>
      <header className='bg-gray p-6 border-cteal md:border-x-2 md:border-b-2 md:w-2/5 md:min-w-[335px] md:rounded-b-xl m-auto font-semibold'>
        <div className='flex w-full justify-between text-3xl md:hidden'>
          <span className='mx-8'>DBHaslund</span>
          <button onClick={mobileMenuHandler} className='mx-8'>
            <FaBars />
          </button>
        </div>
        <NavBar menuLinks={menuLinks} />
      </header>
      {mobileMenu && (
        <Portal>
          <MobileMenu menuLinks={menuLinks} menuButton={mobileMenuHandler} />
        </Portal>
      )}
    </>
  );
};

export default Header;
