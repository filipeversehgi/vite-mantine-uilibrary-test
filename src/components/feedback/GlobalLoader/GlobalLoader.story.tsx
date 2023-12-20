import Logo from '@/assets/images/sample-company-logo.jpg';
import { Meta, StoryObj } from '@storybook/react';
import { GlobalLoader } from './GlobalLoader';

/**
 * Loader that covers the entire page
 */
const meta: Meta<typeof GlobalLoader> = {
  component: GlobalLoader,
  tags: ['autodocs'],
  title: 'Feedback/GlobalLoader',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    logo: Logo,
    w: '400px',
    alt: 'My Compay Name',
  },
};

export default meta;

type Story = StoryObj<typeof GlobalLoader>;

export const Default: Story = {};
