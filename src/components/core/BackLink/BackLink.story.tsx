import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import BackLink from './BackLink';

/**
 * BackLink with image which falls back to fixed colors based on the first letter
 */
const meta: Meta<typeof BackLink> = {
  component: BackLink,
  tags: ['autodocs'],
  title: 'Core/BackLink',
  decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>],
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
