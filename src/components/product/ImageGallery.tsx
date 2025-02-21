'use client'
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const allImages = [...images];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="md:flex-1 px-4">
      <div className=" rounded-lg bg-gray-100 mb-4">
        <div className=" rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
          <img
            src={allImages[activeIndex]}
            alt={`Product view ${activeIndex + 1}`}
            className="object-cover rounded-xl shadow-lg drop-shadow-sm w-full h-full"
          />
        </div>
      </div>

      <div className="flex -mx-2 mb-4 w-full h-full">
        {allImages.map((image, index) => (
          <div key={index} className="flex-1 px-2 ">
            <button
              onClick={() => setActiveIndex(index)}
              className={`focus:outline-none w-full h-fit rounded-lg bg-gray-100 flex items-center justify-center ${
                activeIndex === index
                  ? 'ring-2 ring-indigo-300 ring-inset'
                  : ''
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover w-full h-fit rounded-lg"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;