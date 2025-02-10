import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import { togglePlayPause, setLoading, setVolume, nextVideo, previousVideo } from '../feature/playerSlice'

function Player() {

    const dispatch = useDispatch();
    const playerRef = useRef(null);
    const preFetchRef = useRef(null);
    const { isPlaying, image, volume, currentVideoId, videoIds } = useSelector((state) => (state.player))
    console.log(isPlaying, volume)

    useEffect(() => {

        const script = document.createElement('script');
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true
        document.body.appendChild(script)

        return () => document.body.removeChild(script)
    }, []);



    // Play/Pause toggle func 
    const handleTogglePlayPause = () => {
        if (playerRef.current) {
            const iframe = playerRef.current.contentWindow;
            if (iframe) {
                const action = isPlaying ? "pauseVideo" : "playVideo"
                iframe.postMessage(
                    `{"event":"command","func":"${action}","args":""}`,
                    "*"
                );
            }
        }
        dispatch(togglePlayPause())
    }

    const handleSetVolume = () => {
        if (playerRef.current) {
            const iframe = playerRef.current.contentWindow;
            if (iframe) {
                iframe.postMessage(
                    `{"event":"command","func":"${volume}","args":""}`,
                    "*"
                );
            }
        }
        dispatch(setVolume())
    }

    

    return (
        <>
            <div className='flex  justify-between items-end'>
                {/* <div className="video-responsive hidden">
                    <iframe
                        // ref={playerRef}
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/${id}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setLoading(false)}
                        title="Embedded youtube"
                    />
                </div> */}
                <div className='flex items-end  p-4 px-20'>
                    <button
                        type="submit"
                        // disabled={!input}
                        className="bg-[#171717] text-[#73e7e7] text-sm w-17 bg-center hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] hover:bg-[#222325] h-9 px-4 m-3"
                        onClick={() => {
                            handleTogglePlayPause()
                        }}
                    >
                        {isPlaying ? "Pause" : "Play"}
                    </button>

                    <button
                        type="submit"
                        // disabled={!input}
                        className="bg-[#171717] hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] text-[#73e7e7] text-sm bg-bottom hover:bg-[#242525] h-9 px-4 m-3"
                    >
                        <input className='bg-[#171717] hover:cursor-[url(src/assets/cursors/pointer.png),_pointer]' type="range"
                            onChange={(e) => {
                                handleSetVolume()
                                dispatch(setVolume(e.target.value))
                            }}
                        />
                    </button>

                    <button
                        type="submit"
                        // disabled={!input}
                        className="bg-[#171717] hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] text-[#73e7e7] text-sm w-25 bg-center hover:bg-[#93e7e7] h-9 px-4 m-3"
                    >
                        <span>{"<< Prev"}</span>
                    </button>

                    <button
                        type="submit"
                        // disabled={!input}
                        className="bg-[#171717] hover:cursor-[url(src/assets/cursors/pointer.png),_pointer] text-[#73e7e7] text-sm w-25 bg-center hover:bg-[#93e7e7] h-9 px-4 m-3"
                    >
                        <span>{"Next >>"}</span>
                    </button>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Player