import React from 'react';
import LazyLoad from 'react-lazyload';

type GalleryProps = {
  images: string[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 bg-black p-4 rounded-lg">
      {images.map((src, index) => (
        <LazyLoad key={index} height={200} offset={100} once>
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="w-full mb-3 rounded-lg"
          />
        </LazyLoad>
      ))}
    </div>
  );
};

export default Gallery;
