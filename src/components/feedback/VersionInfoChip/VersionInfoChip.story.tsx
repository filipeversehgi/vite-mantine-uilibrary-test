import { Meta, StoryObj } from '@storybook/react';
import VersionInfoChip from './VersionInfoChip';

/**
 * Loader that covers the entire page
 */
const meta: Meta<typeof VersionInfoChip> = {
  component: VersionInfoChip,
  tags: ['autodocs'],
  title: 'Feedback/VersionInfoChip',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  decorators: [(story) => <div style={{ height: 50 }}>{story()}</div>],
  args: {
    version: 'v8.0.1',
  },
};

export default meta;

type Story = StoryObj<typeof VersionInfoChip>;

export const Default: Story = {};
