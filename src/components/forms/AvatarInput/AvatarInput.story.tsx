import { withReactHookForm } from '@/stories/hook-form-decorator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import AvatarInput from './AvatarInput';

/**
 * Avatar Input connected with React Hook Form.
 * <br />It's a component bundle of Mantine Dropzone, Dialog and Avatar
 */
const meta: Meta<typeof AvatarInput> = {
  component: AvatarInput,
  tags: ['autodocs'],
  title: 'Forms/AvatarInput',
  decorators: [withReactHookForm],
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    name: 'avatar',
    onUpload: {
      isLoading: false,
      upload: (file) => {},
    },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarInput>;

export const Default: Story = {};

export const UploadLoading: Story = {
  args: {
    onUpload: {
      isLoading: true,
      upload: (file) => {},
    },
  },
};

export const WithContent: Story = {
  args: {},
  parameters: {
    form: {
      defaultValues: {
        avatar: {
          info: {
            url: 'https://www.drawing123.com/wp-content/uploads/2021/10/pikachu-drawing-step-11.png',
            fileName: 'The File',
          },
        },
      },
    },
  },
};

export const WithValidation: Story = {
  args: {},
  parameters: {
    resolver: zodResolver(
      z.object({
        avatar: z.object(
          {
            url: z.string().url(),
            fileName: z.string(),
          },
          {
            required_error: 'Hey! You need to put up a picture.',
          }
        ),
      })
    ),
  },
};
