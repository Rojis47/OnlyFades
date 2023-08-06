import { useState } from "react";
import "../../index.css";
import ImageCard from "../../components/ImageCard";
import ImageGallery from "../../components/ImageGallery";
import ShuffleCards from "../../components/ShuffleCards";
import { motion } from "framer-motion";

export default function Barbers() {
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="Barbers" className="py-24 ">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.3 },
          }}
        >
          <h2 className="font-sans text-3xl tracking-tight text-white sm:text-4xl">
            Book With Our Barbers
          </h2>
          <motion.p
            className="mt-6 font-sans text-lg leading-8 text-gray-300"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            We’re a barbershop with a dynamic group of individuals who are
            passionate about what we do and dedicated to delivering the best
            cuts and trims for our clients.
          </motion.p>
        </motion.div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          <ShuffleCards
            setSelectedBarber={setSelectedBarber}
            setShowModal={setShowModal}
          />
          {showModal && (
            <ImageGallery
              showModal={showModal}
              setShowModal={setShowModal}
              barber={selectedBarber}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
