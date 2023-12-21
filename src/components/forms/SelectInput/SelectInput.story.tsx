import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod'

import { withReactHookForm } from '@/stories/hook-form-decorator'

import { SelectInput } from './SelectInput'

/**
 * Select Input connected with React Hook Form.
 * <br />Based on Mantine Select.
 */
const meta: Meta<typeof SelectInput> = {
    component: SelectInput,
    tags: ['autodocs'],
    title: 'Forms/SelectInput',
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
        withCheckmark: true,
        placeholder: 'Pick one',
        data: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'ng' },
            { label: 'Vue', value: 'vue' },
            { label: 'Svelte', value: 'svelte' },
        ],
    },
}

export default meta

type Story = StoryObj<typeof SelectInput>

export const Default: Story = {}

export const WithValidation: Story = {
    args: {
        label: 'Please insert a URL',
    },
    parameters: {
        resolver: zodResolver(
            z.object({
                myfield: z.string(),
            })
        ),
    },
}
