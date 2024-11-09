import { useState } from 'react';
import Image from 'next/image';

export default function PortfolyoItem({ category, images, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div key={index}>
        <Image 
          src={images} 
          alt={category} 
          width={400} 
          height={400} 
          className="border-1 border-black cursor-pointer mb-5"
          onClick={() => handleImageClick(images)} 
        />
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <Image 
            src={modalImage} 
            alt={category} 
            width={600} 
            height={600} 
            className="transform scale-150 transition-transform duration-300 ease-in-out"
          />
        </div>
      )}
    </div>
  );
}
