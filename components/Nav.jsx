"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Home Image */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/homeImage.png" alt="Home" width={40} height={40} />
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