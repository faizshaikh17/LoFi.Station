import React, { useEffect, useState } from 'react'
import { Clock, Github, List, Twitter, Maximize2 } from "lucide-react";
import Todo from '../components/Todo'
import Pomodoro from './Pomodoro';
import Card from './Card';

function Header() {
    const [todotoggle, setTodoToggle] = useState(false)
    const [pomodoroToggle, setPomodoroToggle] = useState(false)
    const [screenToggle, setScreenToggle] = useState(false)

    const handleFullScreen = () => {
        !screenToggle ? document.getElementById("fullScreen").requestFullscreen() : document.exitFullscreen();
    }


    return (
        <header className='flex flex-wrap justify-between m-8 p-2'>
            <Card />
            <div className=''>
                <div className='flex justify-between items-center text-[#00adb5] w-45'>
                    <div className="relative hover:cursor-[url(/assets/cursors/pointer.png),_pointer] ">
                        <Maximize2 size={22} onClick={() => (setScreenToggle((prev) => !prev), handleFullScreen())} />
                    </div>
                    <a className='hover:cursor-[url(/assets/cursors/pointer.png),_pointer]' href="https://github.com/faizshaikh17/lofi-station" target="_blank">
                        <Github size={24} />
                    </a>
                    <a className='hover:cursor-[url(/assets/cursors/pointer.png),_pointer]' href="https://x.com/iamfaizz17" target="_blank">
                        <Twitter size={24} />
                    </a>
                    <div className="relative hover:cursor-[url(/assets/cursors/pointer.png),_pointer] ">
                        <Clock size={24} onClick={() => (setPomodoroToggle((prev) => !prev), setTodoToggle(false))} />
                        {pomodoroToggle && <Pomodoro />}
                    </div>
                    <div className="relative hover:cursor-[url(/assets/cursors/pointer.png),_pointer] ">
                        <List size={25} onClick={() => (setTodoToggle((prev) => !prev), setPomodoroToggle(false))} />
                        {todotoggle && <Todo />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header