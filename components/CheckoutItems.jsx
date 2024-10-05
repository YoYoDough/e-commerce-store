import React from 'react'

const CheckoutItems = ({item}) => {
  return (
    <div className = "checkoutPage">
      <div className="checkoutItem">
        <img src={item.imageUrl} alt={item.name} className = "checkoutImage"/>
        <ul className = "ml-20">
            <p>{item.name}</p>
            <p><b>${item.price}</b></p>
            <p>Size: {item.itemSize}</p>
            <p>Quantity: {item.count}</p>
        </ul>
      </div>
      <hr></hr>
    </div>
  )
}

export default CheckoutItems