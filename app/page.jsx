"use client"
import Link from 'next/link';
import Image from 'next/image';
import CategoryList from '@components/CategoryList';
import Items from '@components/Items';
import Hero from '@components/Hero'
import { useState } from 'react';


const Home = ({ cartCount, setCartCount }) => {
  // State to track cart count
  return (
    <section className='homeSection'>
      <Hero/>
      <Items cartCount = {cartCount} setCartCount = {setCartCount}/>
      {/* You can pass cartCount and setCartCount to Items or any other component if needed */}
    </section>
  );
};

export default Home;