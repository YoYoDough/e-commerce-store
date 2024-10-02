

const CategoryList = ({item, onSelect}) => {
  return (
    <div className = "categoryItem">
      <img src = {item.imageUrl}></img>
      <p>{item.name}</p>
      <p className = "price">${item.price}</p>
      <button onClick = {onSelect} className = "addToCartButton">Add to Cart</button>
    </div>
  )
}

export default CategoryList