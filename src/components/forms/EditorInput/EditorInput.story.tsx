import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod'

import { withReactHookForm } from '@/stories/hook-form-decorator'

import { EditorInput } from './EditorInput'

/**
 * Calendar Input connected with React Hook Form.
 * <br />It's based on Mantine DateInput
 */
const meta: Meta<typeof EditorInput> = {
    component: EditorInput,
    tags: ['autodocs'],
    title: 'Forms/EditorInput',
    decorators: [withReactHookForm],
    parameters: {
        docs: {
            inline: true,
            canvas: { sourceState: 'shown' }, // start with the source open
        },
    },
    args: {
        label: 'Enter your text',
        required: false,
        name: 'myfield',
    },
}

export default meta

type Story = StoryObj<typeof EditorInput>

export const Default: Story = {}

export const WithValidation: Story = {
    args: {
        required: true,
    },
    parameters: {
        resolver: zodResolver(
            z.object({
                myfield: z.string(),
            })
        ),
    },
}
