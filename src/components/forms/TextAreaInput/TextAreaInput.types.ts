import { TextareaProps } from '@mantine/core';

import { FieldValues, UseControllerProps } from 'react-hook-form';

export type HFTextAreaInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextareaProps, 'value' | 'defaultValue'> & {
    toolTipText?: string;
  };
