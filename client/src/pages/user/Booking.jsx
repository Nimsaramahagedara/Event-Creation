import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Booking = () => {
    const { id } = useParams()
    const [event, setEvent] = useState({});
    const [booking, setBooking] = useState({
        eventId: id,
        name: '',
        nic: '',
        age: '',
        email: '',
        expYear: null,
        expMonth: null,
        cvv: 0,
        cardName: '',
        cardNumber: ''
    })

    const [formStep, setFormStep] = useState(1);
    const getEvet = async () => {
        try {
            const resp = await axios.get(`/event/${id}`)
            setEvent(resp.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEvet()
    }, [])

    const handleChange = (e) => {
        setBooking(prev => ({
            ...prev,
            [e.target.name]: e.target.value

        }))
    }

    const nextPage = () => {
        try {
            if (formStep === 1) {
                if (!booking.eventId || !booking.age || !booking.nic || !booking.email) {
                    throw Error('All fields are required')
                }
                setFormStep((prev)=>++prev)
            }else if (formStep === 2) {
                if (!booking.cardName || !booking.cardNumber || !booking.expYear || !booking.expMonth || !booking.cvv) {
                    throw Error('Card details are required')
                }

                if (booking.cardNumber.length !== 16) {
                    throw Error('Card number should be 16 digits')
                }
                if (booking.cvv.length !== 3) {
                    throw Error('CVV should be 3 digits')
                }
                if(booking.expYear < 2024){
                    throw Error('Card year is expired')
                }
                setFormStep((prev)=>++prev)
            } else{
                createBooking()
            }
            

        } catch (error) {
            toast.error(error.message)
        }

    }


    const createBooking = async()=>{
        try {
            const resp = await axios.post('/event/book', booking)

            toast.success('Booking done')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='w-full xl:w-1/2 mx-auto p-10 bg-white'>
            {
                formStep === 1 ? <>
                    <h1 className='text-3xl font-bold my-5'>Please fill out the form below</h1>
                    <div className='space-y-5 flex flex-col'>

                        <input type="text" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='id' name='bookingId' value={id} onChange={handleChange} />
                        <input type="text" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='name' name='name' value={booking.name} onChange={handleChange} />
                        <input type="text" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='nic' name='nic' value={booking.nic} onChange={handleChange} />
                        <input type="text" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='age' name='age' value={booking.age} onChange={handleChange} />
                        <input type="text" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='email' name='email' value={booking.email} onChange={handleChange} />


                    </div>
                </> : formStep === 2 ? <>

                    <h1 className='text-3xl font-bold my-5'>Payment Details</h1>
                    <div className='space-y-5 flex flex-col'>

                        <input type="number" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='card number' name='cardNumber' value={booking.cardNumber} onChange={handleChange} />
                        <input type="number" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='year' name='expYear' min={2024} value={booking.expYear} onChange={handleChange} />
                        <input type="number" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='month' min={1} max={12} name='expMonth' value={booking.expMonth} onChange={handleChange} />
                        <input type="number" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='cvv' name='cvv' value={booking.cvv} onChange={handleChange} />
                        <input type="text" className='bg-cyan-100 px-4 py-2 rounded-md w-full' placeholder='cardName' name='cardName' value={booking.cardName} onChange={handleChange} />
                    </div>
                </> : <>
                
                <h1 className='text-3xl font-bold my-5'>Booking Details</h1>
                <div>
                    <p><span className='font-bold'>Event Id : </span>{id}</p>
                    <p><span className='font-bold'>Location : </span>{event?.city}</p> 
                    <p><span className='font-bold'>Date : </span>{event?.date}</p>
                    <p><span className='font-bold'>Time : </span>{event?.timeFrom}</p> 
                    <p><span className='font-bold'>BookingId : </span>{id}</p>

                    
                </div>
                </>
            }

            <button className='px-4 block my-10 py-2 bg-purple-400 rounded-full hover:bg-purple-600 text-white w-max mx-auto' onClick={nextPage}>Submit</button>
            <div>
                <div>
                    {event?.eventIdea}
                </div>
                <div className='w-1/2'>
                    <img src={event.image} alt="" srcset="" />
                </div>

            </div>
        </div>
    )
}

export default Booking