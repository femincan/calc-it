import { Box, Flex } from '@mantine/core';
import { useColorScheme } from '@src/hooks';
import { Logo } from './Logo';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import { Display } from './Display';
import { Keypad } from './Keypad';

export const Calculator = () => {
  const { isColorSchemeDark } = useColorScheme();

  return (
    <Flex
      direction='column'
      gap='xl'
      sx={(theme) => ({
        height: 635,
        width: 315,
        backgroundColor: isColorSchemeDark
          ? theme.colors.background[0]
          : theme.colors.background[1],
        borderRadius: theme.radius.container,
      })}
    >
      <Flex direction='column' align='center' gap='md'>
        <Logo />
        <ColorSchemeToggle />
      </Flex>
      <Flex
        direction='column'
        justify='space-between'
        gap='xs'
        sx={{ flex: 1, padding: 20 }}
      >
        <Flex direction='column' justify='flex-end' sx={{ flex: 1 }}>
          <Display />
        </Flex>
        <Flex
          direction='column'
          justify='space-between'
          gap='1.5rem'
          sx={(theme) => ({ flex: 1, paddingTop: theme.spacing.sm })}
        >
          <Keypad />
          <Box
            sx={(theme) => ({
              alignSelf: 'center',
              width: '50%',
              height: 4,
              backgroundColor: isColorSchemeDark ? 'white' : 'black',
              borderRadius: theme.radius.indicator,
            })}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
