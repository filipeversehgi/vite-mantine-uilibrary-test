import { MantineSize } from '@mantine/core';

export type AvatarImageProps = {
  alt: string;
  src?: string | null;
  size?: MantineSize | (string & {}) | number;
  radius?: MantineSize | (string & {}) | number;
  fallback?: React.ReactNode;
};

export type AvatarColorProps = Pick<AvatarImageProps, 'alt' | 'radius' | 'size' | 'fallback'>;
