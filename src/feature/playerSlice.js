import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialStatePlayer = {
    players: [{
        isPlaying: false,
        image: 1,
        volume: 80,
        loading: true,
        currentVideoId: 0,
        videoIds: [
            "xmLszyYZdiw?si=POh92y6H2EqX9CR1",
            "HGl75kurxok?si=Bi4XXeUjNeaNEMb1",
            "8GpgadrMliU?si=9Lmq-Z2FARKzcceP",
            "Sia4qWv_reM?si=5akmckpaopOF7FTW",
            "XScfHk5CP0s?si=oDTzhvy2IhXf9IoS",
            "bq7caidfUts?si=NA08Ou1j2qYXLbAf",
            "A7uNvvAKsYU?si=jfj1WJHzC4LL5sG1",
            "7J54GyI18fU?si=ttcNaVqNLr9yNTBB",
            "3SDBTVcBUVs?si=T0tLCQlgMxyGQulz",
            "J43mZ3F92T4?si=kcl0NBwH51QnkXq3",
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
            state.isPlaying = !action.payload
        },
        setPlaying: (state, action) => { state.isPlaying },
        setVolume: (state, action) => {
            state.volume = action.payload
        },
        setImage: (state, action) => {
            do {
                const newImage = Math.floor(Math.random() * 10) + 1
            } while (newImage === state.image) {
                return { image: newImage };
            }
        },
        nextVideo: () => { },
        setVideo: () => { },
        previousVideo: () => { },
        setLoading: () => { },
        applyVolumeToPlayer: () => { }
    },
});


export const { togglePlayPause, setPlaying, setImage } = playerSlice.actions
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