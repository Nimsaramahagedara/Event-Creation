import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        {
            id: 101,
            posterUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-glossy-music-event-poster-design-template-84d38a706368baec17981e71a5e5810d_screen.jpg?ts=1636991393',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            coordinator: 'John Doe',
            date: 'April 30, 2024',
            otherDetails: 'Other sample details here...',
        },
        {
            id: 102,
            posterUrl: 'https://cdn.venngage.com/template/thumbnail/small/37de5deb-1ca7-4e60-b254-374b08708817.webp',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam..',
            coordinator: 'Jane Smith',
            date: 'May 15, 2024',
            otherDetails: 'Other sample details here...',
        },
        // Add more events as needed
    ];

    const handleBookNowClick = (event) => {
        setSelectedEvent(event);
    };

    const handleClosePopup = () => {
        setSelectedEvent(null);
    };

    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-center font-bold text-3xl mb-6">All Events</h1>
                {events.map((event, index) => (
                    <div key={event.id} className={`flex flex-col lg:flex-row mb-8 items-center justify-center mt-${index === 0 ? '12' : '8'}`}>
                        <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0 relative">
                            <img src={event.posterUrl} alt={`Event ${event.id}`} className="w-full h-auto rounded-lg" />
                            <div className="mt-2 text-center font-bold">{event.description}</div>
                            <span className="bg-gray-800 text-white px-2 py-1 rounded-full absolute top-0 right-0 m-2">ID: {event.id}</span>
                            <button onClick={() => handleBookNowClick(event)} className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 absolute right-0">Book Now</button> <br /><br /><br />
                        </div>

                    </div>

                ))}
                <br />
                {selectedEvent && (
                    <div className="fixed top-10 right-0 bottom-10 left-0 flex justify-center items-center">
                        <div className="bg-gray-800 bg-opacity-75 absolute top-10 left-0 bottom-10 w-full h-auto flex justify-center items-center">
                            <div className="bg-white p-8 rounded-lg flex" style={{ marginTop: '10px', marginBottom: '10px', height: '80%' }}>
                                <button onClick={handleClosePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <img src={selectedEvent.posterUrl} alt={`Event ${selectedEvent.id}`} className="w-1/4 h-auto rounded-lg mr-4" />
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Event Details</h2>
                                    <p>{selectedEvent.description}</p><br/>
                                    <p><strong>Coordinator:</strong> {selectedEvent.coordinator}</p>
                                    <p><strong>Date:</strong> {selectedEvent.date}</p>
                                    <p><strong>Other Details:</strong> {selectedEvent.otherDetails}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

export default EventList;
