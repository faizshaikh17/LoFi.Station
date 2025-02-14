import { createSlice } from '@reduxjs/toolkit'

const initialStatePlayer = {

    isPlaying: false,
    image: 1,
    volume: 50,
    loading: false,
    currentVideoId: 0,
    videoIds: [
        "8GpgadrMliU", // Saitama's Sorrow
        "HGl75kurxok", // Ghibli Piano
        "xmLszyYZdiw", // Naruto-Chill Lofi
        "Sia4qWv_reM", // Suzume Door
        "XScfHk5CP0s", // Tragedy of Boy who sought Freedom
        "bq7caidfUts", // Hokage's Funeral
        "A7uNvvAKsYU", // Chill Vibes Night
        "7J54GyI18fU", // Anime Lofi Hiphop
        "3SDBTVcBUVs", // You Say Run
        "J43mZ3F92T4", // Fight Demons within you
    ],
    videoNames: [
        "Saitama's Sorrow",
        "Ghibli Piano",
        "Naruto-Chill Lofi",
        "Suzume Door",
        "Tragedy of Boy who sought Freedom",
        "Tanjiro no Uta",
        "Chill Vibes Night",
        "Anime Lofi Hiphop",
        "You Say Run",
        "Fight Demons within you",
    ]

}

// Player slice
const playerSlice = createSlice({
    name: 'player',
    initialState: initialStatePlayer,
    reducers: {
        togglePlayPause: (state, action) => {
            state.isPlaying = !state.isPlaying
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
        previousVideo: (state) => {
            state.currentVideoId = state.currentVideoId === 0 ? state.videoIds.length - 1 : state.currentVideoId - 1;
            state.isPlaying = true
            // state.volume = 100
        },
        nextVideo: (state) => {
            state.currentVideoId = state.currentVideoId >= state.videoIds.length - 1 ? 0 : state.currentVideoId + 1;
            state.isPlaying = true
            // state.volume = 100
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setImage: (state, action) => {
            state.image = Math.floor(Math.random() * 10) + 1
        },
    },
});


export const { togglePlayPause, setLoading, setVolume, nextVideo, previousVideo, setImage } = playerSlice.actions
export default playerSlice.reducer;

// https://youtu.be/xmLszyYZdiw?si=POh92y6H2EqX9CR1
// https://youtu.be/HGl75kurxok?si=Bi4XXeUjNeaNEMb1
// https://youtu.be/8GpgadrMliU?si=9Lmq-Z2FARKzcceP
// https://youtu.be/Sia4qWv_reM?si=5akmckpaopOF7FTW
// https://youtu.be/XScfHk5CP0s?si=oDTzhvy2IhXf9IoS
// https://youtu.be/bq7caidfUts?si=NA08Ou1j2qYXLbAf
// https://youtu.be/A7uNvvAKsYU?si=jfj1WJHzC4LL5sG1
// https://youtu.be/7J54GyI18fU?si=ttcNaVqNLr9yNTBB
// https://youtu.be/3SDBTVcBUVs?si=T0tLCQlgMxyGQulz
// https://youtu.be/J43mZ3F92T4?si=kcl0NBwH51QnkXq3




{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Sia4qWv_reM?si=5akmckpaopOF7FTW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }