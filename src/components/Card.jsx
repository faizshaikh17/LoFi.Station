import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputBox from './InputBox'
import { name, setInputToggle } from '../feature/inputBoxSlice'

function Card() {
    const dispatch = useDispatch()
    const { videoNames, currentVideoId } = useSelector((state) => (state.player))
    const { nickname, inputToggle } = useSelector((state) => state.inputBox)
    const [nowPlaying, setNowPlaying] = useState("")
    const [time, setTime] = useState(null)
    // const [lightEffect, setLightEffect] = useState(false)

    const handleInputToggle = () => {
        dispatch(setInputToggle())
    }

    useEffect(() => {
        setNowPlaying(videoNames[currentVideoId])
        setInterval(() => {
            const hours = (new Date(Date.now()).getHours()).toString().padStart("2", 0)
            const minutes = (new Date(Date.now()).getMinutes()).toString().padStart("2", 0)
            const seconds = (new Date(Date.now()).getSeconds()).toString().padStart("2", 0)
            setTime(`${hours}:${minutes}:${seconds}`)
            // setLightEffect((prev) => !prev)
        }, 1000)
    }, [time, currentVideoId])

    return (
        <>
            <div className={`flex-col text-left justify-items-start hover:cursor-[url(/assets/cursors/pointer.png),_pointer] text-[#00adb5] `}>
                <h1 className='text-xl'>Now Playing: {nowPlaying}</h1>
                <h1 className='text-2xl h-[1.85rem]' >{time}</h1>
                <h1 className='flex items-center text-xl' onClick={() => handleInputToggle()}>Make it happen<span className='ml-2.5 text-[#f9f327]'>{nickname}.</span></h1>
                {inputToggle && <InputBox />}
            </div>
        </>

    )
}

export default Card