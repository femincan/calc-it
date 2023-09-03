import { Flex, Text } from '@mantine/core';
import { selectCalculation } from '@src/app/calculatorSlice';
import { useAppSelector } from '@src/app/hooks';

export const Display = () => {
  const calculation = useAppSelector(selectCalculation);

  return (
    <Flex direction='column' align='flex-end' sx={{ fontSize: 28 }}>
      <Text opacity={0.4} size='1em' weight={300}>
        {calculation.pastValue}
      </Text>
      <Text id='display' size='2em' weight={300} sx={{ lineHeight: '120%' }}>
        {calculation.currentValue}
      </Text>
    </Flex>
  );
};
