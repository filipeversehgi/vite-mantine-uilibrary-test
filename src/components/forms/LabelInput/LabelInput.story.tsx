import { Meta, StoryObj } from '@storybook/react';
import LabelInput from './LabelInput';

/**
 * Loader to be used inside components
 */
const meta: Meta<typeof LabelInput> = {
  component: LabelInput,
  tags: ['autodocs'],
  title: 'Forms/LabelInput',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'My label',
    required: true,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof LabelInput>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    label: 'Required label',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled label',
    required: false,
    disabled: true,
  },
};

export const OptionalText: Story = {
  args: {
    label: 'Required label',
    required: false,
  },
};
