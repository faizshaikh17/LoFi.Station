import React, { useState } from 'react'
import { Clock, Github, List, Twitter } from "lucide-react";
import Todo from '../components/Todo'

function Header() {
    const [todotoggle, setTodoToggle] = useState(false)

    return (
        <div className='flex justify-between'>
            <div>

            </div>
            <div className='flex'>
                <a href="https://github.com/faizshaikh17/lofi-station">
                    <Github size={24} />
                </a>
                <a href="https://x.com/iamfaizz17">
                    <Twitter size={24} />
                </a>
                <div className="relative">
                    <List onClick={() => (setTodoToggle((prev) => !prev))} />
                    {todotoggle && <Todo />}
                </div>
            </div>
        </div>
    )
}

export default Header