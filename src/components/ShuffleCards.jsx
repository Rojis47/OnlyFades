import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import barbers from '../components/picImports';
import { CalendarIcon } from './icons';
import GradientShadowButton from './GradientShadowButton';
import { useEffect } from 'react';

const ShuffleCards = ({ setShowModal, setSelectedBarber }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger the animation when the element is 10% in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.2 },
      });
    }
  }, [controls, inView]);

  return barbers.map((barber, index) => (
    <motion.div
      // Attach ref only to the first barber to trigger animation
      ref={index === 0 ? ref : null}
      key={barber.name}
      className="h-[380px] w-[280px] sm:h-[450px] sm:w-[350px] grid  mx-auto  place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md "
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={controls}
    >
      <motion.img
        onClick={() => {
          setSelectedBarber(barber);
          setShowModal(true);
          //   console.log('Image was clicked');
        }}
        src={barber.imageUrl}
        alt={`Image of `}
        className="object-cover w-32 h-32 mx-auto transition ease-in-out border-2 rounded-full cursor-pointer border-slate-700 bg-slate-200"
      />
      <motion.span
        className="text-lg font-medium text-center text-indigo-400"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {barber.name}
      </motion.span>
      <motion.span
        className="text-lg italic text-center text-slate-400 "
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        {barber.role}
      </motion.span>
      <motion.span
        className="mx-auto"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
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
      </motion.span>
    </motion.div>
  ));
};

export default ShuffleCards;
