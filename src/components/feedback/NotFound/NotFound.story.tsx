import { Meta, StoryObj } from '@storybook/react';
import NotFound from './NotFound';

/**
 * Loader that covers the entire page
 */
const meta: Meta<typeof NotFound> = {
  component: NotFound,
  tags: ['autodocs'],
  title: 'Feedback/NotFound',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    description: "These are not the droid you're looking for",
    title: 'Nothing was found here.',
    height: 200,
  },
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {};
