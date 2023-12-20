import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import {NumberInput} from './NumberInput';

/**
 * Number Input connected with React Hook Form.
 * <br />Based on Mantine.
 */
const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  tags: ['autodocs'],
  title: 'Forms/NumberInput',
  decorators: [withReactHookForm],
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'Pick a number',
    required: true,
    name: 'myfield',
    withCheckmark: true,
    placeholder: 'Pick one',
    showTooltip: false,
    requirements: [],
  },
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {};

export const WithValidation: Story = {
  args: {
    label: 'Pick a number between 10 and 200',
    name: 'myfield',
    placeholder: 'Pick one',
    withCheckmark: true,
    showTooltip: true,
  },
  parameters: {
    resolver: zodResolver(
      z.object({
        myfield: z.number().min(10).max(200),
      })
    ),
  },
};
