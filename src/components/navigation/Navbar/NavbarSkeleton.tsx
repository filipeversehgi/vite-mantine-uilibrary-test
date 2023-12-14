import { Flex, Skeleton } from '@mantine/core';

function NavbarSkeleton() {
  return (
    <>
      <Flex w="100%" h={'100%'} align="flex-start" mt="sm">
        <Flex style={{ flex: 1 }} direction="column" align="flex-start" gap={8}>
          <Skeleton w="12%" height={14} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="12%" height={14} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="12%" height={14} />
          <Skeleton w="100%" height={28} />
          <Skeleton w="100%" height={28} />
        </Flex>
      </Flex>
    </>
  );
}

export default NavbarSkeleton;
