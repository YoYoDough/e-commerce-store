import {useState} from 'react'

const Modal = ({item, onClose}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === item.imageUrl.length - 1 ? 1 : prevIndex + 1
        );
    }

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex)=>{
            prevIndex === imageUrl.length - 1 ? 1 : prevIndex - 1;
        })
    }

    const getImageUrl = (index) => {
        // Modify this based on your actual naming convention
        return `${item.imageUrl.split('-1')[0]}-${index}.avif`;
      };

  return (
    <div className = "modal" onClick = {onClose}>
        <div className = "modalContent">
            <img src={getImageUrl(currentImageIndex)} alt={item.name} className="large-image" />
        </div>
    </div>
  )
}

export default Modal