import React, { useEffect, useState } from 'react'

function InputBox() {
  const [name, setName] = useState()
  useEffect(() => {
    localStorage.setItem('nickname', JSON.stringify(name))
  }, [name])
  return (
    <div className='flex flex-col text-left bg-[#171717] z-[10] absolute left-[40%] top-[13rem] w-80 p-4 shadow-lg text-[#f9f327]'>
      <h1 className='mx-2'>Nickname</h1>
      <input
        type="text"
        className={` w-[12.5rem] text-sm  border-b-1  border-dotted border-[#f9f327] h-9 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] focus-visible:outline-none  mx-2 my-2`}
        placeholder="Enter a Todo..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      // onSubmit={() => ()}  // have to use dispatch so can send the status to Card
      />
    </div>
  )
}

export default InputBox