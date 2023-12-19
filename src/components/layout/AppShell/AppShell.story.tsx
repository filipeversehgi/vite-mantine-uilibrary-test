import { Meta, StoryObj } from '@storybook/react';
import AppShell from './AppShell';

/**
 * Loader that covers the entire page
 */
const meta: Meta<typeof AppShell> = {
  component: AppShell,
  tags: ['autodocs'],
  title: 'Layout/AppShell',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    header: <p>Header</p>,
    navbar: <p>Menu</p>,
    children: <p>Content</p>,
    headerConfig: { height: 60 },
    navbarConfig: { width: 200, breakpoint: 100 },
  },
};

export default meta;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {};
