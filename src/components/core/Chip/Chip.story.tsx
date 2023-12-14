import { Meta, StoryObj } from '@storybook/react';
import { IconCrown } from '@tabler/icons-react';
import Chip from './Chip';

/**
 * Chip with image which falls back to fixed colors based on the first letter
 */
const meta: Meta<typeof Chip> = {
  component: Chip,
  tags: ['autodocs'],
  title: 'Core/Chip',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'Corvinal',
    icon: <IconCrown height="16" />,
    showStatusCircle: false,
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const CustomColor: Story = {
  args: {
    label: 'Griffindor',
    icon: <IconCrown height="16" />,
    showStatusCircle: false,
    color: 'red',
  },
};
