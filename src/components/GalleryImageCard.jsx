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
          hash="CKJt-k_3.S-;D-_NW?-;"
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
          src={image}
          alt={alt}
          className="aspect-[14/13] select-none  w-full drop-shadow-3xl lg:hover:scale-110 lg:transition lg:duration-500 lg:hover:drop-shadow-4xl object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default GalleryImageCard;
