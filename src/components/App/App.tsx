import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import SongDetails from '../SongDetails/SongDetails';
import SongList from '../SongList';

export const App: React.FC = () => {
  return (
    <Flex minH="100vh" px="5rem">
      <SongList />
      <SongDetails />
    </Flex>
  );
};
