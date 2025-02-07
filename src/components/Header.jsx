import React, { useState } from 'react'
import { Clock, Github, List, Twitter } from "lucide-react";
import Todo from '../components/Todo'

function Header() {
    const [todotoggle, setTodoToggle] = useState(false)

    return (
        <div className='flex justify-between m-8  p-2'>
            <div>

            </div>
            <div className='flex justify-between text-[#c9c9c9] w-46'>
                <a className='' href="https://github.com/faizshaikh17/lofi-station">
                    <Github size={28} />
                </a>
                <a className='' href="https://x.com/iamfaizz17">
                    <Twitter size={28} />
                </a>
                <div className="relative ">
                    <Clock size={28} />
                </div>
                <div className="relative ">
                    <List size={28} onClick={() => (setTodoToggle((prev) => !prev))} />
                    {todotoggle && <Todo />}
                </div>
            </div>
        </div>
    )
}

export default Header