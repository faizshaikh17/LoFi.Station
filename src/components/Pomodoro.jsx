import React, { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, pauseTimer, tick, reset } from '../feature/pomodoroSlice'
function Pomodoro() {
  const { workDuration, breakDuration, timeLeft, isRunning, isWorkInterval } = useSelector((state) => state.pomodoro)
  const intervalRef = useRef(null)
  console.log(isRunning, timeLeft);

  const tickInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      dispatch(tick())
    }, 1000);
  }


  const dispatch = useDispatch();

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



  const minutes = Math.floor(timeLeft / 60)
  const seconds = (timeLeft % 60)

  return (
    <div className='flex bg-[#171717] z-[10] gap-2 border-[#73e7e7] text-[#e5e6e6] border-1 absolute -right-8 flex-col bg-primary w-50 items-center justify-center p-4 m-8 shadow-lg'>
      <div className='flex justify-around items-center gap-2'>
        <ChevronLeft />
        <h1 className='text-4xl'>{`${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`}</h1>
        <ChevronRight />
      </div>
      <div className='flex justify-between gap-4'>
        <button
          type="submit"
          ref={intervalRef}
          // disabled={loading}
          className="hover:bg-[#e5e6e6] border-1 border-[#e5e6e6]  hover:text-[#171717] text-sm w-17 bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-9 px-4 "
          onClick={() => { handleStartTimer() }}
        >
          {!isRunning ? "Start" : "Pause"}
        </button>
        <button
          type="submit"
          // disabled={loading}
          className="bg-[#ff4433] hover:bg-[#ff3131] text-sm w-17 bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-9 px-4 "
          onClick={() => { dispatch(reset()) }}
        >
          {"Reset"}
        </button>
      </div>
    </div>
  )
}

export default Pomodoro