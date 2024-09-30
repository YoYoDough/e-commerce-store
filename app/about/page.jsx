
const page = () => {
  return (
    <div className = "w-full">
      <div className = "footerContainer">
        <h1 className = "footerHeader">About</h1>
        <div className = "footerContent">
          <p>This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. </p>
          <p>Support for real-world commerce features including: </p>
          <ul>
            <li>Out of stocks</li>
            <li>Order history</li>
            <li>Order status</li>
            <li>Cross variant / option availability (aka. Amazon style)</li>
            <li><a href="https://demo.vercel.store/product/acme-webcam-cover" title="Example of a hidden product in Next.js Commerce">Hidden products</a></li>
            <li>Dynamically driven content and features via Shopify (ie. collections, menus, pages, etc.)</li>
            <li>Seamless and secure checkout via <a href="https://www.shopify.com/checkout" title="Shopify Checkout">Shopify Checkout</a>
            </li>
            <li>And more!</li>
          </ul>
          <p className = "mt-10">This template also allows us to highlight newer Next.js features including:&nbsp;</p>
          <ul>
            <li>Next.js App Router</li>
            <li>Optimized for SEO using Next.js's Metadata</li>
            <li>React Server Components (RSCs) and Suspense</li>
            <li>Server Actions&nbsp;for mutations</li>
            <li>Edge runtime</li>
            <li>New Next.js 13 fetching and caching paradigms</li>
            <li>Dynamic OG images</li>
            <li>Styling with Tailwind CSS</li>
            <li>Automatic light/dark mode based on system settings</li>
            <li>And more!</li>
          </ul>
          <p class="text-sm italic mt-10">This document was last updated on July 29, 2024.</p>
        </div>
      </div>
    </div>
  )
}

export default page