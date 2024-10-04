'use client'
import { PageContext } from '@app/layout';
import { useState, useContext } from 'react';

const CartOverlay = ({items, onClose}) => { 
  const { cart, setCart, setCartCount, cartSize } = useContext(PageContext);
  
  const [selectedSize, setSelectedSize] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  function handleSelectSize(itemId, size){
    setIsSelected(!isSelected);
    setSelectedSize(prevSelected => (isSelected ? {
      ...prevSelected,
      [itemId]: size
    }: prevSelected))
  }
  
  const updateItemQuantity = (itemId, newCount) => {
    setCart((prevCart) =>
      prevCart.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, count: newCount } : cartItem
      )
    );
    setCartCount(prevCount => newCount)
  };

  function handleRemoveFromCart(itemId, count){
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== itemId))
    setCartCount(prevCount=> prevCount-count)
  }

  return (
    <div className = "cartOverlay">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2 className = "mb-5">Your Cart</h2>
        <div >
          <ul>
              {items.map(item => (
                  <li className = "cartItem">
                      <img src = {item.imageUrl} alt = {item.name} className = "overlayImg"></img>
                      <p>{item.name}</p>
                      <span>Quantity: {item.count} 
                        <button className ="addMore" onClick={() => updateItemQuantity(item.id, item.count + 1)}>
                          +
                        </button>
                        <button className = "addLess" onClick={() => updateItemQuantity(item.id, item.count - 1)} disabled={item.count === 1}>
                          -
                        </button>
                      </span>
                      <p><b>${item.price * item.count}</b></p>
                      {/* Size Selection Buttons */}
                      <div className="size-selection">
                        <button 
                          onClick={() => handleSelectSize(item.id, 'small')}
                          className={selectedSize[item.id] === 'small' ? 'selected' : ''}
                          disabled={item.smallStock === 0}
                          >
                          S
                        </button>
                        
                        <button 
                          onClick={() => handleSelectSize(item.id, 'medium') }
                          className={selectedSize[item.id] === 'medium' ? 'selected' : ''}
                          disabled = {item.mediumStock === 0}
                        >
                          M
                        </button>
                        
                        <button 
                          onClick={() => handleSelectSize(item.id, 'large')}
                          className={selectedSize[item.id] === 'large' ? 'selected' : ''}
                          disabled = {item.largeStock === 0}
                        >
                          L
                        </button>
                      </div>

                      <button className="removeButton" onClick = {()=>handleRemoveFromCart(item.id, item.count)}>Remove from Cart</button>
                  </li>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default CartOverlay