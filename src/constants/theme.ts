import { MantineThemeOverride } from '@mantine/core';

import BgDark from '@src/assets/bg-dark.svg';
import BgLight from '@src/assets/bg-light.svg';

export const theme: MantineThemeOverride = {
  fontFamily: '"Work Sans", sans-serif',
  colors: {
    brand: [
      '#D9DCF2',
      '#AEB5EC',
      '#808BEF',
      '#4B5EFC',
      '#3A4CE6',
      '#3041CD',
      '#3844A7',
      '#3B4489',
      '#3B4172',
      '#393D5F',
    ],
    gray: ['#F1F2F3', '#D2D3DA', '#2E2F38', '#4E505F'],
    background: ['#17171C', '#FFFFFF'],
  },
  primaryColor: 'brand',
  primaryShade: 3,
  globalStyles: (mantineTheme) => ({
    'html, body, #root': {
      minHeight: '100vh',
    },
    body: {
      background: `fixed no-repeat center/cover url(${
        mantineTheme.colorScheme === 'dark' ? BgDark : BgLight
      })`,
      width: '100vw',
      maxWidth: '100%',
      color: mantineTheme.colorScheme === 'dark' ? '#FFFFFF' : '#000000',
    },
  }),
  activeStyles: {
    transform: 'none',
  },
  radius: {
    container: '20px',
    button: '20px',
    indicator: '100px',
  },
};
