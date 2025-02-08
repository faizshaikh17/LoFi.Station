import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialStatePlayer = {
    players: [{
        isPlaying: false,
        image: 1,
        volume: 100,
        loading: true,
        currentVideoId: 0,
        videoIds: [
            "POh92y6H2EqX9CR1",
            "Bi4XXeUjNeaNEMb1",
            "9Lmq-Z2FARKzcceP",
            "5akmckpaopOF7FTW",
            "oDTzhvy2IhXf9IoS",
            "LJmDeehWl3BuL9Sj",
            "jfj1WJHzC4LL5sG1",
            "ttcNaVqNLr9yNTBB",
            "T0tLCQlgMxyGQulz",
            "kcl0NBwH51QnkXq3",
        ],
        videoNames: [
            "Naruto-Chill Lofi",
            "Ghibli Piano",
            "Saitama's Sorrow",
            "Suzume Door",
            "Tragedy of Boy who sought Freedom",
            "Hokage's Funeral",
            "Chill Vibes Night",
            "Anime Lofi Hiphop",
            "You Say Run",
            "Fight Demons within you",
        ],
    }],
};

// Player slice
const playerSlice = createSlice({
    name: 'player',
    initialState: initialStatePlayer,
    reducers: {
        togglePlayPause: (state, action) => {
            isPlaying: !state.isPlaying
        },
        setVolume: (state, action) => {
            volume: state.volume
        },
        setImage: (state, action) => {
            image: Math.floor(Math.random() * 10) + 1
        },
        setVideo: (state, action) => {
            currentVideoId = Math.floor(Math.random() * 10) + 1
            const video = videoIds[currentVideoId]
            const nowPlaying = videoNames[currentVideoId]
        }

    },
});


export const { togglePlayPause,setVolume,setImage,setVideo } = playerSlice.actions
export default playerSlice.reducer;


// https://youtu.be/xmLszyYZdiw?si=POh92y6H2EqX9CR1
// https://youtu.be/HGl75kurxok?si=Bi4XXeUjNeaNEMb1
// https://youtu.be/8GpgadrMliU?si=9Lmq-Z2FARKzcceP
// https://youtu.be/Sia4qWv_reM?si=5akmckpaopOF7FTW
// https://youtu.be/XScfHk5CP0s?si=oDTzhvy2IhXf9IoS
// https://www.youtube.com/live/-pNJ0Z0Jzu8?si=LJmDeehWl3BuL9Sj
// https://youtu.be/A7uNvvAKsYU?si=jfj1WJHzC4LL5sG1
// https://youtu.be/7J54GyI18fU?si=ttcNaVqNLr9yNTBB
// https://youtu.be/3SDBTVcBUVs?si=T0tLCQlgMxyGQulz
// https://youtu.be/J43mZ3F92T4?si=kcl0NBwH51QnkXq3




{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Sia4qWv_reM?si=5akmckpaopOF7FTW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }