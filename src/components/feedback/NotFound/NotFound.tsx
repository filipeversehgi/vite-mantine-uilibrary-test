import { Flex, Text } from '@mantine/core';

import { IconFileSearch } from '@/components/icons/untitled-ui';

import { NotFoundProps } from './NotFound.types';

import classes from './NotFound.module.css';

function NotFound({ title, description, height }: NotFoundProps) {
  return (
    <Flex
      h={height}
      className={classes.emptyList}
      align="center"
      justify="center"
      direction="column"
    >
      <IconFileSearch />

      <Text className={classes.title} my="xs" size="lg">
        {title}
      </Text>

      <Text className={classes.description} ta="center">
        {description}
      </Text>
    </Flex>
  );
}

export default NotFound;
