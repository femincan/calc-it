export type CalculationLengthConfig = {
  maxLength: number;
  fontSize: number;
};

export const calculationLengthPresets: CalculationLengthConfig[] = [
  { maxLength: 8, fontSize: 28 },
  { maxLength: 15, fontSize: 16 },
  { maxLength: Infinity, fontSize: 12 },
];
