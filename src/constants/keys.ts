import { FunctionComponent } from 'react';
import {
  addDecimal,
  addOperator,
  clearAll,
  clearOne,
} from 'calculator-utility';

import { ReactComponent as RemoveIcon } from '@src/assets/remove.svg';

export type Key<IncludeFunctionComponentValue extends boolean = false> = {
  id: string;
  order: number;
  value: IncludeFunctionComponentValue extends true
    ? string | FunctionComponent
    : string;
};

export const actionKeys: Key<true>[] = [
  { id: 'decimal', order: 1, value: '.' },
  { id: 'clear', order: 2, value: 'C' },
  { id: 'clear-one', order: 3, value: RemoveIcon },
];

export const operatorKeys: Key[] = [
  { id: 'divide', order: 4, value: '/' },
  { id: 'multiply', order: 8, value: '*' },
  { id: 'subtract', order: 12, value: '-' },
  { id: 'add', order: 16, value: '+' },
  { id: 'equals', order: 18, value: '=' },
];

export const numericKeys: Key[] = [
  { id: 'seven', order: 5, value: '7' },
  { id: 'eight', order: 6, value: '8' },
  { id: 'nine', order: 7, value: '9' },
  { id: 'four', order: 9, value: '4' },
  { id: 'five', order: 10, value: '5' },
  { id: 'six', order: 11, value: '6' },
  { id: 'one', order: 13, value: '1' },
  { id: 'two', order: 14, value: '2' },
  { id: 'three', order: 15, value: '3' },
  { id: 'zero', order: 17, value: '0' },
];

export const colorMap = {
  light: {
    action: 'gray.2',
    operator: 'brand',
    numeric: 'gray.0',
  },
  dark: {
    action: 'gray.6',
    operator: 'brand',
    numeric: 'gray.4',
  },
};

export const halfWidthKeys = ['equals', 'zero'];

export const actionFunctionMap = {
  decimal: addDecimal,
  clear: clearAll,
  'clear-one': clearOne,
};

export type ActionFunctionMapKey = keyof typeof actionFunctionMap;

export type OperatorValue = Parameters<typeof addOperator>[0];
