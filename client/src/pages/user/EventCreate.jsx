import React, { useState } from 'react';
import axios from 'axios'; // Import axios for handling form submission

const EventCreate = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    eventIdea: '',
    description: '',
    date: '',
    timeFrom: '',
    timeTo: '',
    city: '',
    coordinatorName: '',
    coordinatorContactNo: '',
    paymentMethod: 'credit', // Default to credit
    image: null, // For image upload
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('localhost:5000/event/', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto">
        <br />
        <h1 className="text-2xl font-semibold mb-4">Event Creating Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="businessName" className="block mb-1">Business Name</label>
              <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="eventIdea" className="block mb-1">Event Idea</label>
              <input type="text" id="eventIdea" name="eventIdea" value={formData.eventIdea} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div className="col-span-2">
              <label htmlFor="description" className="block mb-1">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required></textarea>
            </div>
            <div>
              <label htmlFor="date" className="block mb-1">Date</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="timeFrom" className="block mb-1">Time From</label>
              <input type="time" id="timeFrom" name="timeFrom" value={formData.timeFrom} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="timeTo" className="block mb-1">Time To</label>
              <input type="time" id="timeTo" name="timeTo" value={formData.timeTo} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="city" className="block mb-1">City</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="coordinatorName" className="block mb-1">Coordinator Name</label>
              <input type="text" id="coordinatorName" name="coordinatorName" value={formData.coordinatorName} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="coordinatorContactNo" className="block mb-1">Coordinator Contact No</label>
              <input type="tel" id="coordinatorContactNo" name="coordinatorContactNo" value={formData.coordinatorContactNo} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block mb-1">Payment Method</label>
              <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
            </div>
            <div>
              <label htmlFor="image" className="block mb-1">Event Posters</label>
              <input type="file" id="image" name="image" onChange={handleImageChange} className="w-full border rounded-md px-3 py-2" accept="image/*" required />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Create Event</button>
            <button type="button" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={() => window.location.href = '#'}>Cancel</button>
          </div><br />
        </form>
      </div>
    </>
  );
};

export default EventCreate;
