import React from 'react';
import MapComponent from '../../components/MapComponent';
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

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
    value: 'onlyfades1320@gmail.com',
    link: 'mailto:onlyfades1320@gmail.com',
  },
];

function Contact() {
  return (
    <div id="Contact" className="relative isolate">
      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="max-w-xl mx-auto font-serif lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 w-full overflow-hidden -z-10 ring-white/5 lg:w-1/2">
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
            <h2 className="text-3xl font-semibold tracking-tight text-white ">
              Ready for the ultimate fade experience?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Welcome to OnlyFades, where style meets precision in the most
              relaxed vibes. Whether you're looking for a fresh cut or a whole
              new look, we're ready to bring your vision to life.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Ready to book your appointment or just want to chat about your
              next hair adventure? Don't hesitate to reach out. We're excited to
              shape your fresh look together.
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
          <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
