import { Flex, Text } from '@mantine/core';
import { selectCalculation } from '@src/app/calculatorSlice';
import { useAppSelector } from '@src/app/hooks';
import {
  CalculationLengthConfig,
  calculationLengthPresets,
} from '@src/constants';

const adjustFontSizeByLength = (targetLength: number) => {
  const { fontSize } = calculationLengthPresets.find(
    (preset) => targetLength < preset.maxLength,
  ) as CalculationLengthConfig;

  return fontSize;
};

export const Display = () => {
  const calculation = useAppSelector(selectCalculation);
  const fontSize = adjustFontSizeByLength(calculation.currentValue.length);

  return (
    <Flex direction='column' sx={{ fontSize, textAlign: 'right' }}>
      <Text
        opacity={0.4}
        size='1em'
        weight={300}
        lh='100%'
        maw='100%'
        sx={{ overflowWrap: 'break-word' }}
      >
        {calculation.pastValue}
      </Text>
      <Text id='display' size='2em' weight={300} sx={{ lineHeight: '120%' }}>
        {calculation.currentValue}
      </Text>
    </Flex>
  );
};
