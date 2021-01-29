import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';

interface SongListProps {
  songs: State['songs'];
}

class SongList extends React.Component<SongListProps> {
  renderList() {
    const { songs } = this.props;
    return songs.map((song) => (
      <Text
        key={song.title}
        color="gray.400"
        mt="1rem"
        fontSize="md"
        cursor="pointer"
        _hover={{ color: 'gray.200' }}
      >
        {song.title}
      </Text>
    ));
  }

  render() {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        w="full"
        direction="column"
      >
        <Text fontSize="4xl" mb="1rem">
          Songs
        </Text>
        {this.renderList()}
      </Flex>
    );
  }
}

const mapStateToProps = (state: State) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
