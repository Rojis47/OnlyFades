import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageCard = ({ barber, setViewedImage, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = barber.imageUrl;
  }, [barber.imageUrl]);

  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <Blurhash
          hash="L6PZfSi_.AyE_3t7t7R**0o#DgR4"
          width={330}
          height={330}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <div style={{ display: !imageLoaded ? 'none' : 'inline' }}>
        <img
          className="aspect-[14/13]  rounded-xl w-full drop-shadow-3xl cursor-pointer object-cover"
          src={barber.imageUrl}
          alt=""
          onClick={() => setViewedImage(index)}
        />
      </div>
    </>
  );
};

export default ImageCard;
