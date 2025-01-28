'use client'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { NavigationMenuDemo } from "@/components/layout/HeaderHome";
import { slide as Menu } from 'react-burger-menu'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {

    
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
      <>
      {isMobile ? (
        <Menu className=' w-ful'>
          <div className='text-gray-800'>
          item one 
          
          </div>

        </Menu>
      ):(<div></div>)}
      <div className="vazir md:w-[80%] h-[85px] items-center flex flex-row w-[90%] px-1
      justify-between md:px-14 pt-2 pb-1.5 mx-16">

            <div className="flex flex-row opacity-80 items-center justify-start">
              <button className="mx-2">
                <IoMdSearch className="size-6 hover:size-7" />
              </button>
              <button className="mx-2">
                <FaRegUser className="size-5 hover:size-6" />
              </button>
              <button className="mx-3">
                <AiOutlineShoppingCart className="size-6 hover:size-7" />
              </button>
            </div>
            {!isMobile ?  (
          <>
            <div className="flex items-center gap-10">
              <div className="text-sm">
                <NavigationMenuDemo />
              </div>
              <img src="bioaqoua.avif" alt="Bioaqoua" className="w-40" />
            </div>
          </>
        ):(<div></div>)}
      </div>
      </>
    );
  };

export default Header