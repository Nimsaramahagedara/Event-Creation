import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EventCreate from './pages/user/EventCreate'
import EventRequestList from './pages/admin/EventRequestList'
import HomeLayout from './pages/common/HomeLayout'
import NotFound from './pages/NotFound'
import EventList from './pages/user/EventList'
import axios, { Axios } from 'axios'

function App() {
 
  axios.defaults.baseURL = 'http://localhost:3001'
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />} >
          <Route path='' element={<Home />} />
          <Route path='event-create' element={<EventCreate />} />
          <Route path='events' element={<EventList />} />

        </Route>
        <Route path='*' element={<NotFound />} />


        <Route path='/allevents' element={<EventRequestList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
