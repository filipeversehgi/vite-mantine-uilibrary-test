import { RadioGroupProps } from '@mantine/core'

export type RadioInputProps = {
    id: string
    required: boolean
    enumValues: { label: string; value: string | number }[]
    placeholder?: string
    label?: string
    helperText?: string
    name?: string
} & Omit<RadioGroupProps, 'children'>
