import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react'

import { Button } from '@mantine/core'

import { ConfirmDialog } from './ConfirmDialog'

/**
 * Confirm dialog based on Mantine Modal
 */
const meta: Meta<typeof ConfirmDialog> = {
    component: ConfirmDialog,
    tags: ['autodocs'],
    title: 'Overlay/ConfirmDialog',
    parameters: {
        docs: {
            inline: true,
            canvas: { sourceState: 'shown' }, // start with the source open
        },
    },
    args: {
        children: <p>Content</p>,
        isLoading: false,
        cancel: { text: 'Cancel', action: () => alert('Cancelled!') },
        confirm: { text: 'Confirm', action: () => alert('Comfirmed!') },
        size: 500,
        title: 'My Modal',
        opened: false,
    },
}

export default meta

type Story = StoryObj<typeof ConfirmDialog>

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <ConfirmDialog
                isLoading={false}
                cancel={{ text: 'Cancel', action: () => setIsOpen(false) }}
                confirm={{ text: 'Confirm', action: () => setIsOpen(false) }}
                onClose={() => {}}
                size={500}
                title="My Modal"
                opened={isOpen}>
                <p>This is a modal</p>
            </ConfirmDialog>
        </>
    )
}
