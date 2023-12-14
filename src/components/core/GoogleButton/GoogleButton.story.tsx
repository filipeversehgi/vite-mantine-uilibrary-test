import { Meta, StoryObj } from '@storybook/react';
import GoogleButton from './GoogleButton';

/**
 * A Google Button
 */
const meta: Meta<typeof GoogleButton> = {
  component: GoogleButton,
  tags: ['autodocs'],
  title: 'Core/GoogleButton',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof GoogleButton>;

export const Default: Story = {};
