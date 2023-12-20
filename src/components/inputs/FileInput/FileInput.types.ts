import { FocusEventHandler } from 'react'

import { FileInputProps as InputFileProps } from '@mantine/core'

export type FileInputProps = {
    id: string
    required: boolean
    label?: string
    placeholder?: string
    helperText?: string
    onChange?: (payload: File | null) => void
    onBlur?: FocusEventHandler<HTMLButtonElement> | undefined
    name?: string | undefined
} & InputFileProps
