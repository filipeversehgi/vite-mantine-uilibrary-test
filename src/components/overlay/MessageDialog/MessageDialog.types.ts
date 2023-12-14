import { ReactNode } from 'react'

export type MessageDialogProps = {
    title: string
    description?: ReactNode
    btnCloseLabel: string
    opened: boolean
    isLoading?: boolean
    withCloseButton: boolean
    closeOnClickOutside?: boolean
    closeFn: () => void
    size?: number
}
