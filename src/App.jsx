import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Player from './components/Player'
import { useSelector } from 'react-redux'

function App() {
  const { image, loading } = useSelector((state) => (state.player))
  const [background, setBackground] = useState();

  useEffect(() => {
    loading ? setBackground("loading2") : setBackground(image)
  }, [image, loading])

  return (
    <div className={`h-[100vh] w-full bg-no-repeat bg-center bg-cover  absolute top-0 left-0 z-[1] bg-neutral-950/60 flex flex-wrap content-between`}
      style={{
        backgroundImage: `url(/assets/gif/${background}.gif)`,
      }}
    >
      <div style={{ fontFamily: 'MyFont' }} className='w-full block text-2xl'>
        <Header />
        <Player />
        <Footer />
      </div>
    </div>
  )
}

export default App