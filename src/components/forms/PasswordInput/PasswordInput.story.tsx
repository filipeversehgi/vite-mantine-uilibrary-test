import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import {PasswordInput} from './PasswordInput';

/**
 * Password Input with tooltip showing requirements, connected with React Hook Form.
 * <br />Composed with Mantine PasswordInput + Tooltip
 */
const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  tags: ['autodocs'],
  title: 'Forms/PasswordInput',
  decorators: [withReactHookForm],
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'Pick a password',
    required: true,
    name: 'myfield',
    placeholder: 'Pick one',
    showTooltip: false,
    requirements: [],
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};

export const WithValidation: Story = {
  args: {
    label: 'Pick a password',
    required: true,
    name: 'myfield',
    placeholder: 'Pick one',
    showTooltip: true,
  },
  parameters: {
    resolver: zodResolver(
      z.object({
        myfield: z
          .string()
          .min(8)
          .regex(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{8,}$/)),
      })
    ),
  },
};
