import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../feature/todoSlice';

function Todo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos)
    const [todoCompleted, setTodoCompleted] = useState([]);
    const [message, setMessage] = useState(true)

    const add = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }

    const handleCheckbox = (id) => {
        setTodoCompleted(prev => prev.includes(id) ? prev.filter(todoId => todoId !== id) : [...prev, id])
    }


    return (
        <>
            <div className='flex items-center justify-center bg-[#171717] z-[10]  absolute -right-5 flex-col bg-primary w-80  p-4 m-6 shadow-lg text-[#e5e6e6] '>
                <form onSubmit={add} className="flex gap-3" >
                    <input
                        type="text"
                        className={` w-[12.5rem] text-sm border-b-1 border-[#00adb5] h-9 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] focus-visible:outline-none  text-[#e5e6e6] m-1 px-4 `}
                        placeholder="Enter a Todo..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={!input}
                        className="bg-[#00adb5] opacity-80 hover:opacity-100 text-black font-bold border-1  text-sm hover:cursor-[url(/assets/cursors/pointer.png),_pointer] bg-center  h-9 px-4 m-1"
                        onClick={() => setMessage(false)}
                    >
                        Add
                    </button>
                </form>

                <ul className="space-y-2 h-48 overflow-y-auto w-full mt-4">
                    {todos.length === 0 ? <h1 className='text-sm opacity-20'>No todos yet.</h1> : ""}

                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <div className='flex justify-between items-center px-4'>
                                <div className='flex items-center' >
                                    <input
                                        type="checkbox"
                                        className='custom-checkbox default:ring-4 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] text-white w-4 h-4 mr-2 '
                                        onChange={() => handleCheckbox(todo.id)}
                                        checked={todoCompleted.includes(todo.id)}
                                    />
                                    <span className={`text-[#f9f327] text-left text-sm p-2 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] ${todoCompleted.includes(todo.id) ? "line-through [text-decoration-color:red]" : ""}`}>{todo.text}</span>
                                </div>

                                <div className='flex items-center'>
                                    <button
                                        onClick={() => dispatch(deleteTodo(todo.id))}
                                        className="flex justify-center items-center h-7 w-7 hover:bg-[#e5e6e6] hover:cursor-[url(/assets/cursors/pointer.png),_pointer]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 22 22"
                                            strokeWidth={1.5}
                                            stroke="red"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul >
            </div>
        </>
    )
}

export default Todo