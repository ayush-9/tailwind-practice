'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/next.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export type NavItem = { link: string; name: string };

type NavbarProps = {
  navItems: Array<NavItem>;
};
const Navbar = ({ navItems }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav className='fixed z-[100] h-20 w-full bg-gray-50 shadow-xl'>
      <div className='flex h-full w-full items-center justify-between p-2 sm:justify-center'>
        <Link href='/'>
          <Image src={logo} alt='logo' width='80' height='80' priority />
        </Link>
        <AiOutlineMenu
          onClick={handleMenu}
          className='mr-2 cursor-pointer text-3xl sm:hidden'
        />
      </div>
      {/* Mobile version listed Items */}
      <div
        className={
          menuOpen
            ? 'relative left-0 top-0 z-50 flex h-screen w-[65%] flex-col justify-start bg-gray-50 duration-500 ease-in'
            : 'hidden'
        }
      >
        <div className='absolute right-6 top-4 flex'>
          <AiOutlineClose
            onClick={handleMenu}
            className='cursor-pointer text-2xl text-black'
          />
        </div>
        <ul className='mt-20 flex flex-col items-center justify-center'>
          {navItems.map((obj) => (
            <li key={obj.name} className='mb-4 text-2xl text-black'>
              <Link href={obj.link}>{obj.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
