import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import Visualizer from './Visualizer'
import { togglePlayPause, setLoading, setVolume, nextVideo, previousVideo, setImage } from '../feature/playerSlice'
import { Headphones, Maximize2 } from 'lucide-react'

function Player() {
  const dispatch = useDispatch()
  const playerRef = useRef(null)
  const preFetchRef = useRef(null)
  const { isPlaying, volume, currentVideoId, videoIds, loading } = useSelector((state) => state.player)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  const handleTogglePlayPause = () => {
    if (playerRef.current) {
      const iframeWindow = playerRef.current.contentWindow
      if (iframeWindow) {
        const action = isPlaying ? 'pauseVideo' : 'playVideo'
        iframeWindow.postMessage(`{"event":"command","func":"${action}","args":""}`, '*')
      }
    }
    dispatch(togglePlayPause())
  }

  const handleSetVolume = () => {
    if (playerRef.current) {
      const iframeWindow = playerRef.current.contentWindow
      if (iframeWindow) {
        iframeWindow.postMessage(`{"event":"command","func":"setVolume","args":[${volume}]}`, '*')
      }
    }
  }

  const handleVideoChange = (direction) => {
    if (direction === 'prev') {
      dispatch(previousVideo())
    } else {
      dispatch(nextVideo())
    }
    dispatch(setLoading(true))
    setTimeout(() => {
      if (playerRef.current) {
        const iframeWindow = playerRef.current.contentWindow
        if (iframeWindow) {
          iframeWindow.postMessage(`{"event": "command", "func": "playVideo", "args": ""}`, '*')
          dispatch(setLoading(false))
        }
      }
      if (preFetchRef.current) {
        preFetchRef.current.src = ''
      }
    }, 1000)
  }

  const handlePrefetchVideo = () => {
    const nextId = currentVideoId === videoIds?.length - 1 ? 0 : currentVideoId + 1
    if (preFetchRef.current) {
      preFetchRef.current.src = `https://www.youtube.com/embed/${videoIds[nextId]}?enablejsapi=1`
    }
  }

  useEffect(() => {
    handlePrefetchVideo()
  }, [currentVideoId])

  const [screenToggle, setScreenToggle] = useState(false)

  const handleFullScreen = () => {
    !screenToggle
      ? document.getElementById('fullScreen').requestFullscreen()
      : document.exitFullscreen()
  }

  return (
    <>
      <div className='absolute bottom-2 z-[15] w-full px-4'>
        <div className='flex flex-col sm:flex-row sm:items-center justify-start sm:justify-between'>
          <div className='hidden'>
            <iframe
              ref={playerRef}
              width='853'
              height='480'
              src={`https://www.youtube.com/embed/${videoIds[currentVideoId]}?autoplay=1&enablejsapi=1;start=10`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              onLoad={() => dispatch(setLoading(false))}
              title='Embedded youtube'
            />
          </div>
          <div style={{ display: 'none' }}>
            <iframe ref={preFetchRef} width='853' height='480' title='preFetch youtube' />
          </div>

          <div className='flex flex-col sm:flex-row flex-wrap items-start mb-8 gap-3 sm:gap-4 my-3 sm:my-0 w-full justify-center sm:justify-start px-3 sm:px-5'>
  <Visualizer />

  <button
    type='submit'
    disabled={loading}
    className='bg-[#00adb5] hover:bg-[#00d5e0] text-[#171717] font-bold text-sm w-16 sm:w-20 h-9 px-3 sm:px-4 transition-colors hover:cursor-[url(/assets/cursors/pointer.png),_pointer]'
    onClick={handleTogglePlayPause}
  >
    {isPlaying ? 'Pause' : 'Play'}
  </button>

  <button
    disabled={loading}
    className='bg-[#171717] text-[#00adb5] font-bold text-sm w-10 h-9 px-2 hover:bg-[#242525] text-center hover:cursor-[url(/assets/cursors/pointer.png),_pointer]'
    onClick={() => {
      setScreenToggle((prev) => !prev)
      handleFullScreen()
    }}
  >
    <Maximize2 size={24} />
  </button>

  <button
    type='submit'
    disabled={loading}
    className='bg-[#171717] flex items-center gap-2 text-[#00adb5] font-bold text-sm w-full sm:w-44 h-9 px-3 sm:px-2 hover:bg-[#242525] hover:cursor-[url(/assets/cursors/pointer.png),_pointer]'
  >
    <Headphones size={24} />
    <input
      className='w-full custom-slider bg-[#171717] hover:cursor-[url(/assets/cursors/pointer.png),_pointer]'
      type='range'
      disabled={loading}
      onChange={(e) => {
        dispatch(setVolume(e.target.value))
        handleSetVolume()
      }}
    />
  </button>

  <button
    type='submit'
    disabled={loading}
    className='bg-[#171717] text-[#00adb5] font-bold text-sm w-24 h-9 px-3 sm:px-4 hover:bg-[#242525] hover:cursor-[url(/assets/cursors/pointer.png),_pointer]'
    onClick={() => {
      handleVideoChange('prev')
      dispatch(setImage())
    }}
  >
    {'<< Prev'}
  </button>

  <button
    type='submit'
    disabled={loading}
    className='bg-[#171717] text-[#00adb5] font-bold text-sm w-24 h-9 px-3 sm:px-4 hover:bg-[#242525] hover:cursor-[url(/assets/cursors/pointer.png),_pointer]'
    onClick={() => {
      handleVideoChange('next')
      dispatch(setImage())
    }}
  >
    {'Next >>'}
  </button>
</div>

        </div>
      </div>
    </>
  )
}

export default Player
