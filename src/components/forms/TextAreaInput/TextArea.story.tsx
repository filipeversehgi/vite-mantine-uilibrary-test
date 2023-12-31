import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod'

import { withReactHookForm } from '@/stories/hook-form-decorator'

import { TextAreaInput } from './TextAreaInput'

/**
 * TextArea connected with React Hook Form.
 * <br />Based on Mantine TextArea component.
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
}

export default meta

type Story = StoryObj<typeof TextAreaInput>

export const Default: Story = {}

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
}
