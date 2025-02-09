import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
// import { Play as playLogo } from 'lucide-react';
import { togglePlayPause } from '../feature/playerSlice'

function Player() {
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying] = useState(false);
    const current = useSelector((state) => state.player.isPlaying)
    console.log(isPlaying)
    console.log(current)
    const handlePlay = () => {
        // const VideoId = Math.floor(Math.random() * 10) + 1
            dispatch(togglePlayPause(isPlaying))

    }

    return (
        <>
            <div className='flex  justify-between items-end'>
                <div className='flex items-end h-[55rex] p-4 px-20'>
                    <button
                        type="submit"
                        // disabled={!input}
                        className="bg-[#171717] text-[#73e7e7] text-sm w-17 bg-center hover:bg-[#222325] h-9 px-4 m-3"
                        onClick={() => {
                            setIsPlaying((prev) => !prev)
                            handlePlay()
                        }}
                    >
                        {isPlaying ? "Pause" : "Play"}
                    </button>

                    <button
                        type="submit"
                        // disabled={!input}
                        className="bg-[#171717] text-[#73e7e7] text-sm bg-bottom hover:bg-[#242525] h-9 px-4 m-3"
                    >
                        <input className='bg-[#171717]' type="range" name="" id="" />
                    </button>

                    <button
                        type="submit"
                        // disabled={!input}
                        className="bg-[#171717] text-[#73e7e7] text-sm w-25 bg-center hover:bg-[#93e7e7] h-9 px-4 m-3"
                    >
                        Prev
                    </button>

                    <button
                        type="submit"
                        // disabled={!input}
                        className="bg-[#171717] text-[#73e7e7] text-sm w-25 bg-center hover:bg-[#93e7e7] h-9 px-4 m-3"
                    >
                        Next
                    </button>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Player