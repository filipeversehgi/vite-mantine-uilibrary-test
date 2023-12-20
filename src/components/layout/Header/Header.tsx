import { Link } from 'react-router-dom';

import { Burger, Flex, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import classes from './Header.module.css';
import { HeaderProps } from './Header.types';

export function Header({ onToggle, logo, onlyForMobile = false }: HeaderProps) {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  if (!matches && onlyForMobile) return <></>;

  return (
    <Flex justify="space-between" align="center">
      <Link to="/">{logo}</Link>
      <Burger className={classes.burger} opened={false} onClick={() => onToggle()} size="sm" />
    </Flex>
  );
}
