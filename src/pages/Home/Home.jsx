import bgImage from '../../assets/images/else/bgimg.jpg';

import NavBar from '../../components/NavBar';
import Contact from './Contact';
import Footer from '../../components/Footer';
import Barbers from './Barbers';
import logo from '../../assets/logo/OnlyFades.png';

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Home() {
  return (
    <BrowserRouter>
      <div></div>
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
                  'linear-gradient(to right, black 1%, transparent 50%, black 99%)',
              }}
            ></div>
          }

          <div className="max-w-2xl pt-32 mx-auto sm:py-48 lg:py-56">
            <div className="text-center ">
              <Link href="#" className="">
                <span className="sr-only">Your Company</span>
                <img className="h-16 mx-auto mb-20 lg:h-24" src={logo} alt="" />
              </Link>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Expert Barbers, Exceptional Results
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Quality cuts, experienced barbers, relaxed vibe. Experience a
                fresh approach to men's grooming.
              </p>
              <div className="flex flex-col items-center justify-center px-2 mt-10 gap-x-6">
                <Link
                  to="#Barbers"
                  className="grid w-48 px-4 py-2 font-semibold leading-6 text-black transition-all duration-200 ease-in bg-white border border-white rounded-full text-xlg place-content-center hover:bg-black hover:border-black hover:text-white"
                  smooth
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Barbers />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Home;
