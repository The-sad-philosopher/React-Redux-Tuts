import { combineReducers } from 'redux';
interface Song {
  title: string;
  duration: string;
}

interface SelectSongAction {
  type: 'SELECT_SONG';
  payload: Song;
}

const songsReducer = () => {
  return [
    { title: 'Let Me Down', duration: '4:05' },
    { title: 'Jesus in LA', duration: '3:20' },
    { title: 'All Star', duration: '4:10' },
    { title: 'One Love', duration: '3:36' },
  ];
};

const selectSongReducer = (
  selectedSong: Song | null = null,
  action: SelectSongAction
) => {
  return action.type === 'SELECT_SONG' ? action.payload : selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
