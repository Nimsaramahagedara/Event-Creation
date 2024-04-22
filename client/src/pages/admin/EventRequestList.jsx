import React, { useState } from 'react';
import Footer from '../../components/Footer';

const EventRequestList = () => {
  // Sample data
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false); // State to control confirmation popup
  const [requestToRemove, setRequestToRemove] = useState(null); // State to store the request to remove
  const eventRequests = [
    {
      id: 1,
      businessName: 'Sample Business',
      description: 'Sample description',
      eventDate: '2024-04-30',
      startTime: '10:00 AM',
      coordinator: 'John Doe',
      eventImage: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-glossy-music-event-poster-design-template-84d38a706368baec17981e71a5e5810d_screen.jpg?ts=1636991393',
      status: 'pending',
    },
  ];

  const handleUpdateClick = (request) => {
    setSelectedRequest(request);
  };

  const handleRemoveClick = (request) => {
    setRequestToRemove(request);
    setShowConfirmation(true);
  };

  const handleClosePopup = () => {
    setSelectedRequest(null);
    setShowConfirmation(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can handle file upload logic here
  };

  const handleConfirmRemove = () => {
    // Perform remove action here, e.g., call an API to delete the request
    // After removing, close the confirmation popup
    // Example:
    // removeRequest(requestToRemove.id);
    setShowConfirmation(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto mt-8 px-4 flex-grow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Event Requests</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3">Business Name</th>
                <th className="border p-3">Description</th>
                <th className="border p-3">Coordinator</th>
                <th className="border p-3">Event Date</th>
                <th className="border p-3">Start Time</th>
                <th className="border p-3">Event Image</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventRequests.map((request) => (
                <tr key={request.id} className="text-center">
                  <td className="border p-3">{request.businessName}</td>
                  <td className="border p-3">{request.description}</td>
                  <td className="border p-3">{request.coordinator}</td>
                  <td className="border p-3">{request.eventDate}</td>
                  <td className="border p-3">{request.startTime}</td>
                  <td className="border p-3">
                    <img src={request.eventImage} alt="Event" className="h-16 w-auto mx-auto" />
                  </td>
                  <td className={`border p-3 ${request.status === 'pending' ? 'text-yellow-600' : 'text-green-600'}`}>{request.status}</td>
                  <td className="border p-3">
                    <button onClick={() => handleUpdateClick(request)} className="text-blue-600">Update</button>
                    <button onClick={() => handleRemoveClick(request)} className="text-red-600 ml-2">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Popup for Update */}
        {selectedRequest && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Update Event</h3>
                <button onClick={handleClosePopup} className="text-red-600">Close</button>
              </div>
              <img src={selectedRequest.eventImage} alt="Event" className="h-64 w-auto mx-auto mb-4" />
              <input type="file" onChange={handleImageChange} className="block mx-auto mb-4" />
              {/* Additional fields for updating event details can be added here */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Save Changes</button>
            </div>
          </div>
        )}
        {/* Confirmation Popup */}
        {showConfirmation && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md">
              <p className="text-lg font-semibold mb-4">Are you sure you want to remove this request?</p>
              <div className="flex justify-center">
                <button onClick={handleConfirmRemove} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Yes</button>
                <button onClick={handleClosePopup} className="bg-gray-500 text-white px-4 py-2 rounded-md">No</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventRequestList;
