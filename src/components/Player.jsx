import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Play as playLogo } from 'lucide-react';
import { play } from '../feature/playerSlice'

function Player() {
    const dispatch = useDispatch();
    const [nowPlaying, setNowPlaying] = useState("");
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        const id = Math.floor(Math.random() * 10) + 1
        console.log(id)
        dispatch(play(id))
    }

    return (
        <div>
            <button
                type="submit"
                // disabled={!input}
                className="bg-[#73e7e7] text-black text-sm w-17 bg-center hover:bg-[#93e7e7] h-9 px-4 m-1"
                onClick={() => {
                    setIsPlaying((prev) => !prev)
                    handlePlay()
                }}
            >
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>

    )
}

export default Player