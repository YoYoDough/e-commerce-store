'use client'
import { PageContext } from '@app/layout';
import { useState, useContext } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CartOverlay = ({items, isOpen, onClose}) => { 
  const router = useRouter();
  const { cart, setCart, setCartCount, cartSize } = useContext(PageContext);
  
  function handleSelectSize(itemId, size){
    
    setCart(prevCart => 
      prevCart.map(cartItem => cartItem.item_id === itemId ? {...cartItem, itemSize: size} : cartItem
      )
    )
  }
  
  const updateItemQuantity = (itemId, newCount) => {
    setCart((prevCart) =>
      prevCart.map(cartItem =>
        cartItem.item_id === itemId ? { ...cartItem, count: newCount } : cartItem
      )
    );
    setCartCount(prevCount => newCount)
  };

  function handleRemoveFromCart(itemId, count){
    setCart(prevCart => prevCart.filter(cartItem => cartItem.item_id !== itemId))
    setCartCount(prevCount=> prevCount-count)
  }

  const handleCheckout = () => {
    // Navigate to the checkout page and pass the cart as a query parameter
    router.push({
        pathname: '/checkout',
        query: { cart: cart }, // Serialize cart to pass as a query
    });
};

  return (
    <div className = "wrapper">
      {isOpen && <div className="backdrop" onClick={onClose} />}
      <div className = "cartOverlay font-bold">
          <button className="close-btn" onClick={onClose}>X</button>
          <h2 className = "mb-5">Your Cart</h2>
          <div >
            <ul>
                {items.map(item => (
                    <li className = "cartItem">
                        <img src = {item.imageUrl} alt = {item.name} className = "overlayImg"></img>
                        <p>{item.name}</p>
                        <span>Quantity: {item.count} 
                          <button className ="addMore" onClick={() => updateItemQuantity(item.item_id, item.count + 1)}>
                            +
                          </button>
                          <button className = "addLess" onClick={() => updateItemQuantity(item.item_id, item.count - 1)} disabled={item.count === 1}>
                            -
                          </button>
                        </span>
                        <p><b>${(item.price * item.count).toFixed(2)}</b></p>
                        {/* Size Selection Buttons */}
                        <div className="size-selection">
                        <button
                          onClick={() => handleSelectSize(item.item_id, 'small')}
                          className={item.itemSize === 'small' ? 'darkerSizeButtonColor' : 'normalSizeButtonColor'}
                          disabled={item.smallStock === 0}
                        >
                            S
                          </button>
                          
                          <button 
                            onClick={() => handleSelectSize(item.item_id, 'medium') }
                            className={item.itemSize === 'medium' ? 'darkerSizeButtonColor' : 'normalSizeButtonColor'}
                            disabled = {item.mediumStock === 0}
                          >
                            M
                          </button>
                          
                          <button 
                            onClick={() => handleSelectSize(item.item_id, 'large')}
                            className={item.itemSize === 'large' ? 'darkerSizeButtonColor' : 'normalSizeButtonColor'}
                            disabled = {item.largeStock === 0}
                          >
                            L
                          </button>
                        </div>

                        <button className="removeButton" onClick = {()=>handleRemoveFromCart(item.item_id, item.count)}>Remove from Cart</button>
                    </li>

                    
                ))}
            </ul>
            
          </div>
          {cartSize > 0 && <button className = "submitCheckoutButton"><Link href = "/checkout">Proceed to Checkout</Link></button>}
      </div>
    </div>
  )
}

export default CartOverlay