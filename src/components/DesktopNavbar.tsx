import React from 'react';
import { NavItem } from './Navbar';
import { SlArrowUp } from 'react-icons/sl';
import Link from 'next/link';

type DesktopNavbarProps = {
  navItems: Array<NavItem>;
};
const DesktopNavbar = ({ navItems }: DesktopNavbarProps) => {
  return (
    <div className='fixed bottom-10 z-40 mx-auto hidden w-full items-center justify-center sm:flex'>
      <div className='max-w-2xl rounded-full bg-black px-2 py-2 text-center text-white'>
        <ul className='flex items-center justify-around gap-10 text-xl'>
          <li key={'arrow-up'} className='rounded-full bg-gray-700 p-3'>
            <SlArrowUp className='mx-auto cursor-pointer text-2xl' />
          </li>
          {navItems.map((item) => (
            <li
              key={item.name}
              className='cursor-pointer duration-500 ease-in-out hover:rounded-full hover:bg-white hover:p-2 hover:text-black'
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <li
            key={'login'}
            className='rounded-full bg-gray-700 p-3 tracking-tight'
          >
            <Link href={'/login'}>Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;
