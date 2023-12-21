import { FieldValues, UseControllerProps } from 'react-hook-form'

import { TextareaProps } from '@mantine/core';

export type HFTextAreaInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<TextareaProps, 'value' | 'defaultValue'> & {
        toolTipText?: string
    }
