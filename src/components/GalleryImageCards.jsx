import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const GalleryImageCards = ({ images, barberName }) => {
  return (
    <ul
      role="list"
      className="grid max-w-2xl grid-cols-1 mx-auto my-10 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
    >
      {images.map((image, i) => (
        <GalleryImageCard
          key={i}
          image={image}
          alt={`Image ${i + 1} for ${barberName}`}
        />
      ))}
    </ul>
  );
};

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
          hash="hFCZz=o{J2%0E0S4aeadyZv-nLI]V?t7X7ob02H@xHSkr^s=jKofZfE1Ot?GofbbafWCIA-;%hI.slWTR%R*"
          width={150}
          height={150}
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
          className="aspect-[14/13] select-none w-full drop-shadow-3xl lg:hover:scale-110 lg:transition lg:duration-500 lg:hover:drop-shadow-4xl object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default GalleryImageCards;
