import { useColorScheme } from '@src/hooks';

import LogoDark from '@src/assets/logo-dark.svg';
import LogoLight from '@src/assets/logo-light.svg';
import { Box } from '@mantine/core';

export const Logo = () => {
  const { isColorSchemeDark } = useColorScheme();

  return (
    <Box
      component='img'
      src={isColorSchemeDark ? LogoLight : LogoDark}
      width='100%'
    />
  );
};
