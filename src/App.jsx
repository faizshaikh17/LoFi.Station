import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Hero from './components/Hero'
function App() {

  return (
    <>
      <div className='min-h-screen w-full flex flex-wrap content-between fixed bg-[url(src/assets/gif/gif2.gif)] bg-no-repeat bg-cover bg-center'>
        <div className='w-full block text-2xl'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
// https://i.pinimg.com/originals/68/31/45/6831454cf213ed7ffa541fe666fa9cf8.gif