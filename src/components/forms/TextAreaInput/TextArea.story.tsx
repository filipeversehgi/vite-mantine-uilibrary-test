import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import TextAreaInput from './TextAreaInput';

/**
 * Loader that covers the entire page
 */
const meta: Meta<typeof TextAreaInput> = {
  component: TextAreaInput,
  tags: ['autodocs'],
  title: 'Forms/TextAreaInput',
  decorators: [withReactHookForm],
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'Write anything',
    required: true,
    withCheckmark: true,
    name: 'textfield',
  },
};

export default meta;

type Story = StoryObj<typeof TextAreaInput>;

export const Default: Story = {};

export const WithValidation: Story = {
  args: {
    label: 'Please insert a URL',
  },
  parameters: {
    resolver: zodResolver(
      z.object({
        textfield: z.string().url(),
      })
    ),
  },
};
