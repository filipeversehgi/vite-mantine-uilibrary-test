import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import TextInput from './TextInput';

/**
 * TextInput connected with React Hook Form.
 * <br />Based on Mantine TextInput component.
 */
const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ['autodocs'],
  title: 'Forms/TextInput',
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

type Story = StoryObj<typeof TextInput>;

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
