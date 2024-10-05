"use client";

import Link from 'next/link';
import Image from 'next/image';
import styled from "styled-components";
import CartOverlay from '@components/CartOverlay'
import { useEffect, useState, useContext } from 'react';
import { PageContext } from '@app/layout'

const Logo = styled(Link)`
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const skeleton = "text-lg block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300 text-black dark:text-neutral-300";



const Nav = (props) => {
  const cartCount = props.cartCount;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems  = props.cartItems

  function handleToggle(){
    setIsCartOpen(!isCartOpen);
  }
  
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
        <button onClick = {handleToggle} className="cart">
          <Image src="/shoppingCart.png" alt="Cart" width={40} height={40} />
          {cartCount > 0 && <div className = "cartCounter">{cartCount}</div>}
        </button>
        {isCartOpen && <CartOverlay isOpen = {isCartOpen} items = {cartItems} onClose = {handleToggle}></CartOverlay>}
    </nav>
  );
};

export default Nav;