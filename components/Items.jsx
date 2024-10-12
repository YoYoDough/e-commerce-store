import { useEffect, useState, useContext } from 'react';
import Item from "@components/Item"
import { PageContext } from '@app/layout'

const Items = () => {
  const { setCartCount } = useContext(PageContext);
  const { setCart } = useContext(PageContext);

  const handleSelect = (item) => {
      setCartCount(prevCount => prevCount + 1); // Increment cartCount
      setCart(prevCart => {
        const existingItem = prevCart.find(cartItem => cartItem.item_id === item.item_id);

        if (existingItem) {
            // If the item already exists in the cart, increment its count
            return prevCart.map(cartItem =>
                cartItem.item_id === item.item_id
                    ? { ...cartItem, count: cartItem.count + 1 } // Increment count
                    : cartItem
            );
        } else {
            // If the item does not exist, add it to the cart with a count of 1 and default size
            const defaultSize = item.mediumStock > 0 ? 'medium' : item.largeStock > 0 ? 'large' : item.smallStock > 0 ? 'small' : null;
            return [...prevCart, { ...item, itemSize: defaultSize, count: 1}]; // 'm' is the default size
        }
    });
  };
  
  const [clothingItems, setClothingItems] = useState([]);  // State to store the fetched clothing items

  // useEffect runs after the component mounts to fetch clothing data from the API
  useEffect(() => {
    const fetchClothing = async () => {
      try {
        // Fetch data from the custom API route
        const response = await fetch('/api/clothes');
        const data = await response.json();  // Parse the response as JSON
        setClothingItems(data);  // Set the fetched data into state

      } catch (error) {
        console.error('Error fetching clothing data:', error);
      }
    };

    fetchClothing();  // Call the fetch function

  }, []);  // Empty dependency array ensures it runs once after the component mounts
  console.log(clothingItems);

  return (
    <div className="items" id ="items">
        {clothingItems.length > 0 && <Item key = {clothingItems[0].item_id} item={clothingItems[0]} onSelect={() => handleSelect(clothingItems[0])} className = "shirt"/>}
      
        {clothingItems.slice(1, 3).map((item, index) => (
          <Item key={index} item={item} onSelect={() => handleSelect(item)} className = "other-items"/>
        ))}

        {clothingItems.length > 3 && <Item key = {clothingItems[3].item_id} item={clothingItems[3]} onSelect={() => handleSelect(clothingItems[3])} className = "shoe"/>}
    </div>
  )
}

export default Items