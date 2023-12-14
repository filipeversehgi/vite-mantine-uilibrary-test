import { FocusEventHandler } from 'react'

import { ColorInputProps as InputColorProps } from '@mantine/core'

export type ColorInputProps = {
    id: string
    required: boolean
    label?: string
    placeholder?: string
    helperText?: string
    onChange?: (color: string) => void
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined
    name?: string | undefined
} & InputColorProps
