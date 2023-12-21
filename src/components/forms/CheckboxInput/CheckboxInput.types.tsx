import { FieldValues, UseControllerProps } from 'react-hook-form'

import { CheckboxProps } from '@mantine/core';

export type HFCheckboxInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<CheckboxProps, 'checked' | 'defaultValue'>
