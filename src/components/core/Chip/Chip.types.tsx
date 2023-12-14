import { BadgeProps as MantineBadgeProps } from '@mantine/core';
import { ReactNode } from 'react';

export type ChipProps = {
  label: string;
  showStatusCircle?: boolean;
  icon?: ReactNode;
} & MantineBadgeProps;
