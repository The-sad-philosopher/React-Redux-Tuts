import { combineReducers } from 'redux';
import { Song } from '../actions';

interface SelectedSongAction {
  type: 'SONG_SELECTED';
  payload: Song;
}

export interface State {
  songs: Song[];
  selectedSong: Song | null;
}

const songsReducer = () => {
  return [
    { title: 'Let Me Down', duration: '4:05' },
    { title: 'Jesus in LA', duration: '3:20' },
    { title: 'All Star', duration: '4:10' },
    { title: 'One Love', duration: '3:36' },
  ];
};

const selectedSongReducer = (
  selectedSong: State['selectedSong'] = null,
  action: SelectedSongAction
) => {
  return action.type === 'SONG_SELECTED' ? action.payload : selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
