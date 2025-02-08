import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
// import { Play as playLogo } from 'lucide-react';
import { togglePlayPause, setVolume, setImage, setVideo } from '../feature/playerSlice'

function Player() {
    const dispatch = useDispatch();
    const [nowPlaying, setNowPlaying] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(100);
    const imageNumber = useSelector((state) => state.image)

    const handlePlay = () => {
        // const VideoId = Math.floor(Math.random() * 10) + 1
        // const currentVideoId = 0
        if (!isPlaying) {
            // console.log(currentVideoId)
            dispatch(togglePlayPause(isPlaying))
            dispatch(setVolume())
        }

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