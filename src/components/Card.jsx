import React, { useState, useEffect } from 'react'

function Card() {
    const [nowPlaying, setNowPlaying] = useState([])
    const [time, setTime] = useState(null)
    const [lightEffect, setLightEffect] = useState(false)

    useEffect(() => {
        setInterval(() => {

            const hours = (new Date(Date.now()).getHours()).toString().padStart("2", 0)
            const minutes = (new Date(Date.now()).getMinutes()).toString().padStart("2", 0)
            setTime(`${hours}:${minutes}`)

            setLightEffect((prev) => !prev)

        }
            , 1000)
    }, [time])

    // ${lightEffect ? "text-[#FFFC01]" : "text-[#73E7F7]"}

    return (
        <div className={`flex-col justify-items-start space-y-3 hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] text-[#73e7e7] `}>
            <h1 className='text-xl'>Now Playing: {nowPlaying}</h1>
            <h1 className='text-4xl' >{time} </h1>
            <h1 className='flex items-center text-2xl'>Now or never,buddy</h1>
        </div>
    )
}

export default Card