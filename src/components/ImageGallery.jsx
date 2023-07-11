import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import LazyLoad from 'react-lazy-load';

function ImageGallery({ open, setOpen, barber }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
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
                style={{ width: '75vw' }}
                className="relative px-4 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl bg-opacity-90 drop-shadow-2xl sm:my-8 sm:p-6"
              >
                <div className="absolute top-0 right-0 block pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="text-gray-400 bg-white rounded-md hover:text-gray-500"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                  <ul
                    role="list"
                    className="grid max-w-2xl grid-cols-1 mx-auto my-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                  >
                    {barber.pics.map((image, i) => (
                      <LazyLoad key={i}>
                        <div className="overflow-hidden rounded-xl ">
                          <div className="overflow-hidden ">
                            <img
                              loading="lazy"
                              src={image}
                              alt={`Image ${i + 1} for ${barber.name}`}
                              className="aspect-[14/13] w-full drop-shadow-3xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                            />
                          </div>
                        </div>
                      </LazyLoad>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ImageGallery;
