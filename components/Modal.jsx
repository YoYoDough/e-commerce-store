import {useState} from 'react'

const Modal = ({item, onClose}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    console.log(currentImageIndex)

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1); 
    };
    
      const handlePrevImage = () => {
        if (currentImageIndex > 1) {
            setCurrentImageIndex(prevIndex => prevIndex - 1);
        } 
      };


    const getImageUrl = (index) => {
        // Modify this based on your actual naming convention
        return `${item.imageUrl.split('-1')[0]}-${index}.avif`;
    };

    const loadImage = (index) => {
        const image = new Image();
        image.src = getImageUrl(index);
    
        image.onerror = () => {
            setCurrentImageIndex(1); // Loop back to the first image if no more images exist
        };
        return image.src;
    };

  return (
    <div className = "modal">
            <div className = "modalContent">
                <button className="close" onClick={onClose}>
                    &times;
                </button>
                <img
                    src={loadImage(currentImageIndex)}
                    alt={`Image ${currentImageIndex}`}
                    className="large-image" // Hide image while loading
                >
                </img>
                {loadImage(2) &&
                    <div className="arrows">
                        <button className = "backArrow" onClick={handlePrevImage} disabled={currentImageIndex <= 1}>←</button>
                        <button className = "nextArrow" onClick={handleNextImage}>→</button>
                    </div>
                }
                <p>{item.name}</p>
                <p className="price">${item.price}</p>
            </div>
    </div>
  )
}

export default Modal