import React, { memo } from 'react';

import { Flex, Image } from '@mantine/core';

import classes from './GlobalLoader.module.css';

export interface GlobalLoaderProps {
  logo: React.ReactNode;
  w: number | string;
  alt: string;
}

function GlobalLoader({ logo, alt, w }: GlobalLoaderProps) {
  return (
    <Flex className={classes.container} align="center" justify="center" direction={'column'}>
      <div className={classes.logoContainer}>
        <Image w={w} src={logo} alt={alt} />
      </div>
      <div className={classes.loader}></div>
    </Flex>
  );
}

export default memo(GlobalLoader);
