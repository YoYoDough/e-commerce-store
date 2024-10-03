import {useState} from 'react'

const CartOverlay = ({items, onClose}) => {
  const [selectedSize, setSelectedSize] = useState({});


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
                      <p>Quantity: {item.count}</p>
                      <p><b>${item.price * item.count}</b></p>
                      {/* Size Selection Buttons */}
                      <div className="size-selection">
                        <button 
                          onClick={() => handleSelectSize(item.id, 'small')}
                          className={selectedSize[item.id] === 'small' ? 'selected' : ''}
                        >
                          Small
                        </button>
                        <button 
                          onClick={() => handleSelectSize(item.id, 'medium')}
                          className={selectedSize[item.id] === 'medium' ? 'selected' : ''}
                        >
                          Medium
                        </button>
                        <button 
                          onClick={() => handleSelectSize(item.id, 'large')}
                          className={selectedSize[item.id] === 'large' ? 'selected' : ''}
                        >
                          Large
                        </button>
                      </div>
                  </li>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default CartOverlay