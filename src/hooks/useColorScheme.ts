import { useMantineColorScheme } from '@mantine/core';

export const useColorScheme = () => {
  const mantineColorSchemeContext = useMantineColorScheme();
  const isColorSchemeDark = mantineColorSchemeContext.colorScheme === 'dark';

  return {
    ...mantineColorSchemeContext,
    isColorSchemeDark,
  };
};
