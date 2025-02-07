import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Hero from './components/Hero'
function App() {

  return (
    <>
      <div className='min-h-screen w-full flex flex-wrap content-between fixed bg-[url(https://i.pinimg.com/originals/68/31/45/6831454cf213ed7ffa541fe666fa9cf8.gif)] bg-no-repeat bg-cover bg-center'>
        <div className='w-full block text-2xl'>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
