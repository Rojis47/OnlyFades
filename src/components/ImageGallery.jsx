import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import jonathanPics from './picImports';

function ImageGallery({ open, setOpen }) {
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
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
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
                className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:p-6"
              >
                <div className="py-24 bg-gray-900 sm:py-32">
                  <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <ul
                      role="list"
                      className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                    >
                      {jonathanPics.map((img, index) => {
                        return (
                          <img
                            key={index}
                            src={img}
                            alt={`Jonathan Pic ${index + 1}`}
                            className="object-cover w-full h-48 rounded-lg"
                          />
                        );
                      })}
                    </ul>
                  </div>
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

{
  /* <section id="gallery">
<div className="container">
  <div id="image-gallery">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
        <div className="img-wrapper">
          {jonathanPics.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt={`Jonathan Pic ${index + 1}`}
                className=""
              />
            );
          })}

          <div className="img-overlay">
            <i
              className="fa fa-plus-circle"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */
}
