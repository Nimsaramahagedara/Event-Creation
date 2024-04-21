import React from 'react';

const EventList = () => {
  const events = [
    {
      id: 1,
      posterUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-glossy-music-event-poster-design-template-84d38a706368baec17981e71a5e5810d_screen.jpg?ts=1636991393',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      id: 2,
      posterUrl: 'https://cdn.venngage.com/template/thumbnail/small/37de5deb-1ca7-4e60-b254-374b08708817.webp',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam..',
    },
    // Add more events as needed
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-center font-bold text-3xl mb-6">All Events</h1> {/* Header for All Events */}
        {events.map((event, index) => (
          <div key={event.id} className={`flex flex-col lg:flex-row mb-8 items-center justify-center mt-${index === 0 ? '12' : '8'}`}> {/* Centering horizontally */}
            <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0 relative">
              <img src={event.posterUrl} alt={`Event ${event.id}`} className="w-full h-auto rounded-lg" />
              <div className="mt-2 text-center font-bold">{event.description}</div> {/* Description with bold styling */}
              <span className="bg-gray-800 text-white px-2 py-1 rounded-full absolute top-0 right-0 m-2">ID: {event.id}</span> {/* Badge showing the ID */}
              <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 absolute right-0">Book Now</button> {/* Book Now button */}
              <br/><br/></div>
          </div>
        ))}
        
        {events.map((event, index) => (
          index !== events.length - 1 && <React.Fragment key={index}><br /></React.Fragment>
        ))}
      </div>
    </>
  );
};

export default EventList;
