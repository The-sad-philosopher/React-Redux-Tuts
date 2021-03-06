export interface Song {
  title: string;
  duration: string;
}

export const selectSong = (song: Song) => ({
  type: 'SONG_SELECTED',
  payload: song,
});
