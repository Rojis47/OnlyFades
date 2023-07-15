import { useState, Suspense, lazy } from 'react';
import '../../index.css';
import barbers from '../../components/picImports';
import ImageCard from '../../components/ImageCard';

const ImageGallery = lazy(() => import('../../components/ImageGallery'));

export default function Barbers() {
  const [viewedImage, setViewedImage] = useState(null);

  return (
    <div id="Barbers" className="py-24 ">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Book With Our Barbers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {barbers.map((barber, i) => (
            <div key={i} className="w-full h-full p-3">
              <ImageCard
                barber={barber}
                setViewedImage={setViewedImage}
                index={i}
              />

              {viewedImage === i && (
                <Suspense fallback={<div>Loading...</div>}>
                  <ImageGallery
                    open={viewedImage === i}
                    setOpen={() => setViewedImage(null)}
                    barber={barber}
                  />
                </Suspense>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
