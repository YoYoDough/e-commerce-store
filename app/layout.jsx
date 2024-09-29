"use client";  // This must be the first line in the file

import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Info from '@components/Info';

import { useState } from 'react';  // Import useState hook after "use client"



export const RootLayout = ({ children }) => {
  // Define cartCount state for managing the cart count
  const [cartCount, setCartCount] = useState(0); // Manage cartCount state here

  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
              <div className="gradient" />
          </div>

          <main className="app">
            {/* Pass cartCount to Nav component */}
            <Nav cartCount = {cartCount}/>
            {children}
            <Info />
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;