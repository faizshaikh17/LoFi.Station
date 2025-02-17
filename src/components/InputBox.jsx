import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { X } from 'lucide-react'
import { name, setInputToggle } from '../feature/inputBoxSlice'


function InputBox() {
  const dispatch = useDispatch();
  const { nickname, inputToggle } = useSelector((state) => state.inputBox)
  const [dummyState, setDummyState] = useState("")
  console.log(nickname)

  useEffect(() => {
    const localStorageName = localStorage.getItem('nickname');
    localStorageName ? dispatch(name(localStorageName)) : "";
  }, [])

  useEffect(() => {
    localStorage.setItem('nickname', dummyState)
  }, [dummyState])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(name(dummyState))
    setDummyState("")
    dispatch(setInputToggle())
  }



  return (
    <>
      <div className='flex flex-col text-left gap-3 bg-[#171717] z-[10] absolute left-[40%] top-[13rem] p-4 w-[20rem] shadow-lg text-[#f9f327]'>
        <div className='flex justify-between items-center'>
          <h1 >Nickname</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex items-end justify-between' >
          <input
            type="text"
            className={` w-[14rem] text-sm  border-b-1 border-dotted border-[#f9f327] h-9 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] focus-visible:outline-none`}
            placeholder="Cpt. Jack Sparrow"
            value={dummyState}
            onChange={(e) => setDummyState(e.target.value)}
          />
          <button type="submit" >
            <X size={20} />
          </button>
        </form>
      </div>
    </>
  )
}

export default InputBox

