import { MantineNumberSize } from '@mantine/styles';
import { PrimitiveAtom } from 'jotai';

export type DrawerProps = {
  position?: 'top' | 'right' | 'bottom' | 'left';
  fullSize?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  atom: PrimitiveAtom<boolean>;
  size?: MantineNumberSize;
  withCloseButton?: boolean;
  className?: string;
};
