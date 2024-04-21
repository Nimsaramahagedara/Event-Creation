import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EventCreate from './pages/user/EventCreate'
import EventRequestList from './pages/admin/EventRequestList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event-create' element={<EventCreate />} />


        <Route path='/allevents' element={<EventRequestList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
