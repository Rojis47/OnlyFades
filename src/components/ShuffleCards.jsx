import { Link } from 'react-router-dom';
import { memo } from 'react';
import barbers from '../components/picImports';
import { CalendarIcon } from './icons';
import GradientShadowButton from './GradientShadowButton';

const ShuffleCards = ({ setShowModal, setSelectedBarber }) => {
  return barbers.map((barber) => (
    <div
      key={barber.name}
      className="h-[380px] w-[280px] sm:h-[450px] sm:w-[350px] grid  mx-auto  place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md "
    >
      <img
        onClick={() => {
          setSelectedBarber(barber);
          setShowModal(true);
          console.log('Image was clicked');
        }}
        src={barber.imageUrl}
        alt={`Image of `}
        className="object-cover w-32 h-32 mx-auto transition ease-in-out border-2 rounded-full cursor-pointer hover:scale-125 border-slate-700 bg-slate-200"
      />
      <span className="text-lg font-medium text-center text-indigo-400">
        {barber.name}
      </span>
      <span className="text-lg italic text-center text-slate-400">
        {barber.role}
      </span>
      <span className="mx-auto">
        <GradientShadowButton>
          <Link
            to={barber.bookUrl}
            className="z-10 flex items-center justify-center w-full gap-3 py-2 mx-auto "
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
              <CalendarIcon />
            </svg>
          </Link>
        </GradientShadowButton>
      </span>
    </div>
  ));
};

export default ShuffleCards;
