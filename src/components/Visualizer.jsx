import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Visualizer() {
    const { isPlaying } = useSelector((state) => state.player);

    const [div1, setDiv1] = useState();
    const [div2, setDiv2] = useState();
    const [div3, setDiv3] = useState();

    useEffect(() => {
        let interval;

        if (isPlaying) {
            interval = setInterval(() => {
                const a = Math.floor(Math.random() * 10) + 1;
                const b = Math.floor(Math.random() * 10) + 1;
                const c = Math.floor(Math.random() * 10) + 1;
                setDiv1(a);
                setDiv2(b);
                setDiv3(c);
            }, 300);
        } else {
            setDiv1(3);
            setDiv2(3);
            setDiv3(3);
        }

        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className='w-11 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-9 flex items-end justify-center overflow-hidden'>
            <div
                style={{ height: `${div1 * 10}%`, transition: 'height 0.1s ease-in-out' }}
                className='w-2.5 mx-0.25 bg-[#00adb5]'
            ></div>
            <div
                style={{ height: `${div2 * 10}%`, transition: 'height 0.1s ease-in-out' }}
                className='w-2.5 mx-0.25 bg-[#00adb5]'
            ></div>
            <div
                style={{ height: `${div3 * 10}%`, transition: 'height 0.1s ease-in-out' }}
                className='w-2.5 mx-0.25 bg-[#00adb5]'
            ></div>
        </div>
    );
}

export default Visualizer;