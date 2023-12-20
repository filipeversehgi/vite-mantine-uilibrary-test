import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import TextInput from '../TextInput/TextInput';
import { withCheckmark } from './WithCheckmark';

/**
 * HOC that adds green checkmark on the left of components when it was changed and it's valid.<br />
 * <b style="color: red">Only accepts components that have onBlur + rightSection props</b>
 */
const meta: Meta<typeof withCheckmark> = {
  tags: ['autodocs'],
  title: 'HOC/withCheckmark',
  decorators: [withReactHookForm],
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export default meta;

type Story = StoryObj<typeof withCheckmark>;

export const Default: Story = {
  render: () => {
    const Component = withCheckmark(TextInput);

    return <Component label="Write anything" withCheckmark name="textfield" />;
  },
};
