import { FieldValues, UseControllerProps } from 'react-hook-form'

import { DateInputProps } from '@mantine/dates';

export type CalendarInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<DateInputProps, 'value' | 'defaultValue'>
