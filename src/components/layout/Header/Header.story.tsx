import { Title } from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

/**
 * Collapsable header component
 */
const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  title: 'Layout/Header',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    onToggle: () => {},
    logo: <Title order={6}>My Company Logo</Title>,
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
export const OnlyMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone5',
    },
  },
  args: { onlyForMobile: true, logo: <p>Try changing the viewport!</p> },
};
