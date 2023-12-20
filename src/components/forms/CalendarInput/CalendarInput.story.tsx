import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import CalendarInput from './CalendarInput';

/**
 * Calendar Input connected with React Hook Form.
 * <br />It's based on Mantine DateInput
 */
const meta: Meta<typeof CalendarInput> = {
  component: CalendarInput,
  tags: ['autodocs'],
  title: 'Forms/CalendarInput',
  decorators: [withReactHookForm],
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'Select a Date',
    required: true,
    withCheckmark: true,
    name: 'date',
  },
};

export default meta;

type Story = StoryObj<typeof CalendarInput>;

export const Default: Story = {};

export const WithValidation: Story = {
  args: {
    clearable: true,
    withCheckmark: false,
    required: false,
  },
  parameters: {
    resolver: zodResolver(
      z.object({
        date: z.date(),
      })
    ),
  },
};
