import { Link } from 'react-router-dom';
import { memo } from 'react';
import barbers from '../components/picImports';
import { CalendarIcon } from './icons';

const ShuffleCards = ({ setShowModal, setSelectedBarber }) => { 
    return barbers.map((barber) => (
        <div
            key={barber.name}
            className=" h-[450px] w-[350px] grid h-[450px] w-[350px] mx-auto  place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md "
        >
            <img
                onClick={() => {
                    setSelectedBarber(barber);
                    setShowModal(true);
                }}
                src={barber.imageUrl}
                alt={`Image of `}
                className="object-cover w-32 h-32 mx-auto border-2 rounded-full pointer-events-none border-slate-700 bg-slate-200"
            />
            <span className="text-lg italic text-center text-slate-400">
                Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.
            </span>
            <span className="text-sm font-medium text-center text-indigo-400">
                {barber.name}
            </span>
        </div>
    ));
};

export default ShuffleCards;  
