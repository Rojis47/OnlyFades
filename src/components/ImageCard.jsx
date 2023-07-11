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
      <div className="overflow-hidden bg-gray-500 rounded-xl ">
        <div className="overflow-hidden rounded-xl ">
          <img
            className="aspect-[14/13] w-full drop-shadow-3xl lg:hover:scale-110 transition duration-500 cursor-pointer object-cover"
            src={barber.imageUrl}
            alt=""
            onClick={() => setViewedImage(index)}
            style={{ display: !imageLoaded ? 'none' : 'inline' }}
          />
        </div>
      </div>
      ;
    </>
  );
};

export default ImageCard;
