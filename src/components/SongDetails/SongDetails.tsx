import * as React from 'react';
import { connect } from 'react-redux';
import { Song } from '../../actions';
import { State } from '../../reducers';

interface SongDetailsProps {
  song: Song | null;
}

const SongDetails: React.FC<SongDetailsProps> = ({ song }) => {
  console.debug(song);
  return <div>SongDetails</div>;
};

const mapStateToProps = (state: State) => ({ song: state.selectedSong });

export default connect(mapStateToProps)(SongDetails);
