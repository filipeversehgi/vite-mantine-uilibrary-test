/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues, UseControllerProps } from 'react-hook-form'

import { SwitchProps } from '@mantine/core';

export type SwitchInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<SwitchProps, 'value' | 'checked' | 'defaultValue'>
