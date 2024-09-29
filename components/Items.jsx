

const Items = ({ setCartCount }) => {
  const handleSelect = () => {
    setCartCount(prevCount => prevCount + 1); // Increment cartCount
  };
  return (
    <div className="items">
      <div className="item" onClick={handleSelect}>
        <p>Item 1</p>
      </div>
      <div className="item" onClick={handleSelect}>
        <p>Item 2</p>
      </div>
      <div className="item" onClick={handleSelect}>
        <p>Item 3</p>
      </div>
    </div>
  )
}

export default Items