import { PropsWithChildren } from 'react';
import { Text } from '@mantine/core';
import { useColorScheme } from '@src/hooks';

const FooterLink = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => {
  const { isColorSchemeDark } = useColorScheme();

  return (
    <Text
      component='a'
      href={href}
      color={isColorSchemeDark ? 'blue' : 'blue.9'}
      underline
      inherit
    >
      {children}
    </Text>
  );
};

export const Footer = () => (
  <Text size='md' align='center'>
    Made by{' '}
    <FooterLink href='https://github.com/femincan'>Furkan Emin Can</FooterLink>
    <br />
    Check the repo{' '}
    <FooterLink href='https://github.com/femincan/calc-it'>here</FooterLink>
  </Text>
);
