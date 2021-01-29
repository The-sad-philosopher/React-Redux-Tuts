import * as React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { GiMusicalNotes } from 'react-icons/gi';
import { connect } from 'react-redux';
import { Song } from '../../actions';
import { State } from '../../reducers';

interface SongDetailsProps {
  song: Song | null;
}

const SongDetails: React.FC<SongDetailsProps> = ({ song }) => {
  const details =
    song != null ? (
      <>
        <Text fontSize="4xl" fontWeight="bold" mb="1.3rem">
          <Icon as={GiMusicalNotes} mr="1.5rem" />
          {song.title}
        </Text>
        <Text fontSize="1.2rem" color="gray.300">
          Duration: {song.duration}
        </Text>
      </>
    ) : (
      <Text fontSize="3xl">
        <Icon as={GiMusicalNotes} mr="1.5rem" />
        Select a song
      </Text>
    );
  return (
    <Flex w="full" justifyContent="center" alignItems="center">
      <Box
        w="60%"
        p="5rem"
        borderRadius="lg"
        border="1px"
        borderColor="gray.200"
      >
        {details}
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state: State) => ({ song: state.selectedSong });

export default connect(mapStateToProps)(SongDetails);
