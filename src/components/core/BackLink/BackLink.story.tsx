import { Meta, StoryObj } from '@storybook/react';
import BackLink from './BackLink';

/**
 * Backlink to be used on headers
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
