'use client'
import { PageContext } from '@app/layout'
import {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Item from '@components/Item'
import CheckoutItems from '@components/CheckoutItems'


const page = () => {
    const { cart, setCart, cartCount, setCartCount } = useContext(PageContext)

    useEffect(() => {
        // Retrieve the cart from localStorage on component mount
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
        setCart(JSON.parse(storedCart)); // Update the cart from localStorage
        }
    }, [setCart]);

    useEffect(() => {
        // Store the cart in localStorage whenever the cart changes
        if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        // Retrieve the cart from localStorage on component mount
        const cartCount = localStorage.getItem('cartCount');
        if (cartCount > 0) {
        setCartCount(JSON.parse(storedCart)); // Update the cart from localStorage
        }
    }, [cartCount]);
    
    console.log(cart);
    return (
        <div className = "checkoutPage">
            {cart.map(cartItem => (
                <CheckoutItems key = {cartItem.id} item = {cartItem}></CheckoutItems>
            ))}
        </div>
    )
}

export default page