/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, UseControllerProps } from 'react-hook-form'

export type FormInputType<T extends FieldValues> = {
    label?: string
    placeholder?: string
    helperText?: string
    showCheckMark?: boolean
    required?: boolean
    hideOptionalLabel?: boolean
} & UseControllerProps<T>
