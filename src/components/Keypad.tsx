import { addNumber, addOperator, getResult } from 'calculator-utility';
import { Box, Flex, px } from '@mantine/core';
import { useColorScheme } from '@src/hooks';
import { useAppDispatch, useAppSelector } from '@src/app/hooks';
import {
  changeCalculation,
  resetPastCalculation,
  selectCalculation,
} from '@src/app/calculatorSlice';
import {
  actionFunctionMap,
  actionKeys,
  colorMap,
  halfWidthKeys,
  numericKeys,
  operatorKeys,
} from '@src/constants';
import { Key } from './Key';

export const Keypad = () => {
  const { colorScheme } = useColorScheme();

  const calculation = useAppSelector(selectCalculation);
  const dispatch = useAppDispatch();

  return (
    <Flex
      justify='center'
      align='center'
      wrap='wrap'
      gap='sm'
      sx={{
        alignContent: 'flex-start',
      }}
    >
      {actionKeys.map((actionKey) => (
        <Key
          onClick={() => {
            if (actionKey.id === 'clear') {
              dispatch(resetPastCalculation());
            }
            const actionFunction = actionFunctionMap[actionKey.id];
            const newCalculation = actionFunction(calculation.currentValue);

            dispatch(changeCalculation({ calculation: newCalculation }));
          }}
          key={actionKey.id}
          id={actionKey.id}
          order={actionKey.order}
          color={colorMap[colorScheme].action}
        >
          {typeof actionKey.value === 'string' ? (
            actionKey.value
          ) : (
            <Box
              component={actionKey.value}
              sx={{ fill: 'currentcolor', height: 24 }}
            />
          )}
        </Key>
      ))}
      {operatorKeys.map((operatorKey) => (
        <Key
          onClick={() => {
            if (operatorKey.id === 'equals') {
              const newCalculation = getResult(calculation.currentValue);

              dispatch(
                changeCalculation({
                  calculation: newCalculation,
                  isResult: true,
                }),
              );
            } else {
              const newCalculation = addOperator(
                operatorKey.value,
                calculation.currentValue,
              );

              dispatch(changeCalculation({ calculation: newCalculation }));
            }
          }}
          key={operatorKey.id}
          id={operatorKey.id}
          order={operatorKey.order}
          color={colorMap[colorScheme].operator}
          useInitialColor={false}
          w={halfWidthKeys.includes(operatorKey.id) ? 108 + px('0.75rem') : 54}
        >
          {operatorKey.value}
        </Key>
      ))}
      {numericKeys.map((numericKey) => (
        <Key
          onClick={() => {
            const newCalculation = addNumber(
              numericKey.value,
              calculation.currentValue,
            );

            dispatch(changeCalculation({ calculation: newCalculation }));
          }}
          key={numericKey.id}
          id={numericKey.id}
          order={numericKey.order}
          color={colorMap[colorScheme].numeric}
          w={halfWidthKeys.includes(numericKey.id) ? 108 + px('0.75rem') : 54}
        >
          {numericKey.value}
        </Key>
      ))}
    </Flex>
  );
};
