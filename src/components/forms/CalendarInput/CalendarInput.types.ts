import { FocusEventHandler } from 'react'

import { DateInputProps } from '@mantine/dates'

import { FormInputType, ValidationObject } from '@/components/forms/types'

export type CalendarInputProps = Omit<FormInputType, 'showCheckMark' | 'validations'> & {
    id: string
    required: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    label?: string | React.ReactNode
    placeholder?: string
    helperText?: string
    minDate?: Date
    valueFormat?: string
    clearable?: boolean
    showCheckMark?: boolean | undefined
    onChange?: (value: Date | null) => void
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined
    validations?: ValidationObject
    disabled?: boolean
    name?: string | undefined
} & DateInputProps
