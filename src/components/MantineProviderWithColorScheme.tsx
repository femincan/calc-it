import { PropsWithChildren } from 'react';
import {
  ColorSchemeProvider as MantineColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@src/app/hooks';
import { selectColorScheme, toggle } from '@src/app/colorSchemeSlice';
import { theme } from '@src/constants';

export const MantineProviderWithColorScheme = ({
  children,
}: PropsWithChildren) => {
  const colorScheme = useAppSelector(selectColorScheme);
  const dispatch = useAppDispatch();

  const toggleColorScheme = () => {
    dispatch(toggle());
  };

  return (
    <MantineColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </MantineColorSchemeProvider>
  );
};
