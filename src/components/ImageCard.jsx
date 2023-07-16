import { Link } from 'react-router-dom';
import { memo } from 'react';
import barbers from '../components/picImports';

const ImageCard = ({ setShowModal, setSelectedBarber }) => {
  return barbers.map((barber, i) => (
    <div key={i}>
      <div className="relative aspect-[4/6] rounded-xl w-full cursor-pointer bg-primary font-sans">
        <img
          onClick={() => {
            setSelectedBarber(barber);
            setShowModal(true);
          }}
          name={barber.name}
          className=" h-full shadow-[5px_5px_19px_1px_#000] rounded-xl cursor-pointer object-cover"
          src={barber.imageUrl}
          alt=""
        />
        <div className="absolute flex flex-col justify-evenly text-xl half:text-2xl space-y-4 bottom-0 w-full text-center border-t border-gray-600 rounded-xl backdrop-blur-lg bg-[rgba(0,0,0,0.5)] h-2/5">
          <div>
            <h3 className="text-2xl tracking-tight text-white half:text-2xl">
              {barber.name}
            </h3>
            <h3 className="text-xl font-thin tracking-tight text-white half:text-xl">
              {barber.role}
            </h3>
          </div>

          <div className="w-1/2 mx-auto mb-6">
            <Link
              to={barber.bookUrl}
              className="z-10 flex items-center justify-center w-full gap-3 py-2 m-auto font-sans font-semibold leading-6 text-black transition-all duration-200 ease-in bg-white border border-white rounded-full place-content-center hover:bg-black hover:border-black hover:text-white"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
};
const arePropsEqual = (prevProps, nextProps) => {
  return prevProps.barber === nextProps.barber;
};

const ImageCardMemo = memo(ImageCard, arePropsEqual);

export default ImageCardMemo;
