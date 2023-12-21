import { Meta, StoryObj } from '@storybook/react'

import AvatarImage from '@/assets/images/sample-avatar.jpg'

import { Avatar } from './Avatar'

/**
 * Avatar with image which falls back to fixed colors based on the first letter
 */
const meta: Meta<typeof Avatar> = {
    component: Avatar,
    tags: ['autodocs'],
    title: 'Core/Avatar',
    parameters: {
        docs: {
            inline: true,
            canvas: { sourceState: 'shown' }, // start with the source open
        },
    },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
    args: {
        alt: 'John Doe',
        src: AvatarImage,
        size: 'lg',
        radius: 'xl',
    },
}

export const WithoutImage: Story = {
    name: 'Without Image',
    args: {
        alt: 'John Doe',
        radius: 'md',
        size: 'lg',
    },
}

export const WithFallback: Story = {
    name: 'With Custom Component',
    args: {
        alt: 'Albert',
        radius: 10,
        size: 'lg',
        fallback: <p>Pi</p>,
    },
}
