import React, { useState } from 'react'
import { Clock, Github, List, Twitter } from "lucide-react";
import Todo from '../components/Todo'
import Card from './Card';

function Header() {
    const [todotoggle, setTodoToggle] = useState(false)

    return (
        <div className='flex justify-between m-8   p-2'>
            <Card />
            {/* text-[#FFFC01] */}
            <div className='flex justify-between  text-[#73e7e7] w-46'>
                <a className='' href="https://github.com/faizshaikh17/lofi-station">
                    <Github size={26} />
                </a>
                <a className='' href="https://x.com/iamfaizz17">
                    <Twitter size={26} />
                </a>
                <div className="relative ">
                    <Clock size={26} />
                </div>
                <div className="relative ">
                    <List size={26} onClick={() => (setTodoToggle((prev) => !prev))} />
                    {todotoggle && <Todo />}
                </div>
            </div>
        </div>
    )
}

export default Header