import { FieldValues, UseControllerProps } from 'react-hook-form'

import { SelectProps } from '@mantine/core';

export type SelectInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<SelectProps, 'value' | 'defaultValue'>
