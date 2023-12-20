import { Meta, StoryObj } from '@storybook/react';
import { DataLoader } from './DataLoader';

/**
 * Loader to be used inside components
 */
const meta: Meta<typeof DataLoader> = {
  component: DataLoader,
  tags: ['autodocs'],
  title: 'Feedback/DataLoader',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof DataLoader>;

export const Default: Story = {};
