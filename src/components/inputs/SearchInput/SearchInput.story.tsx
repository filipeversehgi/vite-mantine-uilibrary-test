import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from './SearchInput'

/**
 * Search box with debunced onChange event
 */
const meta: Meta<typeof SearchInput> = {
    component: SearchInput,
    tags: ['autodocs'],
    title: 'Input/SearchInput',
    parameters: {
        docs: {
            inline: true,
            canvas: { sourceState: 'shown' }, // start with the source open
        },
    },
    args: {
        label: 'Type something and look into actions tab:',
        onDebounceChange: action('[Search Input Event]: onDebounceChange'),
    },
}

export default meta

type Story = StoryObj<typeof SearchInput>

export const Default: Story = {}
