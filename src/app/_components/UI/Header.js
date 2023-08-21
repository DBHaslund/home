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
      <Link href='/' scroll={false} replace>Home</Link>
      <Link href='#projects' scroll={false} replace>Projects</Link>
      <Link href='#contact' scroll={false} replace>Contact</Link>
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
      {mobileMenu && portalElement
        ? createPortal(
            <MobileMenu menuLinks={menuLinks} menuButton={mobileMenuHandler} />,
            portalElement
          )
        : null}
    </>
  );
};

export default Header;
