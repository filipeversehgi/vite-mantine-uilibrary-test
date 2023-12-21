import { EventInfo } from '@ckeditor/ckeditor5-utils'
import React from 'react'
import { FieldValues } from 'react-hook-form';

import { FormInputType } from '../types'

export type EditorInputProps<T extends FieldValues> = FormInputType<T> & {
    toolTipText?: string
    disabled?: boolean
    onChange?: (value: Date | null) => void
    onBlur?: (event: EventInfo<string, unknown>, editor: string) => void
    maxLength?: number
    className?: string
    toolbar?: string[]
    rightSection?: React.ReactNode
}
