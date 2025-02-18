import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentVideoId } from '../feature/playerSlice';
import { X } from 'lucide-react'; // Import close icon

function Playlist({ onClose }) {
    const { videoNames, currentVideoId } = useSelector((state) => state.player);
    const dispatch = useDispatch();

    const handleButton = (id) => {
        dispatch(setCurrentVideoId(id));
        // onClose(); // Close playlist after selecting a video
    };

    return (
        <>
            {/* Transparent Overlay */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-[url(/assets/cursors/pointer.png),_pointer]"
            // onClick={onClose}
            />

            {/* Playlist Container */}
            <div className="fixed cursor-[url(/assets/cursors/default.png),auto]  inset-y-0 right-0 w-full max-w-md z-50 transition-transform duration-300 translate-x-0">
                <div className="h-full bg-black/85 backdrop-blur-xl border-l border-[#00adb5]/30 py-4 px-6 shadow-2xl">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-[#00adb5]">Playlist</h2>
                        <button
                            onClick={onClose}
                            className="text-[#00adb5] hover:text-[#00d5e0] transition-colors p-2"
                        >
                            <X className='hover:cursor-[url(/assets/cursors/pointer.png),_pointer]' size={24} />
                        </button>
                    </div>

                    {/* Playlist Items */}
                    <div className="space-y-3 overflow-y-auto h-[calc(100%-1rem)]">
                        {videoNames.map((name, index) => (
                            <button
                                key={index}
                                className={`w-full hover:cursor-[url(/assets/cursors/pointer.png),_pointer]  p-3 text-left text-base flex items-center text-[#e5e6e6] bg-[#00adb5]/10 hover:bg-[#00adb5]/20 transition-all rounded-lg group`}
                                onClick={() => handleButton(index)}
                            >
                                <span className="text-[#00adb5]/80 mr-3 font-mono">
                                    {(index + 1).toString().padStart(2, '0')}.
                                </span>
                                <span className={`${currentVideoId === index ? "text-[#00adb5] opacity-100" : ""} truncate flex-1`}>
                                    {name}
                                </span>
                                <div className="ml-2 w-2 h-2 bg-[#00adb5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Playlist;




// className={`bg-[#00adb5] ${currentVideoId === index ? "bg-[#00adb5] opacity-100" : ""}  flex justify-start items-center opacity-50 hover:bg-[#00adb5] hover:opacity-100 font-bold text-[#171717] text-base w-[90%] hover:cursor-[url(/assets/cursors/pointer.png),_pointer] h-6 p-4 m-1`}