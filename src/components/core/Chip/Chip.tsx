import { memo } from 'react';

import { Badge } from '@mantine/core';

import { ChipProps } from './Chip.types';

function Chip({ label, icon, showStatusCircle = false, ...props }: ChipProps) {
  const statusCircle = showStatusCircle ? <div></div> : undefined;

  return (
    <Badge leftSection={icon ? icon : statusCircle} {...props}>
      {label}
    </Badge>
  );
}

export default memo(Chip);
('');