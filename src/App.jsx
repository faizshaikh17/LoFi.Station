import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Player from './components/Player'
import { useSelector } from 'react-redux'


function App() {

  const { image } = useSelector((state) => (state.player))
  const [bg, setBg] = useState(0)
  useEffect(() => {
    console.log('Updating bg to:', image); // Debugging: Check if useEffect is running
    setBg(image);
  }, [image]);

  return (
    <div className={`min-h-screen w-full flex flex-wrap content-between fixed bg-[url(src/assets/gif/0.gif)] bg-no-repeat bg-cover bg-center `}>
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