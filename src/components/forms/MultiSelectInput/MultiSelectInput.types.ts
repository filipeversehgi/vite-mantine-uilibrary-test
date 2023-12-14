/* eslint-disable @typescript-eslint/no-explicit-any */
import { FocusEventHandler } from 'react'

import { MultiSelectProps } from '@mantine/core'

import { FormInputType, ValidationObject } from '@/components/forms/types'
import { ValueLabelProps } from '@/components/icons/types'

export type MultiSelectInputProps = Omit<FormInputType, 'showCheckMark' | 'validations'> & {
    id: string
    required?: boolean
    enumValues?: Array<string | number | boolean>
    data?: ValueLabelProps[]
    label?: string
    placeholder?: string
    helperText?: string
    onChange?: (value: string[]) => void
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined
    name?: string | undefined
    validations?: ValidationObject
    showCheckMark?: boolean | undefined
    enableCollapsibleValues?: boolean
    maxCollapsibleValues?: number
    maxCollapsibleMessage?: string
} & MultiSelectProps
