import { memo } from 'react';

import { ActionIcon, ActionIconProps } from '@mantine/core';

import { GoogleIcon } from '@/components/icons';

function $GoogleButton(props: ActionIconProps) {
  return (
    <ActionIcon variant="default" color="gray" {...props}>
      <GoogleIcon />
    </ActionIcon>
  );
}

export const GoogleButton = memo($GoogleButton);
