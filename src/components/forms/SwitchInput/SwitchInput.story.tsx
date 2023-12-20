import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import {SwitchInput} from './SwitchInput';

/**
 * Switch Component connected with React Hook Form.
 * <br />Based on Mantine Switch component.
 */
const meta: Meta<typeof SwitchInput.Item> = {
  component: SwitchInput.Item,
  tags: ['autodocs'],
  title: 'Forms/SwitchInput.Item',
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
    name: 'myfield',
  },
};

export default meta;

type Story = StoryObj<typeof SwitchInput.Item>;

export const Default: Story = {};

export const WithValidation: Story = {
  args: {
    label: 'Please insert a URL',
  },
  parameters: {
    resolver: zodResolver(
      z.object({
        myfield: z.string().url(),
      })
    ),
  },
};
