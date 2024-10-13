'use client'
import { PageContext } from '@app/layout'
import {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Item from '@components/Item'
import CheckoutItems from '@components/CheckoutItems'
import Info from '@components/Info'
import Nav from '@components/Nav'

const page = () => {
    const { cart, setCart, cartCount, setCartCount } = useContext(PageContext)
    const [fullData, setFullData] = useState(null); // Full data for submission
    const [isSubmitted, setIsSubmitted] = useState(false);
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
      const savedCartCount = localStorage.getItem('cartCount');
      if (savedCartCount) {
          setCartCount(parseInt(savedCartCount, 10));
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);
    
    console.log(cart);
    let fullPrice = 0;
    cart.map(cartItem => {
        fullPrice += parseFloat(cartItem.price * cartItem.count)
    })
    fullPrice = fullPrice.toFixed(2)

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        const fullData = {
            ...formData,
            totalAmount: fullPrice,
            cartItems: cart,
        }
        const email = formData.email;
        const zip = formData.zip;
        const cardNumber = formData.cardNumber;
        const expiry = formData.expiry;
        const cvv = formData.cvv;
        if (!email.includes('@'))
        {
            alert("Please enter a valid email.");
            return;
        }
        if (zip.length !== 5 || isNaN(zip))
        {
            alert("Please enter a valid email.")
            return;
        }
        if (cardNumber.length !== 19)
        {
            alert("Please enter a valid card number.");
            return;
        }
        if (expiry.length !==5)
        {
            alert("Please enter a valid card expiration date.");
            return;
        }
        if (cvv.length !== 3 || isNaN(cvv))
        {
            alert("Please enter a valid CVV.");
            return;
        }
        setFullData(fullData);
        setIsSubmitted(true);
        console.log("Order data submitted", fullData)
        // Submit the form data to your backend for further processing (e.g., save order details, process payment)
    };
    useEffect(() => {
        if (!isSubmitted || fullData == null) return;
    
        const submitOrder = async () => {
          try {
            const response = await fetch('/api/submit-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(fullData),
            });
    
            if (!response.ok) {
              console.error('Failed to submit order:', response.statusText);
              return;
            }
    
            const data = await response.json();
            console.log('Data received from JSON response:', data);
            // Handle success (e.g., redirect or clear form)
          } catch (error) {
            console.error('Error submitting order:', error);
          }
        };
    
        submitOrder();
      }, [isSubmitted, fullData]);

    return (
      
        <div className = "checkoutPage">
          {isSubmitted === false && (
          <>
              {cart.map(cartItem => (
                  <CheckoutItems key={cartItem.id} item={cartItem}></CheckoutItems>
              ))}
              <div className="checkoutInfo mt-20 p-10">
                  <h1 className="checkoutSummary text-lg font-bold">Payment Summary: ${fullPrice}</h1>
                  <form className="form" onSubmit={handleSubmit}>
                      <h1 className="text-lg font-bold mb-10">Information</h1>
                      
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter a valid email" required />

                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" required />

                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" required />

                      <h2 className="mt-10 mb-10 text-lg font-bold">Shipping Information</h2>
                      
                      <label htmlFor="country">Country</label>
                      <select id="country" name="country" value={formData.country} onChange={handleChange} required>
                          <option value="US">United States</option>
                      </select>

                      <label htmlFor="address1">Address</label>
                      <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleChange} placeholder="Add a house number if you have one" required />

                      <label htmlFor="address2">Apartment, suite, etc. (optional)</label>
                      <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleChange} placeholder="Apartment, suite, etc." />

                      <label htmlFor="state">State</label>
                      <select id="state" name="state" value={formData.state} onChange={handleChange}>
                          <option value="CA">California</option>
                      </select>

                      <label htmlFor="zip">Zip Code</label>
                      <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} placeholder="91246" required />

                      <h1 className="text-lg font-bold mt-10 mb-10">Fill out Card Information</h1>

                      <label htmlFor="name">Cardholder's Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />

                      <label htmlFor="cardNumber">Card Number</label>
                      <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} size = '20' onChange={handleChange} placeholder="1234 5678 9012 3456" required />

                      <label htmlFor="expiry">Expiry Date</label>
                      <input type="text" id="expiry" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" />

                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" />

                      <button type="submit" className="submitBtn mt-10">Submit Payment</button>
                  </form>
              </div>
          </>
      )}
            {isSubmitted && <h1 className = "purchasedText">Thank You For your purchase! You bought {cartCount} items for ${fullPrice}!</h1>}
            
            <Info color = "white"></Info>

        </div>
        
    )
}

export default page