import { Meta, StoryObj } from '@storybook/react';
import { IconCrown } from '@tabler/icons-react';
import { Chip } from './Chip';

/**
 * A small tag-like component used to display short information
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
