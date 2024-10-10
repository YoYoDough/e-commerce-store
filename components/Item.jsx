

const Item = ({ item, onSelect, className, size}) => {
    
    return (
      <div className={className}>
        <img src={item.imageUrl} alt={item.name} />
        <p>{item.name}</p>
        <p className = "price">${item.price}</p>
        <button onClick = {onSelect} className = "addToCartButton">Add to Cart</button>
      </div>
    );
  };
  
  export default Item;