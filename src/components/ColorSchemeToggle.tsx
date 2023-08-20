import { FunctionComponent } from 'react';
import { Box, Switch } from '@mantine/core';
import { useColorScheme } from '@src/hooks';

import { ReactComponent as MoonIcon } from '@src/assets/moon.svg';
import { ReactComponent as SunIcon } from '@src/assets/sun.svg';

const LabelIcon = ({ icon }: { icon: FunctionComponent }) => (
  <Box
    component={icon}
    sx={(theme) => ({
      width: 22,
      height: 22,
      fill: theme.colors.brand[3],
    })}
  />
);

export const ColorSchemeToggle = () => {
  const { isColorSchemeDark, toggleColorScheme } = useColorScheme();

  return (
    <Switch
      checked={!isColorSchemeDark}
      onChange={() => toggleColorScheme()}
      size='md'
      color='gray.0'
      onLabel={<LabelIcon icon={SunIcon} />}
      offLabel={<LabelIcon icon={MoonIcon} />}
      styles={(theme) => ({
        thumb: {
          backgroundColor: isColorSchemeDark
            ? theme.colors.gray[3]
            : theme.colors.gray[1],
          border: 'none',
        },
        track: {
          backgroundColor: isColorSchemeDark
            ? theme.colors.gray[2]
            : theme.colors.gray[0],
        },
      })}
    />
  );
};
