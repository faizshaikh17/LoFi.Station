import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Visualizer() {
    const { isPlaying } = useSelector((state) => state.player);

    const [div1, setDiv1] = useState(6)
    const [div2, setDiv2] = useState(6)
    const [div3, setDiv3] = useState(6)


    if (isPlaying) {
        setInterval(() => {
            const a = Math.floor(Math.random() * 10) - 2
            const b = Math.floor(Math.random() * 10) - 1
            const c = Math.floor(Math.random() * 10) - 2
            setDiv1(a)
            setDiv2(b)
            setDiv3(c)
        }, 88)
    }


    return (
        <div className='  w-11  hover:cursor-[url(src/assets/cursors/pointer.png),_pointer]  h-9 flex items-end justify-center overflow-hidden'>
            <div className={`h-${div1 || 6} w-2.5 mx-0.25 transition-all bg-yellow-300`}></div>
            <div className={`h-${div2 || 6} w-2.5 mx-0.25 transition-all bg-yellow-300`}></div>
            <div className={`h-${div3 || 6} w-2.5 mx-0.25 transition-all bg-yellow-300`}></div>
        </div>
    )
}

export default Visualizer