'use client'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { NavigationMenuDemo } from "@/components/layout/HeaderHome";
import { slide as Menu } from 'react-burger-menu'
import { HambergerMenu } from './HambergerMenu';
import Link from 'next/link';
import Cart from '@/components/cart/HambergerCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import ButtonMode from '../darkmode/ButtonMode';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { totalQty } = useSelector((state: RootState) => state.cart);
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const [open, setOpen] = useState(false)





  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);





  return (
    <>
      {isMobile ? (
        <Menu className=' w-ful relative'>
          <div className='text-gray-800 '>
            <HambergerMenu />
          </div>

          <div className='right-8 bottom-4 absolute bg-[#e5e7eb] dark:bg-[#374151] rounded-full '>
              <ButtonMode/>
              </div>
        </Menu>
      ) : (<div></div>)}

      <div className=" md:w-[80%] md:h-24 items-center flex flex-row w-[90%] px-1
     md:py-3  pt-2 pb-1.5 mx-16 md:justify-between justify-around pl-24 relative">

        <div className="flex opacity-80 items-center justify-between  py-2">
          <button className="mx-2">
            <IoMdSearch className="size-6 hover:scale-125" />
          </button>
          <button className="mx-2">
            <Link href="/profile">
              <FaRegUser className="size-5 hover:scale-125" />
            </Link>
          </button>
          <button className="relative mt-1" onClick={() => setIsCartOpen(true)}>
            <svg className="stroke-6 size-10 hover:scale-110" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
              <path fill="currentColor" fillRule="evenodd"
                d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path>
            </svg>

            {totalQty > 0 && (
              <span className="absolute top-6 px-0  left-6 flex items-center justify-center w-5 h-5 text-xs
              font-noraml text-[#79B3AA] bg-black rounded-full dark:bg-slate-300 dark:text-gray-950">
                {totalQty}
              </span>
            )}
          </button>
        </div>
        <div className='flex gap-10'>

          {!isMobile ? (
            <div className='w-full '>
              <div className="flex items-center gap-10 z-50">
                <div className="text-sm z-50" >
                  <NavigationMenuDemo />
                </div>
              </div>
              <div className='2xl:-right-32 lg:-right-28 top-4 absolute'>
              <ButtonMode/>
              </div>
            </div>
          ) : (<div></div>)}
          <Link href="/">
            <img src="http://localhost:8000/uploads/image-1738349698115-546474799.avif" alt="Bioaqoua" className="md:w-40 w-32  top-2 md:left-40" />
          </Link>
        </div>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </>
  );
};

export default Header