import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Visualizer() {
    const { isPlaying } = useSelector((state) => state.player);

    const [div1, setDiv1] = useState(4); // Initial height
    const [div2, setDiv2] = useState(5); // Initial height
    const [div3, setDiv3] = useState(4); // Initial height

    useEffect(() => {
        let interval;

        if (isPlaying) {
            interval = setInterval(() => {
                const a = Math.floor(Math.random() * 10) + 1; // Random height between 1 and 10
                const b = Math.floor(Math.random() * 10) + 1; // Random height between 1 and 10
                const c = Math.floor(Math.random() * 10) + 1; // Random height between 1 and 10
                setDiv1(a);
                setDiv2(b);
                setDiv3(c);
            }, 300); // Update every 300ms
        } else {
            // Reset heights when not playing
            setDiv1(5);
            setDiv2(5);
            setDiv3(5);
        }

        // Cleanup interval on unmount or when isPlaying changes
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className='w-11 hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] h-9 flex items-end justify-center overflow-hidden'>
            <div
                style={{ height: `${div1 * 10}%`, transition: 'height 0.1s ease-in-out' }}
                className='w-2.5 mx-0.25 bg-[#73e7e7]'
            ></div>
            <div
                style={{ height: `${div2 * 10}%`, transition: 'height 0.1s ease-in-out' }}
                className='w-2.5 mx-0.25 bg-[#73e7e7]'
            ></div>
            <div
                style={{ height: `${div3 * 10}%`, transition: 'height 0.1s ease-in-out' }}
                className='w-2.5 mx-0.25 bg-[#73e7e7]'
            ></div>
        </div>
    );
}

export default Visualizer;