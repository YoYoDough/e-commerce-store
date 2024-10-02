

const CartOverlay = ({items, onClose}) => {
  

  return (
    <div className = "cartOverlay">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Your Cart</h2>
        <ul>
            {items.map(item => (
                <li>
                    <img src = {item.imageUrl} alt = {item.name} className = "overlayImg"></img>
                    <p>{item.name}</p>
                    <p>Quantity: {item.count}</p>
                    <p>${item.price * item.count}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CartOverlay