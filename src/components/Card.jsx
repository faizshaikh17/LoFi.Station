import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Card() {
    const { videoNames, currentVideoId } = useSelector((state) => (state.player))
    const [nowPlaying, setNowPlaying] = useState("")
    const [time, setTime] = useState(null)
    const [lightEffect, setLightEffect] = useState(false)

    useEffect(() => {
        setNowPlaying(videoNames[currentVideoId])

        setInterval(() => {
            const hours = (new Date(Date.now()).getHours()).toString().padStart("2", 0)
            const minutes = (new Date(Date.now()).getMinutes()).toString().padStart("2", 0)
            const seconds = (new Date(Date.now()).getSeconds()).toString().padStart("2", 0)
            setTime(`${hours}:${minutes}:${seconds}`)
            setLightEffect((prev) => !prev)
        }, 1000)
    }, [time, currentVideoId])

    return (
        <div className={`flex-col justify-items-start hover:cursor-[url(/assets/cursors/pointer.png),_pointer] text-[#73e7e7] `}>
            <h1 className='text-xl'>Now Playing: {nowPlaying}</h1>
            <h1 className='text-2xl' >{time}</h1>
            <h1 className='flex items-center text-xl'>Now or never,sweetheart.</h1>
        </div>
    )
}

export default Card