import { FieldValues, UseControllerProps } from 'react-hook-form'

import { NumberInputProps } from '@mantine/core';

export type HFNumberInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<NumberInputProps, 'value' | 'defaultValue'>
