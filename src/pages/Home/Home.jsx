import bgImage from "../../assets/images/else/bgimg.jpg";

import NavBar from "../../components/NavBar";
import Contact from "./Contact";
import Footer from "../../components/Footer";
import Barbers from "./Barbers";
import logo from "../../assets/logo/OnlyFades.png";
import { motion } from "framer-motion";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 ">
        <NavBar />
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="myBackgroundImage isolate"
        >
          <div className="absolute inset-0 object-cover w-full h-full bg-black bg-opacity-50 -z-10"></div>

          {
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-transparent to-black"
              style={{
                backgroundImage:
                  "linear-gradient(to right, black 1%, transparent 50%, black 99%)",
              }}
            ></div>
          }

          <motion.div
            className="max-w-2xl pt-32 mx-auto sm:py-48 lg:py-56"
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
            <div className="text-center ">
              <Link href="#" className="">
                <motion.img
                  className="h-16 mx-auto mb-20 lg:h-24"
                  src={logo}
                  alt=""
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </Link>
              <motion.h1
                className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-6xl"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Expert Barbershop Exceptional Results
              </motion.h1>
              <motion.p
                className="mt-6 font-serif text-xl leading-8 text-gray-300"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Quality cuts, experienced barbershop, relaxed vibe. Experience a
                fresh approach to men's grooming.
              </motion.p>
              <motion.div
                className="flex flex-col items-center justify-center px-2 mt-10 gap-x-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 1.7 }}
              >
                <Link
                  to="#Barbers"
                  className="grid w-48 px-4 py-2 font-semibold leading-6 text-black transition-all duration-200 ease-in bg-white border border-white rounded-full text-xlg place-content-center hover:bg-black hover:border-black hover:text-white"
                  smooth="true"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
          <Barbers />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Home;
