import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../feature/slice';

function Todo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos)
    const [todoCompleted, setTodoCompleted] = useState(null);

    const add = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <div className='flex bg-[#171717] z-[10] border-[#73e7e7] border-1 absolute -right-8 flex-col bg-primary w-80 items-center justify-center p-4 m-8 shadow-lg text-[#73e7e7] '>
                <form onSubmit={add} className=" flex justify-between" >
                    <input
                        type="text"
                        className={`bg-[#171717] text-sm h-9 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] focus-visible:outline-none border-[#73e7e7] border-1  text-[#73e7e7] m-1 px-4 `}
                        placeholder="Enter a Todo..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={!input}
                        className="bg-[#73e7e7] text-black text-sm hover:cursor-[url(/assets/cursors/pointer.png),_pointer] bg-center hover:bg-[#93e7e7] h-9 px-4 m-1"
                    >
                        Add
                    </button>
                </form>

                <ul className="space-y-2 h-48 overflow-y-auto w-full mt-4">
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <div className='flex justify-between items-center px-4'>
                                <div className='flex items-center' >
                                    <input
                                        type="checkbox"
                                        className='default:ring-4 h-4 w-4 hover:cursor-[url(/assets/cursors/pointer.png),_pointer] text-white '
                                        onClick={() => {
                                            setTodoCompleted(todo.id)
                                            if (todoCompleted === todo.id) {
                                                setTodoCompleted(null)
                                            }
                                        }}
                                    />

                                    <span className={`text-[#73e7e7] text-sm p-2 hover:cursor-[url(/assets/cursors/pointer.png),_pointer]  ${todoCompleted === todo.id ? "line-through" : ""} `}>{todo.text}</span>
                                </div>

                                <div className=''>
                                    <button
                                        onClick={() => dispatch(deleteTodo(todo.id))}
                                        className="px-2 h-9 hover:bg-[#73e7e7] hover:cursor-[url(/assets/cursors/pointer.png),_pointer]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 22 22"
                                            strokeWidth={1.5}
                                            stroke="red"
                                            className="w-5 h-5"
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