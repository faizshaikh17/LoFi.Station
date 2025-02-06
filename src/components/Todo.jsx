import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../feature/slice';

function Todo() {
    const [input, setInput] = useState("");
    const [isTodoEditable, setIsTodoEditable] = useState(null)

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)
    const todo = todos.map((todo) => { todo.id == isTodoEditable })
    const [todoCompleted, setTodoCompleted] = useState(null);

    const add = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }



    return (
        <>
            <div className='w-78 bg-[#171717] text-white border-2 h-68 '>
                <div className='text-center p-2 '>
                    <form onSubmit={add}
                        className=" flex justify-between" >
                        <input
                            type="text"
                            className={`bg-[#171717]  h-9 focus-visible:outline-none border-1  text-white m-1 px-4 `}
                            placeholder="Enter a Todo..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={!input}
                            className="text-black h-9  border-1 bg-[#c9c9c9]  px-4 m-1  hover:bg-[#c9c9c0]"
                        >
                            Add
                        </button>
                    </form>

                    <ul className="list-none text-black">
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <div className='flex justify-between items-center px-2'>
                                    <div className='flex items-center' >
                                        <checkbox

                                            type="checkbox"
                                            className='peer h-4 w-4 border focus-visible:outline-none text-white '
                                            onClick={() => {
                                                setTodoCompleted(todo.id)
                                                if (todoCompleted === todo.id) {
                                                    setTodoCompleted(null)
                                                }
                                            }
                                            }
                                        />

                                        <span className={`text-white p-2  ${todoCompleted === todo.id ? "line-through" : ""} `}>{todo.text}</span>
                                    </div>

                                    <div className=''>
                                        <button
                                            onClick={() => dispatch(deleteTodo(todo.id))}
                                        // className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
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
            </div>
        </>
    )
}

export default Todo