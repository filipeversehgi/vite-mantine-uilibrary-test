import { CheckboxProps } from '@mantine/core';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type HFCheckboxInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'defaultValue'>;
