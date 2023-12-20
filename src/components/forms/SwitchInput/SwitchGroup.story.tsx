import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import { SwitchGroup } from './SwitchGroup';
import { Group } from '@mantine/core';
import SwitchInput from './SwitchInput';

/**
 * Switch Group connected with React Hook Form.
 * <br />Based on Mantine Switch component.
 */
const meta: Meta<typeof SwitchGroup> = {
  component: SwitchGroup,
  tags: ['autodocs'],
  title: 'Forms/SwitchGroup',
  decorators: [withReactHookForm],
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'Your favourite Framework',
    required: true,
    name: 'myfield',
  },
};

export default meta;

type Story = StoryObj<typeof SwitchGroup>;

export const Default: Story = {
  render: (args) => {
    return (
      <SwitchInput.Group {...args}>
        <Group mt="xs">
          <SwitchInput.Item value="react" label="React" />
          <SwitchInput.Item value="svelte" label="Svelte" />
          <SwitchInput.Item value="ng" label="Angular" />
          <SwitchInput.Item value="vue" label="Vue" />
        </Group>
      </SwitchInput.Group>
    );
  },
};

export const WithValidation: Story = {
  render: (args) => {
    return (
      <SwitchInput.Group {...args}>
        <Group mt="xs">
          <SwitchInput.Item value="react" label="React" />
          <SwitchInput.Item value="svelte" label="Svelte" />
          <SwitchInput.Item value="ng" label="Angular" />
          <SwitchInput.Item value="vue" label="Vue" />
        </Group>
      </SwitchInput.Group>
    );
  },
  args: {
    label: 'Please insert a URL',
  },
  parameters: {
    resolver: zodResolver(
      z.object({
        myfield: z.array(z.string()),
      })
    ),
  },
};
