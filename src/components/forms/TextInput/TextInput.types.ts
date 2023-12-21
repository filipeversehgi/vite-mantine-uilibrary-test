import { FieldValues, UseControllerProps } from 'react-hook-form'

import { TextInputProps } from '@mantine/core';

export type HFTextInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<TextInputProps, 'value' | 'defaultValue'>
