import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Player from './components/Player'
import { useSelector } from 'react-redux'


function App() {
  const { image, loading } = useSelector((state) => (state.player))
  return (
    <div className={`h-[100vh] w-full flex flex-wrap content-between fixed ${loading ? 'bg-[url(src/assets/gif/loading2.gif)] bg-no-repeat bg-cover ' : ""} bg-[url(src/assets/gif/8.gif)]  bg-cover bg-center `}>
      <div className='w-full block text-2xl'>
        <Header />
        <Player />
        <Footer />
      </div>
    </div>
  )
}

export default App
// https://i.pinimg.com/originals/68/31/45/6831454cf213ed7ffa541fe666fa9cf8.gif