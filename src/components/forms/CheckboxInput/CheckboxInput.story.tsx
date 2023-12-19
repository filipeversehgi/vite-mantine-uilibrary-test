import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import CheckboxInput from './CheckboxInput';

/**
 * Loader that covers the entire page
 */
const meta: Meta<typeof CheckboxInput> = {
  component: CheckboxInput,
  tags: ['autodocs'],
  title: 'Forms/CheckboxInput',
  decorators: [withReactHookForm],
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'Do you agree?',
    description: 'Mark if you agree',
    required: true,
    name: 'agreement',
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Default: Story = {};

export const WithValidation: Story = {
  args: {
    required: false,
  },
  parameters: {
    resolver: zodResolver(
      z.object({
        agreement: z.boolean(),
      })
    ),
  },
};
