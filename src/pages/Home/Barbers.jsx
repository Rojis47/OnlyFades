import { Link } from 'react-router-dom';
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
            <li key={i}>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {barber.name}
              </h3>

              <ImageCard //main pic
                barber={barber}
                setViewedImage={setViewedImage}
                index={i}
              />

              {viewedImage === i && (
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="w-64 h-64 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader"></div>
                    </div>
                  }
                >
                  <ImageGallery
                    open={viewedImage === i}
                    setOpen={() => setViewedImage(null)}
                    barber={barber}
                  />
                </Suspense>
              )}

              <Link
                to={barber.bookUrl}
                className="flex justify-center w-1/2 gap-3 py-2 m-auto mt-5 font-semibold leading-6 text-center text-black align-middle transition-all duration-200 ease-in bg-white border border-white rounded-full text-xlg place-content-center hover:bg-black hover:border-black hover:text-white"
                smooth="true"
              >
                Book
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
