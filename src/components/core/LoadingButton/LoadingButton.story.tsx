import { Meta, StoryObj } from '@storybook/react';

import { LoadingButton } from './LoadingButton'

/**
 * Wraps a Button into loading state
 */
const meta: Meta<typeof LoadingButton> = {
    component: LoadingButton,
    tags: ['autodocs'],
    title: 'Core/LoadingButton',
    parameters: {
        docs: {
            inline: true,
            canvas: { sourceState: 'shown' }, // start with the source open
        },
    },
    args: {
        isLoading: true,
        children: 'Click Me!',
    },
}

export default meta

type Story = StoryObj<typeof LoadingButton>

export const Loading: Story = {}

export const NoLoading: Story = {
    args: {
        isLoading: false,
    },
}
