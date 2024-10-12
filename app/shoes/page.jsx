'use client'

import Item from '@components/Item'
import { useState, useEffect, useContext } from 'react';
import { usePathname} from 'next/navigation'
import { PageContext } from '@app/layout'


const page = () => {
    const pathName = usePathname();
    const category = pathName.split('/')[1]
    
    const { setCartCount, clothingItems, setClothingItems, setCart } = useContext(PageContext);

    const handleSelect = (item) => {
        setCartCount(prevCount => prevCount + 1); // Increment cartCount
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.item_id === item.item_id);
            if (existingItem){
                return prevCart.map(cartItem => cartItem.item_id === item.item_id ? {...cartItem, count: cartItem.count+1}: cartItem)
            }
            else{
              const defaultSize = item.mediumStock > 0 ? 'medium' : item.largeStock > 0 ? 'large' : item.smallStock > 0 ? 'small' : null;
                return [...prevCart, {...item, itemSize: defaultSize, count: 1}]
            }
        })
    };

    useEffect(() => {
        const fetchClothing = async () => {
          try {
            console.log(category);
            // Fetch data from the custom API route
            const response = await fetch(`/api/clothes/${category}`);
            const data = await response.json();  // Parse the response as JSON
            setClothingItems(data);  // Set the fetched data into state
    
          } catch (error) {
            console.error('Error fetching clothing data:', error);
          }
        };
    
        fetchClothing();  // Call the fetch function
    
      }, []);  // Empty dependency array ensures it runs once after the component mounts

      
  return (
    <div className = "categoryItems">
        {clothingItems.map((item) => (
            <Item key = {item.item_id} item = {item} onSelect ={() => handleSelect(item)} category = {category.slice(0,category.length-1)} className = "categoryItem"></Item>
        ))}
    </div>
  )
}

export default page