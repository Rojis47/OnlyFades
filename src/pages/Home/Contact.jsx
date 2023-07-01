import React from 'react';
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const formFields = [
  {
    id: 'first-name',
    label: 'First name',
    type: 'text',
    autoComplete: 'given-name',
  },
  {
    id: 'last-name',
    label: 'Last name',
    type: 'text',
    autoComplete: 'family-name',
  },
  { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  {
    id: 'phone-number',
    label: 'Phone number',
    type: 'tel',
    autoComplete: 'tel',
  },
  { id: 'message', label: 'Message', type: 'textarea', autoComplete: 'off' },
];
const contactInfo = [
  {
    label: 'Address',
    icon: BuildingOffice2Icon,
    value: '1320 N Interstate Hwy 35 \n Round Rock, TX 78681',
  },
  {
    label: 'Telephone',
    icon: PhoneIcon,
    value: '+1 (555) 555-5555',
    link: 'tel:#',
  },
  {
    label: 'Email',
    icon: EnvelopeIcon,
    value: 'hello@example.com',
    link: 'mailto:hello@example.com',
  },
];

function Contact() {
  return (
    <div id="Contact" className="relative bg-gray-900 isolate">
      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 w-full overflow-hidden -z-10 ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready for the ultimate fade experience?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Drop us a line at OnlyFades - where style meets precision in the
              most relaxed vibes. Whether you want to book an appointment or
              just talk about your next hair adventure, we're here to chat.
              Reach out now and let's shape your fresh look together.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              {contactInfo.map((item, index) => (
                <div className="flex gap-x-4" key={index}>
                  <dt className="flex-none">
                    <span className="sr-only">{item.label}</span>
                    <item.icon
                      className="w-6 text-gray-400 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    {item.link ? (
                      <a className="hover:text-white" href={item.link}>
                        {item.value}
                      </a>
                    ) : (
                      item.value.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <form action="#" method="POST">
            <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {formFields.map((input) => (
                  <Input
                    key={input.id}
                    id={input.id}
                    label={input.label}
                    type={input.type}
                    autoComplete={input.autoComplete}
                  />
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Input({ id, label, type, autoComplete }) {
  return (
    <div className={type === 'textarea' ? 'sm:col-span-2' : ''}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-white"
      >
        {label}
      </label>
      <div className="mt-2.5">
        {type === 'textarea' ? (
          <textarea
            id={id}
            autoComplete={autoComplete}
            rows={4}
            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
        ) : (
          <input
            type={type}
            id={id}
            autoComplete={autoComplete}
            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
        )}
      </div>
    </div>
  );
}

export default Contact;
