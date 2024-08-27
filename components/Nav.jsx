"use client";

import Link from 'next/link';
import Image from 'next/image';
import styled from "styled-components";
import CategoryList from '@components/CategoryList';
import { useState } from 'react';

const Logo = styled(Link)`
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const skeleton = "text-lg block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300 text-black dark:text-neutral-300";

const Nav = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
      <div>
        <Link href="/"
        className={skeleton}
        >
          Shirts
        </Link>
        <Link href="/about"
        className={skeleton}>
          Shoes
        </Link>
      </div>
      

        {/* Home Logo */}
        <Link href = "/" className = "flex gap-2 flex-center">
          <Image 
                  src = "/logo.png"
                  alt = "Straight Logo"
                  width = {60}
                  height = {60}
          />
        </Link>
        
        

        {/* Cart Image */}
        <Link href="/cart" className="flex-shrink-0">
          <Image src="/shoppingCart.png" alt="Cart" width={40} height={40} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;