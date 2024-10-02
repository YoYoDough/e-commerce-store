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



const Nav = (props) => {
  const cartCount = props.cartCount;
  
  return (
    <nav className="navBar">
        <div className = "categories">
          <Link href="/shirts"
          className={skeleton}
          >
            Shirts
          </Link>
          <Link href="/shoes"
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
        <Link href="/cart" className="cart">
          <Image src="/shoppingCart.png" alt="Cart" width={40} height={40} />
          {cartCount > 0 && <div className = "cartCounter">{cartCount}</div>}
          
        </Link>
    </nav>
  );
};

export default Nav;