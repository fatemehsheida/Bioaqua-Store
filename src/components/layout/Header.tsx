'use client'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { NavigationMenuDemo } from "@/components/layout/HeaderHome";
import { slide as Menu } from 'react-burger-menu'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HambergerMenu } from './HambergerMenu';
import Link from 'next/link';

const Header = () => {


  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      {isMobile ? (
        <Menu className=' w-ful'>
          <div className='text-gray-800 '>
            <HambergerMenu/>
          </div>

        </Menu>
      ) : (<div></div>)}
      <div className="vazir md:w-[80%] md:h-24 items-center flex flex-row w-[90%] px-1
      justify-between md:py-3 md:pl-60 pt-2 pb-1.5 mx-16">

        <div className="flex flex-row opacity-80 items-center justify-start py-2">
          <button className="mx-2">
            <IoMdSearch className="size-6 hover:size-7" />
          </button>
          <button className="mx-2">
            <Link  href="/login">
            <FaRegUser className="size-5 hover:size-6" />
            </Link>
          </button>
          <button className="mx-3">
            <AiOutlineShoppingCart className="size-6 hover:size-7" />
          </button>
        </div>
        {!isMobile ? (
          <>
            <div className="flex items-center gap-10">
              <div className="text-sm">
                <NavigationMenuDemo />
              </div>
            </div>
          </>
        ) : (<div></div>)}

      </div>
          <img src="bioaqoua.avif" alt="Bioaqoua" className="md:w-40 w-32 absolute top-2 md:left-40" />
    </>
  );
};

export default Header