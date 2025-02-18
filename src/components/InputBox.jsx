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
    if (dummyState !== "") {
      localStorage.setItem('nickname', dummyState)
    }
  }, [dummyState])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(name(dummyState))
    setDummyState("")
    dispatch(setInputToggle())
  }

  return (
    <>
      <div className='flex flex-col text-left justify-between bg-[#171717] z-[10] absolute left-[40%] top-[13rem] p-5 w-[24rem] h-[10rem] shadow-lg text-[#f9f327]'>
        <div className=''>
          <h1 >Nickname</h1>
          <h1 className='text-sm opacity-70' >"Bruce Wayne (or your superhero alias)"</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex items-end justify-between mb-1' >
          <input
            type="text"
            className={` w-[12rem] text-base  border-b-1 border-dotted border-[#f9f327] h-7 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] focus-visible:outline-none px-1`}
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

