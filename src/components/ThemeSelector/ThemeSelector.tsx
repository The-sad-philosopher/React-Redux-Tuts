import * as React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';
import { HiSun, HiMoon } from 'react-icons/hi';

export const ThemeSelector: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <HiMoon /> : <HiSun />}
    </Button>
  );
};
