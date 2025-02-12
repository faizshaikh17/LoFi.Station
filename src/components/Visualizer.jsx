import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Visualizer() {
    const { isPlaying } = useSelector((state) => state.player)
    const [div1, setDiv1] = useState()
    const [div2, setDiv2] = useState(6)
    const [div3, setDiv3] = useState(6)

    useEffect(() => {
        if (isPlaying) {
            setInterval(() => {
                const a = Math.floor(Math.random() * 10) + 2
                const b = Math.floor(Math.random() * 10) + 6
                const c = Math.floor(Math.random() * 10) + 2
                setDiv1(a)
                setDiv2(b)
                setDiv3(c)
            }, 100)
        }
    }, [isPlaying])

    return (
        <div className='bg-[#171717] text-[#73e7e7] w-11  hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] hover:bg-[#222325] h-9 m-3 flex items-end justify-center overflow-hidden'>
            <div className={`h-${div1} w-2.5 mx-0.25 bg-[#73e7e7]`}></div>
            <div className={`h-${div2} w-2.5 mx-0.25 bg-[#73e7e7]`}></div>
            <div className={`h-${div3} w-2.5 mx-0.25 bg-[#73e7e7]`}></div>
        </div>
    )
}

export default Visualizer