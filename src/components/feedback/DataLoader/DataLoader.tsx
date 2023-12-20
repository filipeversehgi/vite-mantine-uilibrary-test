import { Flex, Loader } from '@mantine/core';

export function DataLoader() {
  return (
    <Flex justify="center" align="center" py={80}>
      <Loader />
    </Flex>
  );
}
