"use client";  // This must be the first line in the file

import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Info from '@components/Info';
import { useState, createContext  } from 'react'
import { usePathname } from 'next/navigation'
import CartOverlay from '@components/CartOverlay'

export const PageContext = createContext(null);



export const RootLayout = ({ children }) => {
  // Define cartCount state for managing the cart count
  const [cartCount, setCartCount] = useState(0); // Manage cartCount state here\
  const [clothingItems, setClothingItems] = useState([]);
  const [cart, setCart] = useState([]);
  const cartSize = cart.length
  console.log(cartCount);
  
  console.log(cart);
  const pathName = usePathname();
  const isCheckout = pathName === '/checkout';
  console.log(isCheckout);
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
              <div className="gradient" />
          </div>
          {!isCheckout && (
            <main className="app">
            {/* Pass cartCount to Nav component */}
            
            <PageContext.Provider value={{ cartCount, setCartCount, setCart, setClothingItems, clothingItems, cartSize}}>
              <Nav cartCount = {cartCount} cartItems = {cart}/>
              {children}
            </PageContext.Provider>
            <Info />
          </main>
          )}
        </Provider>
        <PageContext.Provider value={{ cart, setCart, cartCount, setCartCount }}>
          {isCheckout && children} {/* Render children directly for checkout */}
        </PageContext.Provider>
      </body>
    </html>
  )
}

export default RootLayout;