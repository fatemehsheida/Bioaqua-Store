'use client'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { NavigationMenuDemo } from "@/components/layout/HeaderHome";
import { slide as Menu } from 'react-burger-menu'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HambergerMenu } from './HambergerMenu';
import Link from 'next/link';
import Cart from '@/components/cart/HambergerCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { totalQty } = useSelector((state: RootState) => state.cart);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [open, setOpen] = useState(false)
  return (
    <>
      {isMobile ? (
        <Menu className=' w-ful'>
          <div className='text-gray-800 '>
            <HambergerMenu />
          </div>

        </Menu>
      ) : (<div></div>)}
      <div className=" md:w-[80%] md:h-24 items-center flex flex-row w-[90%] px-1
      justify-between md:py-3 md:pl-60 pt-2 pb-1.5 mx-16">

        <div className="flex flex-row opacity-80 items-center justify-start py-2">
          <button className="mx-2">
            <IoMdSearch className="size-6 hover:scale-125" />
          </button>
          <button className="mx-2">
            <Link href="/login">
              <FaRegUser className="size-5 hover:scale-125" />
            </Link>
          </button>
          <button className="mx-3" onClick={() => setIsCartOpen(true)} >
            <AiOutlineShoppingCart className="size-6 hover:scale-125" />

          </button>
              

      
        {!isMobile ? (
          <>
            <div className="flex items-center gap-10 z-10">
              <div className="text-sm z-10">
                <NavigationMenuDemo />
              </div>
            </div>
          </>
        ) : (<div></div>)}

      </div>
      <img src="http://localhost:8000/uploads/image-1738349698115-546474799.avif" alt="Bioaqoua" className="md:w-40 w-32 absolute top-2 md:left-40" />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} /> </div>
    </>
  );
};

export default Header