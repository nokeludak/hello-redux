import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Yesterday', duration: '2:05' },
        { title: 'Hey Yude', duration: '8:09' },
        { title: 'A Hard Day\'s Night', duration: '2:38' },
        { title: 'Lucy in the Sky', duration: '3:28' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
   if (action.type === 'SONG_SELECTED') return action.payload;
   return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
