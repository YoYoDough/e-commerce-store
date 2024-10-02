"use client";  // This must be the first line in the file

import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Info from '@components/Info';
import { useState, createContext  } from 'react'

export const PageContext = createContext(null);



export const RootLayout = ({ children }) => {
  // Define cartCount state for managing the cart count
  const [cartCount, setCartCount] = useState(0); // Manage cartCount state here\
  const [clothingItems, setClothingItems] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
              <div className="gradient" />
          </div>

          <main className="app">
            {/* Pass cartCount to Nav component */}
            <Nav cartCount = {cartCount} cartItems = {cart}/>
            <PageContext.Provider value={{ cartCount, setCartCount, setCart, setClothingItems, clothingItems}}>
              {children}
            </PageContext.Provider>
            <Info />
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;