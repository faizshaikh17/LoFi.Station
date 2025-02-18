import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentVideoId } from '../feature/playerSlice';

function Playlist() {
    const { videoNames } = useSelector((state) => state.player)
    const dispatch = useDispatch();
    const handleButton = (id) => {
        dispatch(setCurrentVideoId(id))
    }

    return (
        <>
            <div className='flex items-center justify-center bg-[#171717] z-[10] active:backdrop-blur-2xl absolute -right-5 flex-col bg-primary w-80  p-4 m-6 shadow-lg text-[#e5e6e6]' >
                {videoNames.map((name, index) => (
                    <button key={index} className='bg-[#00adb5] opacity-85 hover:bg-[#00adb5] hover:opacity-100 font-bold text-[#171717] text-sm w-[90%] bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-6 px-4 m-1'
                        onClick={() => handleButton(index)}
                    >
                        {name}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Playlist