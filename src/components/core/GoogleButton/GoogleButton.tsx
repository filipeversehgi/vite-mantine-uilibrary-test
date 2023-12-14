import { memo } from 'react';

import { ActionIcon, ActionIconProps } from '@mantine/core';

import { GoogleIcon } from '@/components/icons/general';

function GoogleButton(props: ActionIconProps) {
  return (
    <ActionIcon variant="default" color="gray" {...props}>
      <GoogleIcon />
    </ActionIcon>
  );
}

export default memo(GoogleButton);
