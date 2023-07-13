import { Fragment, useRef, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import GalleryImageCard from './GalleryImageCard';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ImageGallery({ open, setOpen, barber }) {
  const cancelButtonRef = useRef(null);
  useEffect(() => {
    barber.pics.map((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [barber]);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-10 ${open ? 'block' : 'hidden'}`}
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75"></div>
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <div className="absolute block pt-4 pr-4 top-10 right-10 sm:block">
              <button
                type="button"
                className="text-gray-400 bg-white rounded-md outline-none hover:text-gray-500"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                style={{ width: '75vw', height: '80vh' }}
                className="relative px-4 pb-4 overflow-auto text-left transition-all transform bg-white rounded-lg shadow-xl bg-opacity-90 drop-shadow-2xl sm:my-8 sm:p-6"
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ImageGallery;
