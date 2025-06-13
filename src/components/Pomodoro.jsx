import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { addTime, subTime, startTimer, pauseTimer, tick, reset } from '../feature/pomodoroSlice'

function Pomodoro() {
  const { workDuration, breakDuration, timeLeft, isRunning, isWorkInterval } = useSelector((state) => state.pomodoro)
  const dispatch = useDispatch();
  const intervalRef = useRef(null)
  const [btnVisible, setBtnVisible] = useState(false)
  const vref = useRef(null)

  const tickInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      dispatch(tick())
    }, 1000)
  }

  const handleStartTimer = () => {
    if (!isRunning) {
      dispatch(startTimer())
      tickInterval()
    } else {
      dispatch(pauseTimer())
      clearInterval(intervalRef.current)
    }
  }

  const handleAddTime = () => {
    if (!isRunning) {
      dispatch(addTime())
    }
  }

  const handleSubTime = () => {
    if (!isRunning) {
      dispatch(subTime())
    }
  }

  const handleReset = () => {
    clearInterval(intervalRef.current)
    dispatch(reset())
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  useEffect(() => {
    const onEnter = () => setBtnVisible(true)
    const onLeave = () => setBtnVisible(false)
    const pomo = vref.current
    pomo.addEventListener('mouseenter', onEnter)
    pomo.addEventListener('mouseleave', onLeave)
    return () => {
      pomo.removeEventListener('mouseenter', onEnter)
      pomo.removeEventListener('mouseleave', onLeave)
    }
  }, [btnVisible])

  return (
    <div
      ref={vref}
      className="z-10 text-white flex flex-col bg-primary items-center justify-center sm:w-80 w-full sm:rounded-md rounded-none p-4"
    >
      <div className="flex items-center justify-center gap-3">
        {btnVisible && (
          <ChevronLeft
            className="text-[#f9f327]"
            size={24}
            onClick={handleSubTime}
          />
        )}
        <h1 className="font-bold text-[#16abb3] text-[3rem] sm:text-[5rem]">
          {`${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`}
        </h1>
        {btnVisible && (
          <ChevronRight
            className="text-[#f9f327]"
            size={24}
            onClick={handleAddTime}
          />
        )}
      </div>
      <div className={`${btnVisible ? 'flex' : 'hidden'} flex-col sm:flex-row gap-4 sm:gap-6 mt-4`}>
        <button
          ref={intervalRef}
          className={`h-9 px-4 w-full sm:w-auto text-sm font-extrabold transition-colors bg-[#e5e6e6] text-[#171717] hover:bg-white bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer]`}
          onClick={handleStartTimer}
        >
          {!isRunning ? "Start" : "Pause"}
        </button>
        <button
          className="h-9 px-4 w-full sm:w-auto text-sm font-extrabold transition-colors bg-[#ff4433] text-[#171717] hover:bg-[#ff3131] bg-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer]"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Pomodoro
