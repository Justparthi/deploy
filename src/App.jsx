import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom' 
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer.jsx/Footer'
import Features from './pages/features/Features'

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
        <Route path='/features' element={<Features/>}/>
      </Routes>
      <Footer />

      </div>
  )
}

export default App
