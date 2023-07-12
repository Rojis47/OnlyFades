import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const GalleryImageCard = ({ image, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = image;
  }, [image]);

  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <Blurhash
          hash="L6PZfSi_.AyE_3t7t7R**0o#DgR4"
          width={250}
          height={250}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="rounded-xl"
        />
      </div>

      <div style={{ display: !imageLoaded ? 'none' : 'inline' }}>
        <img
          loading="lazy"
          src={image}
          alt={alt}
          className="aspect-[14/13] w-full drop-shadow-3xl lg:hover:scale-110 transition duration-500 hover:drop-shadow-4xl object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default GalleryImageCard;
