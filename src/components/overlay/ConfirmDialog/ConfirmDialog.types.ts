import { ReactNode } from 'react'

import { ModalProps } from '@mantine/core'

export type ConfirmDialogProps = {
    children?: ReactNode
    isLoading?: boolean
    cancel?: { text: string; action: () => void }
    confirm?: { text: string; action: () => void }
    size?: number
} & ModalProps
