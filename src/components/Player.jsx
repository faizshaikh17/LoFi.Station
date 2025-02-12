import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import Visualizer from './Visualizer'
import { togglePlayPause, setLoading, setVolume, nextVideo, previousVideo, setImage } from '../feature/playerSlice'
import { Headphones } from 'lucide-react'

function Player() {

    const dispatch = useDispatch();
    const playerRef = useRef(null);
    const preFetchRef = useRef(null);
    const { isPlaying, image, volume, currentVideoId, videoIds, loading } = useSelector((state) => (state.player))
    // console.log(isPlaying, volume, loading, currentVideoId)

    useEffect(() => {

        const script = document.createElement('script');
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true
        document.body.appendChild(script);

        return () => document.body.removeChild(script)

    }, [])

    const handleTogglePlayPause = () => {
        if (playerRef.current) {
            const iframeWindow = playerRef.current.contentWindow;
            if (iframeWindow) {
                const action = isPlaying ? "pauseVideo" : "playVideo";
                iframeWindow.postMessage(`{
                    "event":"command","func":"${action}","args":""}`, "*")
            }
        }
        dispatch(togglePlayPause());
    }

    const handleSetVolume = () => {
        if (playerRef.current) {
            const iframeWindow = playerRef.current.contentWindow
            if (iframeWindow) {
                iframeWindow.postMessage(`{
                    "event":"command","func":"${setVolume}","args":"${volume}"}`, "*")
            }
        }
    }

    const handleVideoChange = (direction) => {
        if (direction === "prev") {
            dispatch(previousVideo());
        } else {
            dispatch(nextVideo());
        }
        dispatch(setLoading(true));

        setTimeout(() => {
            if (playerRef.current) {
                const iframeWindow = playerRef.current.contentWindow
                if (iframeWindow) {
                    iframeWindow.postMessage(
                        `{"event": "command", "func": "playVideo", "args": ""}`, "*"
                    )
                    dispatch(setLoading(false));
                }
            }
            if (preFetchRef.current) {
                preFetchRef.current.src = ""
            }
        }, 1000)
    }

    const handlePrefetchVideo = () => {
        const nextId = currentVideoId === videoIds?.length - 1 ? 0 : currentVideoId + 1;
        if (preFetchRef.current) {
            preFetchRef.current.src = `https://www.youtube.com/embed/${videoIds[nextId]}?enablejsapi=1`;
        }
    }

    useEffect(() => {
        handlePrefetchVideo();
    }, [currentVideoId])


    return (
        <>
            <div className='flex items-end justify-start z-[5] fixed w-full h-[62rex]'>
                <div className='flex '>
                    <div className="video-responsive hidden">
                        {isPlaying && <iframe
                            ref={playerRef}
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${videoIds[currentVideoId]}?autoplay=1&enablejsapi=1;start=20`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={() => dispatch(setLoading(false))}
                            title="Embedded youtube"
                        />}
                    </div>
                    <div style={{ display: 'none' }} >
                        <iframe
                            ref={preFetchRef}
                            width="853"
                            height="480"
                            title="preFetch youtube"
                        />
                    </div>
                    <div className='flex space-x-2 px-5'>
                        <Visualizer />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#73e7e7] text-[#171717] text-sm w-17 bg-center hover:cursor-[url('src/assets/cursors/pointer.png'),_pointer] h-9 px-4 "
                            onClick={() => {
                                handleTogglePlayPause()
                            }}
                        >
                            {isPlaying ? "Pause" : "Play"}
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#171717] flex items-center justify-between hover:cursor-[url('src/assets/cursors/pointer.png'),_pointer] text-[#73e7e7] text-sm bg-bottom hover:bg-[#242525] h-9 px-2  w-44"
                        >
                            <Headphones size={22} />
                            <input className="custom-slider bg-[#171717] hover:cursor-[url('src/assets/cursors/pointer.png'),_pointer]" type="range"
                                disabled={loading}
                                onChange={(e) => {
                                    handleSetVolume()
                                    dispatch(setVolume(e.target.value))
                                }}
                            />
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#171717] hover:bg-[#242525] hover:cursor-[url('src/assets/cursors/pointer.png'),_pointer] text-[#73e7e7] text-sm w-25 bg-center  h-9 px-4 "
                            onClick={() => { handleVideoChange("prev"), dispatch(setImage()) }}
                        >
                            <span>{"<< Prev"}</span>
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#171717] hover:cursor-[url('src/assets/cursors/pointer.png'),_pointer] text-[#73e7e7] text-sm w-25 bg-center hover:bg-[#242525] h-9 px-4 "
                            onClick={() => { handleVideoChange("next"), dispatch(setImage()) }}
                        >
                            <span>{"Next >>"}</span>
                        </button>
                    </div>
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default Player