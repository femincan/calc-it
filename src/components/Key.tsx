import { Button } from '@mantine/core';
import { ComponentProps, PropsWithChildren } from 'react';

export const Key = ({
  children,
  order,
  useInitialColor = true,
  ...props
}: PropsWithChildren<
  { order: number; useInitialColor?: boolean } & ComponentProps<
    typeof Button<'button'>
  >
>) => (
  <Button
    component='button'
    w={54}
    h={54}
    radius='button'
    styles={{
      label: {
        overflow: 'visible',
      },
    }}
    sx={{
      fontSize: 20,
      fontWeight: 400,
      color: useInitialColor ? 'initial' : undefined,
      order,
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </Button>
);
