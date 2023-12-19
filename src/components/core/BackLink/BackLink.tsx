import { Link } from 'react-router-dom';

import { Flex, MantineSize, Text, useMantineTheme } from '@mantine/core';

import { IconFlipBackward } from '@/components/icons/untitled-ui';

import { BackLinkProps } from './BackLink.types';

import classes from './BackLink.module.css';

function BackLink({ text, to, size = 'md', color, hideArrow, onClick, ...props }: BackLinkProps) {
  const theme = useMantineTheme();

  const sizeNumbers: Record<MantineSize, number> = {
    lg: 18,
    md: 16,
    sm: 14,
    xl: 20,
    xs: 12,
  };

  return (
    <Link to={to ?? 'http://localhost:3000'} className={classes.backLink} onClick={onClick}>
      <Flex align="center" justify="start" direction="row" {...props}>
        {!hideArrow && (
          <IconFlipBackward color={color || theme.colors.gray[2]} size={sizeNumbers[size]} />
        )}
        <Text c={color || theme.colors.gray[2]} size={size} ml="xs" tt="uppercase">
          {text}
        </Text>
      </Flex>
    </Link>
  );
}

export default BackLink;
