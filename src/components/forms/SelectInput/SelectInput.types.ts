import { FocusEventHandler } from 'react'

import { SelectProps } from '@mantine/core'

import { FormInputType, ValidationObject } from '@/components/forms/types'

export type SelectInputProps = Omit<FormInputType, 'showCheckMark' | 'validations'> & {
    id: string
    required?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Array<any>
    label?: string | React.ReactNode
    placeholder?: string
    helperText?: string
    onChange?: (value: string | null) => void
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined
    name?: string | undefined
    validations?: ValidationObject
    showCheckMark?: boolean | undefined
    allowDeselect?: boolean | undefined
    clearable?: boolean | undefined
} & SelectProps
