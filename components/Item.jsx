const Item = ({ item, onSelect, className}) => {
    return (
      <div className={className}>
        <img src={item.imageUrl} alt={item.name} />
        <p>{item.name}</p>
        <p>${item.price}</p>
        <button onClick = {onSelect}>Add to Cart</button>
      </div>
    );
  };
  
  export default Item;