
import React, { useState } from 'react'
import { Clock, Github, List, Twitter } from "lucide-react";
import Todo from '../components/Todo'
import Card from './Card';

function Header() {
    const [todotoggle, setTodoToggle] = useState(false)

    return (
        <header className='flex justify-between m-8 p-2'>
            <Card />
            {/* text-[#FFFC01] */}
            <div className='flex justify-between  text-[#73e7e7] w-35'>
                <a className='hover:cursor-[url(src/assets/cursors/pointer.png),_pointer]' href="https://github.com/faizshaikh17/lofi-station">
                    <Github size={25} />
                </a>
                <a className='hover:cursor-[url(src/assets/cursors/pointer.png),_pointer]' href="https://x.com/iamfaizz17">
                    <Twitter size={25} />
                </a>
                <div className="relative hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] ">
                    <Clock size={25} />
                </div>
                <div className="relative hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] ">
                    <List size={25} onClick={() => (setTodoToggle((prev) => !prev))} />
                    {todotoggle && <Todo />}
                </div>
            </div>
        </header>
    )
}

export default Header
