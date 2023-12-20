import { NumberInputProps } from '@mantine/core';

import { FieldValues, UseControllerProps } from 'react-hook-form';

export type HFNumberInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<NumberInputProps, 'value' | 'defaultValue'>;
