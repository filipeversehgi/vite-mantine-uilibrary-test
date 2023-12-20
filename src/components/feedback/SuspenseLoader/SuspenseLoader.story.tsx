import Logo from '@/assets/images/sample-company-logo.jpg';
import { Meta, StoryObj } from '@storybook/react';
import { SuspenseLoader } from './SuspenseLoader';

/**
 * Suspense component with auto-loading indicator
 */
const meta: Meta<typeof SuspenseLoader> = {
  component: SuspenseLoader,
  tags: ['autodocs'],
  title: 'Feedback/SuspenseLoader',
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
    children: <p>This is the loaded content</p>,
  },
};

export default meta;

type Story = StoryObj<typeof SuspenseLoader>;

export const Default: Story = {};
