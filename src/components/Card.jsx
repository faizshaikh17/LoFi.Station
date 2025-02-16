import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import InputBox from './InputBox'

function Card() {
    const { videoNames, currentVideoId } = useSelector((state) => (state.player))
    const [nowPlaying, setNowPlaying] = useState("")
    const [time, setTime] = useState(null)
    const [inputToggle, setInputToggle] = useState(false)
    const [lightEffect, setLightEffect] = useState(false)
    const [name, setName] = useState("Spartan")

    useEffect(() => {
        setNowPlaying(videoNames[currentVideoId])
        setInterval(() => {
            const hours = (new Date(Date.now()).getHours()).toString().padStart("2", 0)
            const minutes = (new Date(Date.now()).getMinutes()).toString().padStart("2", 0)
            const seconds = (new Date(Date.now()).getSeconds()).toString().padStart("2", 0)
            setTime(`${hours}:${minutes}:${seconds}`)
            setLightEffect((prev) => !prev)
        }, 1000)

        const nickname = localStorage.getItem('nickname')
        if (nickname) {
            // setName(nickname)
        }
    }, [time, currentVideoId, name])


    return (
        <>
            <div className={`flex-col justify-items-start hover:cursor-[url(/assets/cursors/pointer.png),_pointer] text-[#73e7e7] `}>
                <h1 className='text-xl'>Now Playing: {nowPlaying}</h1>
                <h1 className='text-2xl h-[1.85rem]' >{time}</h1>
                <h1 className='flex items-center text-xl' onClick={() => setInputToggle((prev) => !prev)}>Make it happen<span className='ml-2.5 text-[#f9f327]'>{name}</span></h1>
                {inputToggle && <InputBox />}
            </div>
        </>

    )
}

export default Card