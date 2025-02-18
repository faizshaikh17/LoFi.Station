import React, { useEffect, useState } from 'react'
import { Clock, Github, List, Twitter } from "lucide-react";
import Todo from '../components/Todo'
import Pomodoro from './Pomodoro';
import Card from './Card';

function Header() {
    const [todotoggle, setTodoToggle] = useState(false)
    const [pomodoroToggle, setPomodoroToggle] = useState(false)


    return (
        <header className='flex flex-wrap justify-between m-8 p-2'>
            <Card />
            <div className=''>
                <div className='flex justify-between items-center w-38'>
                    <a className='text-[#00adb5] hover:text-[#00d5e0] transition-colors hover:cursor-[url(/assets/cursors/pointer.png),_pointer]' href="https://github.com/faizshaikh17/lofi-station" target="_blank">
                        <Github size={24} />
                    </a>
                    <a className='text-[#00adb5] hover:text-[#00d5e0] transition-colors hover:cursor-[url(/assets/cursors/pointer.png),_pointer]' href="https://x.com/iamfaizz17" target="_blank">
                        <Twitter size={24} />
                    </a>
                    <div className="text-[#00adb5] hover:text-[#00d5e0] transition-colors relative hover:cursor-[url(/assets/cursors/pointer.png),_pointer] ">
                        <Clock size={24} onClick={() => (setPomodoroToggle((prev) => !prev), setTodoToggle(false))} />
                        {pomodoroToggle && <Pomodoro />}
                    </div>
                    <div className="text-[#00adb5] hover:text-[#00d5e0] transition-colors relative hover:cursor-[url(/assets/cursors/pointer.png),_pointer] ">
                        <List size={24} onClick={() => (setTodoToggle((prev) => !prev), setPomodoroToggle(false))} />
                        {todotoggle && <Todo />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header