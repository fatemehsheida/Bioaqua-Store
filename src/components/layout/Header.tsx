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
import { HiOutlineShoppingBag } from "react-icons/hi2";

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

          <div className='right-8 bottom-4 absolute bg-Silk dark:bg-Noir rounded-full'>
            <ButtonMode />
          </div>
        </Menu>
      ) : (<div></div>)}
      <div className=" md:w-[80%] md:h-24 items-center flex flex-row w-[90%] px-1
     md:py-3  pt-2 pb-1.5 mx-16 md:justify-between justify-around pl-24 relative">

        <div className="flex opacity-80 items-center justify-between gap-2  py-2">

          <button className="mx-1">
            <IoMdSearch className="size-6 hover:scale-125" />
          </button>
          <button className="mx-1">
            <Link href="/profile">
              <FaRegUser className="size-5 hover:scale-125" />
            </Link>
          </button>
          <button className="relative mx-1 hover:scale-125" onClick={() => setIsCartOpen(true)}>
            <HiOutlineShoppingBag  className='size-7'/>
            {totalQty > 0 && (
              <span className="absolute top-4 px-0  left-4 flex items-center justify-center w-5 h-5 text-xs
              font-noraml text-Marina bg-black rounded-full dark:bg-slate-300 dark:text-gray-950">
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
              <div className='2xl:-right-32 lg:-right-28 top-6 absolute'>
                <ButtonMode />
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