import React from 'react';

class MapComponent extends React.Component {
  render() {
    return (
      <div
        height={200}
        className="relative overflow-hidden aspect-w-10 aspect-h-10"
      >
        {/* <iframe
          className="rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4588.0036478034335!2d-97.6918402120569!3d30.51766859798484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d1d2623ea74f%3A0xa97ad8dfd273d1ec!2sOnly%20Fades!5e0!3m2!1sen!2sus!4v1689022236674!5m2!1sen!2sus"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    );
  }
}

export default MapComponent;
