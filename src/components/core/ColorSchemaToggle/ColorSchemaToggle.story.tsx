import { Meta, StoryObj } from '@storybook/react';
import { ColorSchemaToggle } from './ColorSchemaToggle';

/**
 * Swaps color schema between dark and light
 */
const meta: Meta<typeof ColorSchemaToggle> = {
  component: ColorSchemaToggle,
  tags: ['autodocs'],
  title: 'Core/ColorSchemaToggle',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof ColorSchemaToggle>;

export const Default: Story = {};
