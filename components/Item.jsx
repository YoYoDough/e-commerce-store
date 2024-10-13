import {useState} from 'react'
import Modal from '@components/Modal'

const Item = ({ item, onSelect, className}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleClick(){
      setIsModalOpen(true);
    }

    function handleClose(){
      setIsModalOpen(false)
    }
    
    return (
      <>
        <div className={className}>
          <img src={item.imageUrl} alt={item.name} onClick = {handleClick}/>
          <p>{item.name}</p>
          <p className = "price">${item.price}</p>
          <button onClick = {onSelect} className = "addToCartButton">Add to Cart</button>
        </div>

        {isModalOpen && <Modal key = {item.item_id} item = {item} onClose = {handleClose}></Modal>}
      </>
    );
  };
  
  export default Item;