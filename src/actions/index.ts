interface Song {
  title: string;
  duration: string;
}

export const selectSong = (song: Song) => ({
  type: 'SELECT_SONG',
  payload: song,
});
