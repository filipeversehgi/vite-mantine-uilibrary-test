import { Notification } from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import { IconMinimize } from '@tabler/icons-react';
import { NotificationToaster } from './NotificationToaster';

/**
 * Toaster that will be used on Mantine notifications
 */
const meta: Meta<typeof NotificationToaster> = {
  component: NotificationToaster,
  tags: ['autodocs'],
  title: 'Feedback/NotificationToaster',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  decorators: [(story) => <Notification title="Oi">{story()}</Notification>],
  args: {
    message: 'This is a simple notification',
    rightContent: {
      action: () => {},
    },
  },
};

export default meta;

type Story = StoryObj<typeof NotificationToaster>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'You did great! Congrats!',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Your actions have not been approved',
  },
};

export const CustomClose: Story = {
  args: {
    rightContent: {
      action: () => alert('You clicked!'),
      text: 'Dismiss',
      icon: <IconMinimize />,
    },
  },
};
