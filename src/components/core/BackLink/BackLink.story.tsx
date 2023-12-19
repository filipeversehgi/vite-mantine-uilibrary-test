import { Meta, StoryObj } from '@storybook/react';
import BackLink from './BackLink';

/**
 * BackLink with image which falls back to fixed colors based on the first letter
 */
const meta: Meta<typeof BackLink> = {
  component: BackLink,
  tags: ['autodocs'],
  title: 'Core/BackLink',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export default meta;

type Story = StoryObj<typeof BackLink>;

export const Default: Story = {
  args: {},
};
