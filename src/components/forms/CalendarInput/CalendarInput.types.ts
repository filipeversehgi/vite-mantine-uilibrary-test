
import { DateInputProps } from '@mantine/dates'

import { FieldValues, UseControllerProps } from 'react-hook-form'

export type CalendarInputProps<T extends FieldValues> = UseControllerProps<T> & Omit<DateInputProps, "value" | "defaultValue">
