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
          hash="|KO2?U%2Tw=wR6cErDEhOD]~RBVZRip0W9ofwxM_};RPxuwH%3s89]t8$%tLOtxZ%gixtQt8IUS#I.ENa0NZIVt6xFM{M{%1j^M_bcRPX9nht7n+j[rrW;ni%Mt7V@W;t7t8%1bbxat7WBIUR*RjRjRjxuRjs.MxbbV@WY"
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        className="aspect-[14/13]  rounded-xl w-full drop-shadow-3xl cursor-pointer object-cover"
        src={barber.imageUrl}
        alt=""
        onClick={() => setViewedImage(index)}
      />
    </>
  );
};

export default ImageCard;
