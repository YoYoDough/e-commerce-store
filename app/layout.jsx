"use client";  // This must be the first line in the file

import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Info from '@components/Info';
import { loadEnvConfig } from '@next/env'

 
defineConfig({
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
})


export const RootLayout = ({ children }) => {
  // Define cartCount state for managing the cart count
  const [cartCount, setCartCount] = useState(0); // Manage cartCount state here
  console.log(process.env.DB_HOST)
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