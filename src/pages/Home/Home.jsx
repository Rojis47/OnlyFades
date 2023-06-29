import bgimg from '../../assets/images/else/bgimg.jpg';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Barbers from './Barbers';

function Home() {
  return (
    <div className="bg-gray-900">
      <NavBar />
      <div
        className="relative overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover md:bg-right-top isolate pt-14"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
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

        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Expert Barbers, Exceptional Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Quality cuts, experienced barbers, relaxed vibe. Experience a
              fresh approach to men's grooming.
            </p>
            <div className="flex items-center justify-center px-2 mt-10 gap-x-6">
              <a
                href="#"
                className="grid w-48 px-4 py-2 font-semibold leading-6 text-black transition-all duration-200 ease-in bg-white border border-white rounded-full text-xlg place-content-center hover:bg-black hover:border-black hover:text-white"
              >
                Book Now
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Barbers />
      <Footer />
    </div>
  );
}

export default Home;
