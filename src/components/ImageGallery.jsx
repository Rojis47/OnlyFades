import GalleryImageCard from './GalleryImageCard';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ImageGallery({ showModal, setShowModal, barber }) {
  return (
    <div>
      {showModal ? (
        <div className={`relative z-10 block`}>
          <div>
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75"></div>
          </div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <div className="absolute top-0 right-0 block pt-4 pr-4 sm:block">
                <button
                  type="button"
                  className="text-gray-400 bg-white rounded-md outline-none hover:text-gray-500"
                  onClick={() => setShowModal(false)}
                >
                  <XMarkIcon className="w-10 h-10" />
                </button>
              </div>
              <div>
                <div
                  style={{ width: '75vw', height: '80vh' }}
                  className="relative px-4 pb-4 overflow-auto text-left transition-all transform bg-[rgba(255,255,255,0.1)] rounded-lg scroll-bar shadow-xl backdrop-blur-lg bg-opacity-90 drop-shadow-2xl sm:my-8 sm:p-6 scrollbar"
                >
                  <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <ul
                      role="list"
                      className="grid max-w-2xl grid-cols-1 mx-auto my-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                    >
                      {barber.pics.map((image, i) => (
                        <GalleryImageCard
                          key={i}
                          image={image}
                          alt={`Image ${i + 1} for ${barber.name}`}
                          index={i}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ImageGallery;
