import React from 'react'

const CheckoutItems = ({item}) => {
  const itemSize = item.itemSize.charAt(0).toUpperCase() + item.itemSize.slice(1);
  console.log(itemSize)
  return (
    <div>
      <div className="checkoutItem">
        <img src={item.imageUrl} alt={item.name} className = "checkoutImage"/>
        <ul className = "ml-20">
            <p>{item.name}</p>
            <p><b>${item.price}</b></p>
            <p>Size: {itemSize}</p>
            <p>Quantity: {item.count}</p>
        </ul>
      </div>
      <hr></hr>
    </div>
  )
}

export default CheckoutItems