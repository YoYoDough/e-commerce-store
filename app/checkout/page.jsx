'use client'
import { PageContext } from '@app/layout'
import {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Item from '@components/Item'
import CheckoutItems from '@components/CheckoutItems'
import Info from '@components/Info'

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
        // Retrieve the cartCount from localStorage on component mount
        const storedCartCount = localStorage.getItem('cartCount');
        if (storedCartCount) {
            setCartCount(JSON.parse(storedCartCount)); // Update cartCount from localStorage
        }
    }, [setCartCount]);
    
    useEffect(() => {
        // Store the cartCount in localStorage whenever cartCount changes
        localStorage.setItem('cartCount', JSON.stringify(cartCount));
    }, [cartCount]);
    
    console.log(cart);
    let fullPrice = 0;
    cart.map(cartItem => {
        fullPrice += parseFloat(cartItem.price)
    })
    console.log(fullPrice)

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        country: 'US',
        address1: '',
        address2: '',
        state: 'CA',
        zip: '',
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
      });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
    };

    console.log(formData)

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Submit the form data to your backend for further processing (e.g., save order details, process payment)
    };

    return (
        <div className = "checkoutPage">

            {cart.map(cartItem => (
                <CheckoutItems key = {cartItem.id} item = {cartItem}></CheckoutItems>
            ))}
            <div className = "checkoutInfo mt-20  p-10">
                <h1 className = "checkoutSummary text-lg font-bold">Payment Summary: ${fullPrice}</h1>
                <form className = "form">
                    <h1 className = "text-lg font-bold mb-10">Information</h1>
    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value = {formData.email} onChange={handleChange} placeholder="Enter a valid email" required />
                    <label htmlFor="firstName">First Name</label>
                    <input type="firstName" id="firstName" name="firstName" value = {formData.firstName} onChange={handleChange} placeholder="Enter your first name" required />
                    <label htmlFor="lastname">Last Name</label>
                    <input type="lastName" id="lastName" name="lastName" value = {formData.lastName} onChange={handleChange} placeholder="Enter your first name" required />


                    <h2 className = "mt-10 mb-10 text-lg font-bold">Shipping Information</h2>
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" value = {formData.country} onChange={handleChange} required>
                        <option value="US">United States</option>
                    </select>

                    <label htmlFor="address1">Address</label>
                    <input type="text" id="address1" name="address1" value = {formData.address1} onChange={handleChange} placeholder="Add a house number if you have one" required />

                    <label htmlFor="address2">Apartment, suite, etc. (optional)</label>
                    <input type="text" id="address2" name="address2" value = {formData.address2} onChange={handleChange} placeholder="Apartment, suite, etc." />

                    <label htmlFor="state">State</label>
                    <select id="state" name="state" value = {formData.state} onChange={handleChange}>
                        <option value="CA">California</option>
                    </select>

                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" id="zip" name="zip" value = {formData.zip} onChange={handleChange} placeholder="91246" required />

                    

                    <h1 className = "text-lg font-bold mt-10 mb-10">Fill out Card Information</h1>                    
                    <label htmlFor="name">Cardholder's Name</label>
                    <input type="text" id="name" name="name" value = {formData.name} onChange={handleChange} placeholder="Enter your name" required/>

                    
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" value = {formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" required/>

                    
                    <label htmlFor="expiry">Expiry Date</label>
                    <input type="text" id="expiry" name="expiry" value = {formData.expiry} onChange={handleChange} placeholder="MM/YY" />

                    
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" value = {formData.cvv} onChange={handleChange} placeholder="123" />

                    <button type="submit" onClick = {handleSubmit} className="submitBtn mt-10">Submit Payment</button>
                </form>
            </div>
            <Info color = "white"></Info>
        </div>
    )
}

export default page