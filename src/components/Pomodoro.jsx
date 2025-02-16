import React, { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { addTime, subTime, startTimer, pauseTimer, tick, reset } from '../feature/pomodoroSlice'
function Pomodoro() {
  const { workDuration, breakDuration, timeLeft, isRunning, isWorkInterval } = useSelector((state) => state.pomodoro)
  const dispatch = useDispatch();
  const intervalRef = useRef(null)

  const tickInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      dispatch(tick())
    }, 1000);
  }

  const handleStartTimer = () => {
    if (!isRunning) {
      dispatch(startTimer())
      tickInterval();
    }
    else {
      dispatch(pauseTimer());
      clearInterval(intervalRef.current)
    }
  }

  const handleAddTime = () => {
    if (!isRunning) {
      dispatch(addTime());
    }
  }

  const handleSubTime = () => {
    if (!isRunning) {
      dispatch(subTime());
    }
  }

  const handleReset = () => {
    clearInterval(intervalRef.current)
    dispatch(reset())
  }



  const minutes = Math.floor(timeLeft / 60)
  const seconds = (timeLeft % 60)

  return (
    <div className='flex bg-[#171717] z-[10] font-mono  text-white absolute -right-15 flex-col bg-primary w-55 items-center justify-center m-6 shadow-lg gap-1'>
      <div className='flex justify-center items-center gap-3'>
        <ChevronLeft size={20} onClick={() => handleSubTime()} />
        <h1 className='text-[2.7rem] font-bold'>{`${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`}</h1>
        <ChevronRight size={20} onClick={() => handleAddTime()} />
      </div>
      <div className='flex items-center gap-5 mb-4'>
        <button
          type="submit"
          ref={intervalRef}
          // disabled={loading}
          className={`hover:bg-[#e5e6e6] border-1 border-[#e5e6e6] font-extrabold hover:text-[#171717] text-sm w-18 bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-9 px-4 ${isRunning ? 'bg-[#e5e6e6] text-[#171717]' : ""} `}
          onClick={() => handleStartTimer()}
        >
          {!isRunning ? "Start" : "Pause"}
        </button>
        <button
          type="submit"
          // disabled={loading}
          className="bg-[#ff4433] hover:bg-[#ff3131] font-extrabold text-[#171717] text-sm w-18 bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-9 px-4 "
          onClick={() => handleReset()}
        >
          {"Reset"}
        </button>
      </div>
    </div>
  )
}

export default Pomodoro