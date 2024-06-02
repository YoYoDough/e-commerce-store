import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Info from '@components/Info';

export const metadata = {
    title: "Straight",
    description: "Get the cleanest, biggest, and most aesthetic clothes on the market here!"
}

export const RootLayout = ({ children }) => {
  return (
    <html lang = "en">
      <body>
        <Provider>
          <div className = "main">
              <div className = "gradient" />
          </div>

          <main className = "app">
            <Nav />
            {children}
            <Info />
          </main>
        </Provider>
      </body> 
    </html>
  )
}

export default RootLayout