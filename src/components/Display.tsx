import { Flex, Text } from '@mantine/core';

export const Display = () => (
  <Flex
    direction='column'
    sx={{
      direction: 'rtl',
    }}
  >
    {' '}
    <Text opacity={0.4} size={28} weight={300}>
      6,291/5
    </Text>
    <Text id='display' size={52} weight={300} sx={{ lineHeight: '120%' }}>
      1,258.2
    </Text>
  </Flex>
);
