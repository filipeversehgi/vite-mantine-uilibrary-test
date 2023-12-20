/* eslint-disable @typescript-eslint/no-explicit-any */


import { SwitchProps } from '@mantine/core';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type SwitchInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<SwitchProps, "value" | "checked" | "defaultValue">;
