import { SelectProps } from '@mantine/core';

import { FieldValues, UseControllerProps } from 'react-hook-form';

export type SelectInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectProps, 'value' | 'defaultValue'>;
