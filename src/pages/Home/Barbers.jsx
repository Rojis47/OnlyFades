const barbers = [
  {
    name: 'Name',
    role: 'Barber',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Name',
    role: 'Barber',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Name',
    role: 'Barber',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Name',
    role: 'Barber',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Name',
    role: 'Barber',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Name',
    role: 'Barber',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Name',
    role: 'Barber',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Leonard Krasner',
    role: 'barber',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bookUrl: '#',
    linkedinUrl: '#',
  },
];

export default function Barbers() {
  return (
    <div
      id="Barbers"
      className="py-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black sm:py-32"
    >
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Book With Our Barbers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {barbers.map((barber) => (
            <li key={barber.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={barber.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {barber.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{barber.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {barber.location}
                {
                  <a
                    href={barber.bookUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">Book</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                  </a>
                }
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
