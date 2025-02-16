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
    const randomLoad = Math.floor(Math.random() * 10)
    const loadingBackground = randomLoad % 2 === 0 ? "loading" : "loading2";
    loading ? setBackground(loadingBackground) : setBackground(image)
  }, [image, loading])

  return (
    <div className={`h-[100vh] w-full  bg-center bg-no-repeat bg-cover  absolute top-0 left-0 z-[1] bg-neutral-950/60 flex flex-wrap content-between`}
      style={{
        backgroundImage: `url(/assets/gif/${background}.gif)`,
        // backgroundImage: `url(/assets/gif/0.png)`,
        fontFamily: 'MyFont',
      }}
    >
      <div className='w-full block text-2xl'>
        <Header />
        {/* <Player /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App